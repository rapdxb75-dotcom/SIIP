import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShippingAndReturns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-32 pb-20 md:pt-32 md:pb-32 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20 space-y-4">
            <h1 className="text-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
              Shipping & Returns<span className="text-primary italic">.</span>
            </h1>
            <div className="w-24 h-1 bg-primary animate-in scale-x-in duration-1000" />
            <p className="text-body text-sm font-bold tracking-widest text-muted-foreground uppercase">Last Updated: April 2026</p>
          </div>

          <div className="space-y-16 text-body text-base leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            {/* Section 1: Shipping Information */}
            <section className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">1. Shipping Information</h2>
                <p>
                  We aim to get your SIIP pieces to you as quickly and securely as possible. All orders are processed within 1-2 business days.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-secondary/30 border border-border space-y-4">
                   <h3 className="text-display text-xs font-black tracking-widest uppercase">LOCAL (SPAIN)</h3>
                   <div className="space-y-1">
                      <p className="text-foreground font-bold">2 - 4 Business Days</p>
                      <p className="text-xs">Standard: €5.00 / Free over €100</p>
                   </div>
                </div>
                <div className="p-6 bg-secondary/30 border border-border space-y-4">
                   <h3 className="text-display text-xs font-black tracking-widest uppercase">EUROPE (EU)</h3>
                   <div className="space-y-1">
                      <p className="text-foreground font-bold">3 - 7 Business Days</p>
                      <p className="text-xs">Standard: €12.00 / Free over €200</p>
                   </div>
                </div>
                <div className="p-6 bg-secondary/30 border border-border space-y-4">
                   <h3 className="text-display text-xs font-black tracking-widest uppercase">INTERNATIONAL</h3>
                   <div className="space-y-1">
                      <p className="text-foreground font-bold">7 - 14 Business Days</p>
                      <p className="text-xs">Standard: €25.00 / Express: €45.00</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Section 2: Returns Policy */}
            <section className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">2. Returns Policy</h2>
                <p>
                  We want you to love your SIIP purchase. If for any reason you are not satisfied, you have <span className="text-foreground font-bold">14 days</span> from the date of delivery to return your items for a full refund or exchange.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-black text-xs">01</span>
                   </div>
                   <div className="space-y-2">
                     <h4 className="text-display text-sm font-bold uppercase">Condition</h4>
                     <p className="text-sm">Items must be returned in their original condition, unworn, unwashed, and with all tags attached.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-black text-xs">02</span>
                   </div>
                   <div className="space-y-2">
                     <h4 className="text-display text-sm font-bold uppercase">Process</h4>
                     <p className="text-sm">To initiate a return, please email <span className="text-primary font-bold">SUPPORT@SIIP.STORE</span> with your order number and reason for return.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-black text-xs">03</span>
                   </div>
                   <div className="space-y-2">
                     <h4 className="text-display text-sm font-bold uppercase">Refunds</h4>
                     <p className="text-sm">Once received and inspected, refunds will be processed to your original payment method within 5-10 business days.</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Section 3: Exchanges */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">3. Exchanges</h2>
              <p>
                Found the perfect piece but the wrong fit? We offer free exchanges within 14 days of delivery (subject to stock availability). Please contact our support team to arrange an exchange.
              </p>
            </section>

            {/* Section 4: Faulty Items */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">4. Faulty Items</h2>
              <p>
                Each SIIP piece is checked for quality before shipping. In the rare event you receive a faulty item, please notify us immediately at <span className="text-primary font-bold">SUPPORT@SIIP.STORE</span> so we can make it right.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingAndReturns;
