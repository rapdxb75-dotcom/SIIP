import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpaceInvadersGame from '@/components/SpaceInvadersGame';
import { Trophy, Info, ListChecks, Target } from 'lucide-react';

const Play = () => {
  const leaderboard = [
    { rank: '01', player: 'ARCHIVE_MASTER', score: '124,500' },
    { rank: '02', player: 'SIIP_COLLECTIVE', score: '118,200' },
    { rank: '03', player: 'NWPR_REBEL', score: '105,900' },
    { rank: '04', player: 'PIXEL_RESISTANCE', score: '98,400' },
    { rank: '05', player: 'GABBY_SARG', score: '92,100' },
    { rank: '06', player: 'TECH4PALESTINE', score: '87,600' },
    { rank: '07', player: 'BARCELONA_DROP', score: '82,300' },
    { rank: '08', player: 'GRENADE_BOUQUET', score: '76,500' },
    { rank: '09', player: 'NO_WAR_FAVOUR', score: '71,200' },
    { rank: '10', player: 'PRINT_ADVOCATE', score: '65,800' },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
              SIIP ARCADE<span className="text-white/30">.</span>
            </h1>
            <p className="text-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
              Welcome to the SIIP Arcade! Ready to turn high scores into high-end threads? Battle the invaders, climb the global leaderboard, and claim your spot among the elite victors. Game on!
            </p>
            <div className="w-24 h-1 bg-white mx-auto" />
          </div>

          {/* Game Container */}
          <div className="max-w-5xl mx-auto aspect-video mb-24 relative pixel-border border-white/20 overflow-hidden bg-[#090A0F]">
            <SpaceInvadersGame />
            {/* Retro CRT Overlay Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_100%),linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] z-20 bg-[length:100%_2px,3px_100%]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Column: About & Rules */}
            <div className="space-y-16">
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 text-white" />
                  <h2 className="text-display text-2xl font-black uppercase tracking-tight">About the Game</h2>
                </div>
                <p className="text-body text-white/50 leading-relaxed text-lg">
                  At SIIP, we believe creativity is the ultimate high score. This arcade isn't just a distraction—it's a digital fragment of our brand world. We’ve blended 90s aesthetic with modern activism, creating a space where every shot fired for resistance earns you more than just bragging rights. It's conviction in pixel form.
                </p>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-3">
                  <ListChecks className="w-6 h-6 text-white" />
                  <h2 className="text-display text-2xl font-black uppercase tracking-tight">Rules of Engagement</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Use your arrow keys or touch controls to move your ship.",
                    "Fire at the invading blocks to clear each level.",
                    "Avoid incoming fire to preserve your lives.",
                    "Every hit increases your archival score.",
                    "Submit your final tally to the global leaderboard at the end of each session. High scores are audited weekly, and top performers are selected for restricted rewards."
                  ].map((rule, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 bg-white/5 border border-white/10">
                      <span className="text-display text-sm font-black text-white/30">0{idx + 1}</span>
                      <p className="text-body text-sm text-white/70 leading-relaxed font-medium">{rule}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Prizes & Leaderboard */}
            <div className="space-y-16">
              <section className="p-8 bg-white text-black space-y-6 relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6" />
                    <h2 className="text-display text-2xl font-black uppercase tracking-tight">Monthly Rewards</h2>
                  </div>
                  <p className="text-body font-bold text-lg leading-relaxed">
                    Think you have what it takes to dominate the archive? Every month, the top 3 players on our leaderboard unlock a restricted #NWPR piece for free. No draws, no lotteries—just pure skill and archival dominance. Aim high, wear the win. 
                  </p>
                  <button className="text-display text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-black pb-1 hover:opacity-100 transition-opacity">
                    View Archival Prizes
                  </button>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-[-20%] right-[-10%] opacity-5">
                   <Target className="w-48 h-48" />
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-white" />
                    <h2 className="text-display text-2xl font-black uppercase tracking-tight italic">THE GLOBAL TOP 10: ARCHIVAL ELITE</h2>
                  </div>
                </div>
                
                <div className="w-full border border-white/10">
                  <div className="grid grid-cols-12 bg-white/5 p-4 border-b border-white/10">
                    <div className="col-span-2 text-display text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Rank</div>
                    <div className="col-span-6 text-display text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Player</div>
                    <div className="col-span-4 text-display text-[10px] font-black text-white/30 uppercase tracking-[0.2em] text-right">Score</div>
                  </div>
                  <div className="divide-y divide-white/10">
                    {leaderboard.map((item) => (
                      <div key={item.rank} className="grid grid-cols-12 p-4 hover:bg-white/5 transition-colors group">
                        <div className="col-span-2 text-display text-sm font-black text-white/40 group-hover:text-white">{item.rank}</div>
                        <div className="col-span-6 text-body text-xs font-bold text-white/80 group-hover:text-white uppercase tracking-widest">{item.player}</div>
                        <div className="col-span-4 text-display text-sm font-black text-right">{item.score}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Play;
