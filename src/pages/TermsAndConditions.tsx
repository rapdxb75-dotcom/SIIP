import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-32 pb-20 md:pt-32 md:pb-32 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20 space-y-4">
            <h1 className="text-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
              Terms & Conditions<span className="text-primary italic">.</span>
            </h1>
            <div className="w-24 h-1 bg-primary animate-in scale-x-in duration-1000" />
            <p className="text-body text-sm font-bold tracking-widest text-muted-foreground uppercase">Last Updated: April 2026</p>
          </div>

          <div className="space-y-16 text-body text-base leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            {/* Section 1 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">1. Overview</h2>
              <p>
                This website is operated by SIIP. Throughout the site, the terms "we", "us" and "our" refer to SIIP. SIIP offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>
              <p>
                By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">2. Online Store Terms</h2>
              <p>
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
              </p>
              <p>
                You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">3. Accuracy of Billing and Account Information</h2>
              <p>
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.
              </p>
              <p>
                In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">4. Intellectual Property</h2>
              <p>
                All content included on this site, such as text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of SIIP or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of SIIP, with copyright authorship for this collection by SIIP, and protected by international copyright laws.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">5. User Comments & Feedback</h2>
              <p>
                If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">6. Governing Law</h2>
              <p>
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Spain (or the jurisdiction of your primary business location).
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">7. Changes to Terms</h2>
              <p>
                You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-6">
              <h2 className="text-display text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">8. Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at <span className="text-primary font-bold">SUPPORT@SIIP.STORE</span>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
