import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SizeGuide = () => {
  const teeMeasurements = [
    { size: 'S', chest: '54', length: '70', shoulder: '50' },
    { size: 'M', chest: '56', length: '72', shoulder: '52' },
    { size: 'L', chest: '58', length: '74', shoulder: '54' },
    { size: 'XL', chest: '60', length: '76', shoulder: '56' },
    { size: 'XXL', chest: '62', length: '78', shoulder: '58' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-24 pb-20 md:pt-32 md:pb-32 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20 space-y-4">
            <h1 className="text-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
              Size Guide<span className="text-primary italic">.</span>
            </h1>
            <div className="w-24 h-1 bg-primary animate-in scale-x-in duration-1000" />
            <p className="text-body text-sm font-bold tracking-widest text-muted-foreground uppercase italic">Find your perfect fit with SIIP.</p>
          </div>

          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            {/* Section 1: Tees Size Chart */}
            <section className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">SIIP Signature Tees</h2>
                <p className="text-body text-base text-muted-foreground max-w-2xl">
                  Our tees feature a modern boxy fit, designed with structured, heavyweight cotton. All measurements are in <span className="text-foreground font-bold">centimeters (CM)</span>, measured with the garment lying flat.
                </p>
              </div>

              <div className="overflow-x-auto border border-border">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-secondary/50 border-b border-border">
                      <th className="p-6 text-display text-[10px] md:text-xs font-black uppercase tracking-widest">SIZE</th>
                      <th className="p-6 text-display text-[10px] md:text-xs font-black uppercase tracking-widest text-center">CHEST (PTP)</th>
                      <th className="p-6 text-display text-[10px] md:text-xs font-black uppercase tracking-widest text-center">LENGTH</th>
                      <th className="p-6 text-display text-[10px] md:text-xs font-black uppercase tracking-widest text-center">SHOULDER</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {teeMeasurements.map((m) => (
                      <tr key={m.size} className="hover:bg-secondary/20 transition-colors">
                        <td className="p-6 text-display text-sm md:text-base font-black text-foreground">{m.size}</td>
                        <td className="p-6 text-body text-sm md:text-base text-muted-foreground text-center">{m.chest} cm</td>
                        <td className="p-6 text-body text-sm md:text-base text-muted-foreground text-center">{m.length} cm</td>
                        <td className="p-6 text-body text-sm md:text-base text-muted-foreground text-center">{m.shoulder} cm</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2: Visual Guide */}
            <section className="space-y-12">
               <div className="space-y-4">
                <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">How to Measure</h2>
                <p className="text-body text-base text-muted-foreground max-w-2xl">
                  Find a similar item from your wardrobe that fits you well and compare its measurements to the chart above.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
                 <div className="space-y-4">
                    <div className="aspect-square bg-secondary/30 border border-dashed border-border flex items-center justify-center p-8 relative">
                       <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/40 -translate-y-1/2 before:content-[''] before:absolute before:left-0 before:top-[-4px] before:w-2 before:h-2 before:bg-primary/40 before:rotate-45 after:content-[''] after:absolute after:right-0 after:top-[-4px] after:w-2 after:h-2 after:bg-primary/40 after:rotate-45" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 bg-background px-2 z-10">CHEST</span>
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-display text-xs font-black uppercase">01. Chest</h4>
                       <p className="text-xs text-muted-foreground leading-relaxed">Measure across the widest part of the chest, from pit to pit, while the garment is flat.</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="aspect-square bg-secondary/30 border border-dashed border-border flex items-center justify-center p-8 relative">
                       <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/40 -translate-x-1/2 before:content-[''] before:absolute before:left-[-4px] before:top-0 before:w-2 before:h-2 before:bg-primary/40 before:rotate-45 after:content-[''] after:absolute after:left-[-4px] after:bottom-0 after:w-2 after:h-2 after:bg-primary/40 after:rotate-45" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 bg-background px-2 z-10 rotate-90">LENGTH</span>
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-display text-xs font-black uppercase">02. Length</h4>
                       <p className="text-xs text-muted-foreground leading-relaxed">Measure from the highest point of the shoulder down to the bottom hem of the tee.</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="aspect-square bg-secondary/30 border border-dashed border-border flex items-center justify-center p-8 relative">
                       <div className="absolute top-4 left-4 right-4 h-0.5 bg-primary/40 before:content-[''] before:absolute before:left-0 before:top-[-4px] before:w-2 before:h-2 before:bg-primary/40 before:rotate-45 after:content-[''] after:absolute after:right-0 after:top-[-4px] after:w-2 after:h-2 after:bg-primary/40 after:rotate-45" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 bg-background px-2 z-10">SHOULDER</span>
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-display text-xs font-black uppercase">03. Shoulder</h4>
                       <p className="text-xs text-muted-foreground leading-relaxed">Measure from one shoulder seam to the other across the back of the garment.</p>
                    </div>
                 </div>
              </div>
            </section>

            {/* Note on Fit */}
            <div className="p-10 bg-black text-white space-y-4 text-center">
               <h3 className="text-display text-xl md:text-2xl font-black uppercase italic tracking-tighter">THE SIIP FIT</h3>
               <p className="text-white/60 text-sm md:text-base font-medium max-w-xl mx-auto italic">
                 "Our tees are designed for a slightly oversized, relaxed feel. If you prefer a more tailored look, we recommend sizing down."
               </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;
