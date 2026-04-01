import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, Send, MessageSquare, ShieldCheck, ChevronDown } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../components/ui/accordion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [type, setType] = useState<'general' | 'wholesale'>('general');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      
      <main className="pt-24 md:pt-48 pb-12 md:pb-24 px-4 md:px-12">
        <div className="container mx-auto max-w-7xl">
          
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-5 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4 md:space-y-6">
                <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground italic">Connect with the archive</p>
                <h1 className="text-display text-3xl md:text-7xl font-black uppercase leading-[1] md:leading-[0.9] tracking-tighter italic">
                  {type === 'wholesale' ? 'Store Archive' : 'Get in touch'}<span className="text-muted-foreground/20">.</span>
                </h1>
                <p className="text-body text-base md:text-lg text-muted-foreground max-w-sm leading-relaxed font-medium">
                  {type === 'wholesale' 
                    ? "Interested in stocking SIIP? Let us talk about bringing our restricted collection to your boutique." 
                    : "We would love to hear from you. Whether it's a sizing enquiry or you just want to talk shop—our team is standing by."}
                </p>
              </div>

              <div className="space-y-10 pt-8 border-t border-black/5">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <Mail size={18} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Email Enquiry</h4>
                    <p className="text-sm font-black uppercase tracking-tight italic">
                      {type === 'wholesale' ? 'wholesale@siip.store' : 'support@siip.store'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <MapPin size={18} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">HQ Archive</h4>
                    <p className="text-sm font-black uppercase tracking-tight italic">London, United Kingdom</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <MessageSquare size={18} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Social Feed</h4>
                    <p className="text-sm font-black uppercase tracking-tight italic">@siip_archive</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 p-8 border border-black/5 flex items-center gap-4">
                 <ShieldCheck size={20} className="text-black/40" />
                 <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed text-black/40">
                    All retail and wholesale enquiries are processed through our encrypted support desk.
                 </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              {/* Form Mode Toggle */}
              <div className="flex w-full mb-8 bg-zinc-50 p-1 border border-black/5">
                <button 
                  onClick={() => setType('general')}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${type === 'general' ? 'bg-black text-white shadow-xl' : 'text-black/40 hover:text-black'}`}
                >
                  General
                </button>
                <button 
                  onClick={() => setType('wholesale')}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${type === 'wholesale' ? 'bg-black text-white shadow-xl' : 'text-black/40 hover:text-black'}`}
                >
                  Wholesale
                </button>
              </div>

              <div className="bg-white border-2 border-black p-8 md:p-16 shadow-[20px_20px_0px_rgba(0,0,0,0.02)]">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6">
                      <Send size={32} className="text-white translate-x-1 -translate-y-1" />
                    </div>
                    <h2 className="text-display text-2xl md:text-3xl font-black uppercase italic tracking-tight">Transmission Received</h2>
                    <p className="text-muted-foreground text-sm uppercase font-black tracking-widest">
                      {type === 'wholesale' ? "Thank you for your retail interest. Our wholesale officer will contact you shortly." : "Thank you for reaching out. We'll be in touch within 24 hours."}
                    </p>
                    <button onClick={() => setIsSuccess(false)} className="text-[10px] font-black uppercase tracking-widest underline underline-offset-8 py-4 opacity-50 hover:opacity-100 transition-opacity">Submit another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-4">
                        {type === 'wholesale' ? (
                            <div className="bg-black text-white py-3 px-6 text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-in slide-in-from-top-2 duration-300">
                                Interested in stocking SIIP? Let us talk.
                            </div>
                        ) : (
                            <div className="bg-black text-white py-3 px-6 text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-in slide-in-from-top-2 duration-300">
                                We would love to hear from you.
                            </div>
                        )}
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Full Name</label>
                           <input 
                            required
                            type="text" 
                            placeholder={type === 'wholesale' ? "Company Representative Name" : "Your Name"}
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-zinc-50 border-b-2 border-black/10 px-0 py-6 text-sm font-bold placeholder:text-black/20 focus:border-black outline-none transition-all duration-300 bg-transparent"
                           />
                        </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                         Email
                       </label>
                       <input 
                        required
                        type="email" 
                        placeholder="archive@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-zinc-50 border-b-2 border-black/10 px-0 py-6 text-sm font-bold placeholder:text-black/20 focus:border-black outline-none transition-all duration-300 bg-transparent"
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                         {type === 'wholesale' ? "Stocking Portfolio / Details" : "The Enquiry"}
                       </label>
                       <textarea 
                        required
                        rows={4}
                        placeholder={type === 'wholesale' ? "Boutique location, website link, and estimated orders..." : "Type your message here..."}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-zinc-50 border-b-2 border-black/10 px-0 py-6 text-sm font-bold placeholder:text-black/20 focus:border-black outline-none transition-all duration-300 bg-transparent resize-none overflow-hidden"
                       />
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full bg-black text-white py-8 text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] shadow-2xl overflow-hidden transition-all active:scale-[0.98] disabled:bg-zinc-800"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isSubmitting ? 'Transmitting...' : (
                            <>
                              {type === 'wholesale' ? 'Submit Inquirey' : 'Send message'}
                              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </button>
                    </div>

                    <p className="text-center text-[9px] text-muted-foreground uppercase font-black tracking-widest opacity-40">
                      Archive hours: Mon-Fri 09:00-18:00 GMT. Retail desk is prioritized.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <section className="mt-32 md:mt-48 max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="text-center space-y-6">
                <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground italic">Instant Assistance</p>
                <h2 className="text-display text-3xl md:text-6xl font-black uppercase tracking-tighter italic underline decoration-black/5 underline-offset-[16px]">F.A.Q<span className="text-muted-foreground/20">s</span></h2>
                <p className="text-body text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Quick answers to the things people ask most. If your enquiry is not listed, our archival team is ready.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-black/10">
              <AccordionItem value="shipping" className="border-b-black/10">
                <AccordionTrigger className="text-display text-left underline-none text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] py-8 md:py-10 hover:no-underline group focus:outline-none">
                   01. GLOBAL SHIPPING & ARCHIVE LOGISTICS
                </AccordionTrigger>
                <AccordionContent className="text-body text-xs md:text-sm leading-relaxed text-muted-foreground pb-12 font-medium">
                  We ship globally from our London archive. Standard international delivery typically takes 3-5 business days. Once your order is dispatched, you will receive an encrypted tracking link to monitor your archive's journey. Free shipping is automatically unlocked on all orders over $150.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sizing" className="border-b-black/10">
                <AccordionTrigger className="text-display text-left underline-none text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] py-8 md:py-10 hover:no-underline group focus:outline-none">
                   02. SIZING & FITMENT PROTOCOLS
                </AccordionTrigger>
                <AccordionContent className="text-body text-xs md:text-sm leading-relaxed text-muted-foreground pb-12 font-medium">
                  Our garments are designed with a boxy, heavyweight oversized fit—inspired by 90s arcade culture. We recommend choosing your standard size for the intended silhouette. Check individual product pages for specific garment measurements. If between sizes, we suggest sizing up for the restricted collective aesthetic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns" className="border-b-black/10">
                <AccordionTrigger className="text-display text-left underline-none text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] py-8 md:py-10 hover:no-underline group focus:outline-none">
                   03. RETURNS & ARCHIVE REJECTS
                </AccordionTrigger>
                <AccordionContent className="text-body text-xs md:text-sm leading-relaxed text-muted-foreground pb-12 font-medium">
                  We accept returns within 14 days of receipt, provided the items are in their original restricted packaging with all tags intact. Due to the limited nature of our drops, we currently do not offer direct exchanges. Instead, return your original item for a full refund and place a new order for the desired fragment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gamerules" className="border-b-black/10">
                <AccordionTrigger className="text-display text-left underline-none text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] py-8 md:py-10 hover:no-underline group focus:outline-none">
                   04. SIIP ARCHIVE GAME RULES
                </AccordionTrigger>
                <AccordionContent className="text-body text-xs md:text-sm leading-relaxed text-muted-foreground pb-12 font-medium">
                  Our collections are released as 'Levels'. Once a level is completed, it enters the vault and may never be restocked. All members who submit a high-score order over $300 are automatically eligible for the 'Elite Member' status, unlocking priority access to restricted drops and early technical blueprints.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
