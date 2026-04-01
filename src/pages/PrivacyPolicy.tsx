import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-24 pb-20 md:pt-32 md:pb-32 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20 space-y-4">
            <h1 className="text-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
              Privacy Policy<span className="text-primary italic">.</span>
            </h1>
            <div className="w-24 h-1 bg-primary animate-in scale-x-in duration-1000" />
            <p className="text-body text-sm font-bold tracking-widest text-muted-foreground uppercase">Last Updated: April 2026</p>
          </div>

          <div className="space-y-16 text-body text-base leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            {/* Section 1 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">1. General Information</h2>
              <p>
                At SIIP, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from siip.store (the "Site"). We are committed to protecting your personal data and your right to privacy in accordance with the General Data Protection Regulation (GDPR).
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">2. Personal Information We Collect</h2>
              <p>
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
              </p>
              <p>
                When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as "Order Information."
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">3. How Do We Use Your Personal Information?</h2>
              <p>
                We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Communicate with you;</li>
                <li>Screen our orders for potential risk or fraud; and</li>
                <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">4. Sharing Your Personal Information</h2>
              <p>
                We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store—you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">5. Your Rights (GDPR)</h2>
              <p>
                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
              </p>
              <p>
                Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Please note that your information will be transferred outside of Europe, including to Canada and the United States.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">6. Data Retention</h2>
              <p>
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">7. Changes</h2>
              <p>
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">8. Contact Us</h2>
              <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at <span className="text-primary font-bold">SUPPORT@SIIP.STORE</span>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
