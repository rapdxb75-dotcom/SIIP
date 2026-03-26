import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Crosshair, Pause, Play } from 'lucide-react';

const PixelShipSVG = ({ empty }: { empty?: boolean }) => (
  <svg viewBox="0 0 24 16" width="16" height="12" fill="currentColor" className={empty ? "opacity-30 mix-blend-screen" : "opacity-100"}>
    <rect x="10" y="0" width="4" height="2" />
    <rect x="8" y="2" width="8" height="2" />
    <rect x="0" y="4" width="24" height="4" />
    <rect x="2" y="8" width="20" height="4" />
  </svg>
);

interface GameState {
  score: number;
  lives: number;
  level: number;
  gameOver: boolean;
  started: boolean;
  paused: boolean;
  won: boolean;
}

const SpaceInvadersGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameStateRef = useRef<GameState>({ score: 0, lives: 2, level: 0, gameOver: false, started: false, paused: false, won: false });
  const animFrameRef = useRef<number>(0);
  const [displayState, setDisplayState] = useState<GameState>({ score: 0, lives: 2, level: 0, gameOver: false, started: false, paused: false, won: false });
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('invadersBestScore='));
    if (cookie) setBestScore(parseInt(cookie.split('=')[1], 10));
  }, []);

  useEffect(() => {
    if (displayState.gameOver || displayState.won) {
      if (displayState.score > bestScore) {
        setBestScore(displayState.score);
        const date = new Date();
        date.setTime(date.getTime() + (60 * 24 * 60 * 60 * 1000));
        document.cookie = `invadersBestScore=${displayState.score}; expires=${date.toUTCString()}; path=/`;
      }
    }
  }, [displayState.gameOver, displayState.won, displayState.score, bestScore]);
  const [soundOn, setSoundOn] = useState(true);
  const soundOnRef = useRef(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const keysRef = useRef<Set<string>>(new Set());
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const touchXRef = useRef<number | null>(null);
  const shootRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const moveLeftRef = useRef(false);
  const moveRightRef = useRef(false);

  const MAX_LEVEL = 5;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const initAudio = () => {
    if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
    if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();
  };

  const playSound = useCallback((type: 'shoot' | 'hit' | 'die' | 'win' | 'levelup' | 'bgm0' | 'bgm1' | 'bgm2' | 'bgm3') => {
    if (!soundOnRef.current) return;
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
      if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();
      
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'shoot') { osc.frequency.value = 600; gain.gain.value = 0.1; osc.type = 'square'; }
      else if (type === 'hit') { osc.frequency.value = 200; gain.gain.value = 0.15; osc.type = 'square'; }
      else if (type === 'levelup') { osc.frequency.value = 800; gain.gain.value = 0.12; osc.type = 'sine'; }
      else if (type === 'win') { osc.frequency.value = 1000; gain.gain.value = 0.15; osc.type = 'sine'; }
      else if (type.startsWith('bgm')) {
        const idx = parseInt(type.replace('bgm', ''));
        osc.frequency.value = [164.81, 146.83, 130.81, 110.00][idx];
        gain.gain.value = 0.08;
        osc.type = 'sawtooth';
      }
      else { osc.frequency.value = 100; gain.gain.value = 0.2; osc.type = 'sawtooth'; }
      
      osc.start();
      osc.stop(ctx.currentTime + (type.startsWith('bgm') ? 0.06 : (type === 'win' ? 0.3 : 0.1)));
    } catch (err) {
      // Ignored
    }
  }, []); // Remove soundOn dependency so it doesn't restart the closure

  const togglePause = () => {
    const next = !isManuallyPaused;
    setIsManuallyPaused(next);
    gameStateRef.current.paused = next;
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    soundOnRef.current = next;
    if (next) initAudio();
  };


  const startGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    // Scale up slightly more for mobile so it's not "too small"
    const scale = isMobile ? Math.max(W / 240, 1.4) : Math.max(W / 400, 0.5);

    // Contained gameplay area to match header
    let containerBaseWidth = W;
    if (W >= 1400) containerBaseWidth = 1400; // 2xl from config
    else if (W >= 1280) containerBaseWidth = 1280; // xl
    else if (W >= 1024) containerBaseWidth = 1024; // lg
    else if (W >= 768) containerBaseWidth = 768; // md
    else if (W >= 640) containerBaseWidth = 640; // sm

    const totalPadding = isMobile ? 32 : 64; // matches px-4 and md:px-8
    const gameAreaWidth = containerBaseWidth - totalPadding;
    const gameAreaLeft = (W - gameAreaWidth) / 2;
    const gameAreaRight = gameAreaLeft + gameAreaWidth;

    let currentLevel = 0;

    let playerX = W / 2;
    const playerW = 24 * scale;
    const playerH = 16 * scale;
    const playerY = H - (isMobile ? 80 * scale : 30 * scale);
    const playerSpeed = (isMobile ? 4 : 3) * scale;

    let bullets: { x: number; y: number }[] = [];
    const bulletSpeed = 5 * scale;
    let lastShot = 0;
    const shotCooldown = 250;

    const spawnEnemies = (level: number) => {
      const enemyCols = Math.min(6 + level, Math.floor(W / (30 * scale)));
      const enemyRows = Math.min(3 + Math.floor(level / 2), 6);
      const enemyW = 16 * scale;
      const enemyH = 12 * scale;
      const enemyPadX = 8 * scale;
      const enemyPadY = 8 * scale;
      const newEnemies: { x: number; y: number; alive: boolean; row: number }[] = [];
      const totalEnemyW = enemyCols * (enemyW + enemyPadX) - enemyPadX;
      const startX = gameAreaLeft + (gameAreaWidth - totalEnemyW) / 2;
      for (let r = 0; r < enemyRows; r++) {
        for (let c = 0; c < enemyCols; c++) {
          newEnemies.push({
            x: startX + c * (enemyW + enemyPadX),
            y: (isMobile ? 100 * scale : 80 * scale) + r * (enemyH + enemyPadY),
            alive: true,
            row: r,
          });
        }
      }
      return { enemies: newEnemies, enemyCols, enemyRows, enemyW, enemyH, enemyPadX, enemyPadY };
    };

    let { enemies, enemyW, enemyH } = spawnEnemies(currentLevel);
    let enemyDir = 1;
    let enemySpeed = (0.3 + currentLevel * 0.15) * scale;
    let enemyDropTimer = 0;

    let enemyBullets: { x: number; y: number }[] = [];
    let enemyShootTimer = 0;
    const getEnemyShootInterval = (level: number) => {
      const base = 100;
      const reduction = level * 16;
      return Math.max(level === MAX_LEVEL ? 10 : 20, base - reduction);
    };

    gameStateRef.current = { score: 0, lives: 2, level: 0, gameOver: false, started: true, paused: isManuallyPaused, won: false };
    setDisplayState({ ...gameStateRef.current });

    let bgmTimer = 0;
    let bgmStep = 0;

    const drawPixelShip = (x: number, y: number) => {
      ctx.fillStyle = '#fff';
      const p = 2 * scale;
      ctx.fillRect(x + playerW / 2 - p, y, p * 2, p);
      ctx.fillRect(x + playerW / 2 - p * 2, y + p, p * 4, p);
      ctx.fillRect(x, y + p * 2, playerW, p * 2);
      ctx.fillRect(x + p, y + p * 3, playerW - p * 2, p * 2);
    };

    const drawEnemy = (x: number, y: number, row: number) => {
      ctx.fillStyle = '#fff';
      const p = 2 * scale;
      if (row < 2) {
        ctx.fillRect(x + p * 2, y, p * 4, p);
        ctx.fillRect(x + p, y + p, p * 6, p);
        ctx.fillRect(x, y + p * 2, p * 8, p);
        ctx.fillRect(x, y + p * 3, p * 2, p);
        ctx.fillRect(x + p * 3, y + p * 3, p * 2, p);
        ctx.fillRect(x + p * 6, y + p * 3, p * 2, p);
      } else {
        ctx.fillRect(x + p, y, p * 6, p);
        ctx.fillRect(x, y + p, p * 8, p);
        ctx.fillRect(x, y + p * 2, p * 3, p);
        ctx.fillRect(x + p * 5, y + p * 2, p * 3, p);
        ctx.fillRect(x + p, y + p * 3, p * 2, p);
        ctx.fillRect(x + p * 5, y + p * 3, p * 2, p);
      }
    };

    let lastTime = performance.now();
    const loop = (timestamp: number) => {
      const dt = Math.min(60, timestamp - lastTime); // Cap dt to avoid huge jumps
      lastTime = timestamp;
      const df = dt / 16.666; // Normalize to 60fps

      const gs = gameStateRef.current;
      if (gs.gameOver || gs.won) {
        setDisplayState({ ...gs });
        return;
      }
      if (gs.paused) {
        animFrameRef.current = requestAnimationFrame(loop);
        return;
      }

      ctx.clearRect(0, 0, W, H);

      const keys = keysRef.current;
      if (keys.has('ArrowLeft') || keys.has('a') || moveLeftRef.current) playerX = Math.max(gameAreaLeft, playerX - playerSpeed * df);
      if (keys.has('ArrowRight') || keys.has('d') || moveRightRef.current) playerX = Math.min(gameAreaRight - playerW, playerX + playerSpeed * df);

      if (touchXRef.current !== null) {
        const target = touchXRef.current - playerW / 2;
        const diff = target - playerX;
        playerX += diff * 0.15 * df;
        playerX = Math.max(gameAreaLeft, Math.min(gameAreaRight - playerW, playerX));
      }

      const now = Date.now();
      if ((keys.has(' ') || keys.has('ArrowUp') || shootRef.current) && now - lastShot > shotCooldown) {
        bullets.push({ x: playerX + playerW / 2 - scale, y: playerY });
        lastShot = now;
        // DO NOT reset shootRef.current, let button let-go clear it so holding works!
        playSound('shoot');
      }

      bullets = bullets.filter(b => { b.y -= bulletSpeed * df; return b.y > 0; });

      let hitEdge = false;
      enemies.forEach(e => {
        if (!e.alive) return;
        e.x += (enemySpeed * df) * enemyDir;
        if (e.x <= gameAreaLeft || e.x + enemyW >= gameAreaRight) hitEdge = true;
      });

      if (hitEdge) {
        enemyDir *= -1;
        enemyDropTimer++;
        if (enemyDropTimer >= 1) {
          enemies.forEach(e => { if (e.alive) e.y += enemyH; });
          enemyDropTimer = 0;
        }
      }

      const aliveCount = enemies.filter(e => e.alive).length;
      bgmTimer += df;
      const speed = Math.max(10, 60 - currentLevel * 5 - (enemies.length - aliveCount) * 0.8);
      if (bgmTimer >= speed) {
        bgmTimer = 0;
        bgmStep = (bgmStep + 1) % 4;
        playSound(`bgm${bgmStep}` as any);
      }

      enemyShootTimer += df;
      if (enemyShootTimer >= getEnemyShootInterval(currentLevel)) {
        const alive = enemies.filter(e => e.alive);
        if (alive.length > 0) {
          const shooter = alive[Math.floor(Math.random() * alive.length)];
          enemyBullets.push({ x: shooter.x + enemyW / 2, y: shooter.y + enemyH });
        }
        enemyShootTimer = 0;
      }

      enemyBullets = enemyBullets.filter(b => { b.y += bulletSpeed * 0.5 * df; return b.y < H; });

      bullets = bullets.filter(b => {
        for (const e of enemies) {
          if (!e.alive) continue;
          if (b.x >= e.x && b.x <= e.x + enemyW && b.y >= e.y && b.y <= e.y + enemyH) {
            e.alive = false;
            gs.score += 10 * currentLevel;
            playSound('hit');
            const speedMult = 0.3 + currentLevel * 0.15;
            const killBoost = (enemies.length - aliveCount) * (0.04 + currentLevel * 0.02);
            enemySpeed = (speedMult + killBoost) * scale;
            return false;
          }
        }
        return true;
      });

      enemyBullets = enemyBullets.filter(b => {
        if (b.x >= playerX && b.x <= playerX + playerW && b.y >= playerY && b.y <= playerY + playerH) {
          gs.lives--;
          playSound('die');
          if (gs.lives <= 0) gs.gameOver = true;
          return false;
        }
        return true;
      });

      enemies.forEach(e => {
        if (e.alive && e.y + enemyH >= playerY) {
          gs.gameOver = true;
        }
      });

      // Check level complete
      if (enemies.every(e => !e.alive)) {
        currentLevel++;
        if (currentLevel > MAX_LEVEL) {
          gs.won = true;
          gs.level = MAX_LEVEL;
          playSound('win');
          setDisplayState({ ...gs });
          return;
        }
        gs.level = currentLevel;
        playSound('levelup');
        const spawned = spawnEnemies(currentLevel);
        enemies = spawned.enemies;
        enemyW = spawned.enemyW;
        enemyH = spawned.enemyH;
        const initialSpeedMult = 0.3 + currentLevel * 0.15;
        enemySpeed = initialSpeedMult * scale;
        enemyBullets = [];
        bullets = [];
      }

      drawPixelShip(playerX, playerY);
      enemies.forEach(e => { if (e.alive) drawEnemy(e.x, e.y, e.row); });
      ctx.fillStyle = '#fff';
      bullets.forEach(b => ctx.fillRect(b.x, b.y, 2 * scale, 6 * scale));
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      enemyBullets.forEach(b => ctx.fillRect(b.x, b.y, 2 * scale, 6 * scale));

      setDisplayState({ ...gs });
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
  }, [playSound, isMobile, isManuallyPaused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;
    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) { 
        canvas.width = w; 
        canvas.height = h; 
        if (!gameStateRef.current.started) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const scale = w < 768 ? Math.max(w / 240, 1.4) : Math.max(w / 400, 0.5);
            ctx.fillStyle = '#fff';
            // Draw a quick static ship at bottom center
            const p = 2 * scale;
            const shipX = w / 2 - (24 * scale) / 2;
            const shipY = h - (w < 768 ? 80 * scale : 30 * scale);
            ctx.fillRect(shipX + (24 * scale) / 2 - p, shipY, p * 2, p);
            ctx.fillRect(shipX + (24 * scale) / 2 - p * 2, shipY + p, p * 4, p);
            ctx.fillRect(shipX, shipY + p * 2, 24 * scale, p * 2);
            ctx.fillRect(shipX + p, shipY + p * 3, 24 * scale - p * 2, p * 2);
            
            // Draw a few static enemies
            for (let r = 0; r < 3; r++) {
              for (let c = 0; c < 6; c++) {
                const ex = (w - (6 * 24 * scale)) / 2 + c * 24 * scale;
                const ey = (w < 768 ? 100 * scale : 80 * scale) + r * 20 * scale;
                ctx.fillRect(ex + p, ey, p * 6, p);
                ctx.fillRect(ex, ey + p, p * 8, p);
                ctx.fillRect(ex, ey + p * 2, p * 3, p);
                ctx.fillRect(ex + p * 5, ey + p * 2, p * 3, p);
              }
            }
          }
        }
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    window.addEventListener('resize', resize);
    return () => { ro.disconnect(); window.removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', ' '].includes(e.key)) e.preventDefault();
    };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isManuallyPaused) {
        gameStateRef.current.paused = !visible;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManuallyPaused]);

  useEffect(() => {
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const handleStart = () => {
    initAudio();
    cancelAnimationFrame(animFrameRef.current);
    startGame();
  };

  const showOverlay = !displayState.started || displayState.gameOver || displayState.won;

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className={`w-full h-full block bg-transparent transition-all duration-1000 ${!displayState.started ? 'blur-sm' : 'blur-0'}`}
      />

      {/* HUD */}
      <div className="absolute top-28 left-0 right-0 pointer-events-none z-10">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-start text-display text-xs text-primary-foreground">
          <div className="flex flex-col gap-1">
            <span>SCORE: {displayState.score}</span>
            <span>BEST: {bestScore}</span>
            <span>LVL {displayState.level}/{MAX_LEVEL}</span>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2 pointer-events-none mt-1">
              {[...Array(2)].map((_, i) => (
                <PixelShipSVG key={i} empty={i >= displayState.lives} />
              ))}
            </div>
            <div className="flex gap-3 mt-1">
              <button
                onClick={togglePause}
                className="pointer-events-auto text-[10px] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-1"
              >
                {isManuallyPaused ? <Play size={10} /> : <Pause size={10} />}
                {isManuallyPaused ? 'PLAY' : 'PAUSE'}
              </button>
              <button
              onClick={toggleSound}
              className="pointer-events-auto text-[10px] opacity-40 hover:opacity-100 transition-opacity"
            >
              {soundOn ? '♪ ON' : '♪ OFF'}
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Start / Game Over / Win overlay */}
      {showOverlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/80 backdrop-blur-sm">
          <h3 className="text-display text-primary-foreground text-xl md:text-3xl mb-2">
            {displayState.won ? 'YOU WIN!' : displayState.gameOver ? 'GAME OVER' : 'SPACE INVADERS'}
          </h3>
          {displayState.won && (
            <p className="text-display text-primary-foreground/70 text-sm mb-1">ALL LEVELS CLEARED</p>
          )}
          {(displayState.gameOver || displayState.won) && (
            <p className="text-display text-primary-foreground/70 text-sm mb-4">
              SCORE: {displayState.score} · LEVEL: {displayState.level}
            </p>
          )}
          <button
            onClick={handleStart}
            className="pixel-border border-primary-foreground text-primary-foreground text-display px-6 py-2 text-sm hover:bg-primary-foreground hover:text-primary transition-colors"
            style={{ boxShadow: '2px 2px 0px rgba(255,255,255,0.5)' }}
          >
            {displayState.gameOver || displayState.won ? 'PLAY AGAIN' : 'START'}
          </button>

          {!isMobile ? (
            <div className="mt-6 flex flex-col items-center gap-2">
              <p className="text-primary-foreground/60 text-xs text-display tracking-wider">CONTROLS</p>
              <div className="flex gap-6 text-primary-foreground/40 text-display text-[10px]">
                <span className="flex items-center gap-1">
                  <kbd className="pixel-border border-primary-foreground/30 px-1.5 py-0.5">←</kbd>
                  <kbd className="pixel-border border-primary-foreground/30 px-1.5 py-0.5">→</kbd>
                  <span className="ml-1">MOVE</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="pixel-border border-primary-foreground/30 px-2.5 py-0.5">SPACE</kbd>
                  <span className="ml-1">SHOOT</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center gap-1">
              <p className="text-primary-foreground/60 text-xs text-display tracking-wider">CONTROLS</p>
              <p className="text-primary-foreground/40 text-[10px] text-display">
                USE BUTTONS AT BOTTOM TO MOVE & FIRE
              </p>
            </div>
          )}
        </div>
      )}

      {/* Mobile fixed bottom controls */}
      {isMobile && displayState.started && !displayState.gameOver && !displayState.won && (
        <div className="absolute bottom-12 left-0 right-0 flex items-center justify-between px-6 z-20 pointer-events-none">
          {/* Fire (Shoot) Button on the Left */}
          <button
            onPointerDown={(e) => { e.preventDefault(); shootRef.current = true; }}
            onPointerUp={() => { shootRef.current = false; }}
            onPointerLeave={() => { shootRef.current = false; }}
            onPointerCancel={() => { shootRef.current = false; }}
            className="touch-none pointer-events-auto w-16 h-16 rounded-full border-2 border-primary-foreground/60 text-primary-foreground flex items-center justify-center active:bg-primary-foreground/20 transition-colors bg-black/20 backdrop-blur-sm"
          >
            <Crosshair size={28} />
          </button>

          {/* Movement Buttons on the Right */}
          <div className="flex items-center gap-3">
            <button
              onPointerDown={(e) => { e.preventDefault(); moveLeftRef.current = true; }}
              onPointerUp={() => { moveLeftRef.current = false; }}
              onPointerLeave={() => { moveLeftRef.current = false; }}
              onPointerCancel={() => { moveLeftRef.current = false; }}
              className="touch-none pointer-events-auto w-14 h-14 rounded-full border border-primary-foreground/40 text-primary-foreground flex items-center justify-center active:bg-primary-foreground/20 transition-colors bg-black/20 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onPointerDown={(e) => { e.preventDefault(); moveRightRef.current = true; }}
              onPointerUp={() => { moveRightRef.current = false; }}
              onPointerLeave={() => { moveRightRef.current = false; }}
              onPointerCancel={() => { moveRightRef.current = false; }}
              className="touch-none pointer-events-auto w-14 h-14 rounded-full border border-primary-foreground/40 text-primary-foreground flex items-center justify-center active:bg-primary-foreground/20 transition-colors bg-black/20 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceInvadersGame;
