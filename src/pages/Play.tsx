import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import SpaceInvadersGame from '@/components/SpaceInvadersGame';
import StarsBackground from '@/components/StarsBackground';
import { Trophy, Info, ListChecks, Target } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <div className="max-w-4xl mx-auto mb-16 text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="mt-4 text-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
              SIIP ARCADE<span className="text-white/30">.</span>
            </h1>
            <div className="space-y-4">
              <p className="text-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
                The SIIP game, playable directly on the page. Battle the invaders, climb the global leaderboard, and claim your spot among the elite victors.
              </p>
              <p className="text-display text-sm md:text-base text-white tracking-[0.2em] font-black uppercase">
                Play SIIP. Beat your score. Climb the leaderboard.
              </p>
            </div>
            <div className="w-24 h-1 bg-white mx-auto" />
          </div>

          {/* Game Container */}
          <div className="w-full max-w-[1600px] mx-auto h-[75dvh] lg:h-auto lg:aspect-video mb-8 relative pixel-border border-white/20 overflow-hidden bg-[#090A0F]">
            <StarsBackground />
            <SpaceInvadersGame />
            {/* Retro CRT Overlay Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_100%),linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] z-20 bg-[length:100%_2px,3px_100%]" />
          </div>

          {/* Short Copy Block */}
          <div className="max-w-4xl mx-auto mb-24 text-center">
            <p className="text-display text-lg md:text-xl text-white font-black uppercase tracking-[0.3em] italic">
              More than merch. SIIP is a world. The game is your entry point.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Column: About & Rules */}
            <div className="space-y-16">
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 text-white" />
                  <h2 className="text-display text-2xl font-black uppercase tracking-tight">About the Game</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-display text-lg text-white font-bold leading-tight uppercase tracking-wider">
                    More than merch. SIIP is a world. The game is your entry point.
                  </p>
                  <p className="text-body text-white/50 leading-relaxed text-lg">
                    At SIIP, we believe creativity is the ultimate high score. This arcade isn't just a distraction—it's a digital fragment of our brand story. We’ve blended 90s aesthetic with modern activism, creating a space where every shot fired for resistance earns you more than just bragging rights. It's conviction in pixel form.
                  </p>
                </div>
              </section>

              <section className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ListChecks className="w-6 h-6 text-white" />
                    <h2 className="text-display text-2xl font-black uppercase tracking-tight">Rules of Engagement</h2>
                  </div>
                  <p className="text-display text-xs text-white/40 uppercase tracking-[0.2em] font-bold italic">
                    Simple rules, big competition<span className="text-white/20">.</span> Here is how to play:
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full border-t border-white/10">
                  <AccordionItem value="item-1" className="border-b border-white/10 px-4 hover:bg-white/[0.02] transition-colors">
                    <AccordionTrigger className="text-display text-sm font-black uppercase tracking-widest hover:no-underline py-6">
                      <span className="flex items-center gap-4">
                        <span className="text-white/20">01.</span> MANEUVER
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-white/50 text-base leading-relaxed pb-6">
                      Use your arrow keys [← →] or side-to-side touch controls to navigate your archival vessel across the resistance field. Precision is the difference between a high score and a reset.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-b border-white/10 px-4 hover:bg-white/[0.02] transition-colors">
                    <AccordionTrigger className="text-display text-sm font-black uppercase tracking-widest hover:no-underline py-6">
                      <span className="flex items-center gap-4">
                        <span className="text-white/20">02.</span> ENGAGE
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-white/50 text-base leading-relaxed pb-6">
                      Press [SPACE] or tap the FIRE button to clear the invading fragments. Every hit dismantles the opposition and adds to your global archival tally.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-b border-white/10 px-4 hover:bg-white/[0.02] transition-colors">
                    <AccordionTrigger className="text-display text-sm font-black uppercase tracking-widest hover:no-underline py-6">
                      <span className="flex items-center gap-4">
                        <span className="text-white/20">03.</span> SURVIVE
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-white/50 text-base leading-relaxed pb-6">
                      You have 3 lives. Avoid incoming projectiles at all costs. As you clear waves, the archival field accelerates—stay sharp or stay behind.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-b border-white/0 px-4 hover:bg-white/[0.02] transition-colors">
                    <AccordionTrigger className="text-display text-sm font-black uppercase tracking-widest hover:no-underline py-6">
                      <span className="flex items-center gap-4">
                        <span className="text-white/20">04.</span> CONQUER
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-white/50 text-base leading-relaxed pb-6">
                      Once your session ends, submit your score to join the elite global top 10. The highest-ranking players are audited monthly for restricted rewards and #NWPR drops.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </div>

            {/* Right Column: Prizes & Leaderboard */}
            <div className="space-y-16">
              <section className="p-8 bg-white text-black space-y-8 relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6" />
                      <h2 className="text-display text-2xl font-black uppercase tracking-tight">Monthly Rewards</h2>
                    </div>
                    <p className="text-body font-bold text-lg leading-relaxed">
                      Top 3 players each month win free merch from the SIIP shop. <span className="italic">Play, compete, win.</span> No draws, no lotteries—just pure skill and archival dominance.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-display text-[10px] font-black uppercase tracking-[0.3em] opacity-40">April Prize Pool</p>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { name: "FLOWERBOMB TEE (WHITE)", value: "$48 Value" },
                        { name: "GRENADE BOUQUET TOTE", value: "$25 Value" },
                        { name: "RESTRICTED ACCESS CODE", value: "Priceless" }
                      ].map((prize, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-black/10">
                          <span className="text-display text-[11px] font-black uppercase tracking-widest">{prize.name}</span>
                          <span className="text-display text-[10px] font-bold opacity-40">{prize.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/store"
                      className="text-display text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-black pb-1 hover:opacity-70 transition-opacity inline-block"
                    >
                      Browse full shop
                    </Link>
                  </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-[-10%] right-[-10%] opacity-5 pointer-events-none">
                  <Target className="w-64 h-64" />
                </div>
              </section>

              <section className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-white" />
                      <h2 className="text-display text-2xl font-black uppercase tracking-tight italic">THE GLOBAL TOP 10: ARCHIVAL ELITE</h2>
                    </div>
                  </div>
                  <p className="text-display text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
                    Top players this month<span className="text-white/20">.</span> Updated in real time.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
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

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-white/5">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-medium">
                      Leaderboard resets in <span className="text-white/60">24 DAYS 12H</span>
                    </p>
                    <button className="text-display text-[11px] font-black uppercase tracking-[0.2em] border-b border-white/20 pb-1 hover:border-white transition-colors">
                      View Archival Winners
                    </button>
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
