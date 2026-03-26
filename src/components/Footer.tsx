import { Instagram } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
          {/* Newsletter */}
          <div>
            <h4 className="text-display text-sm font-bold mb-3 tracking-wider">NEWSLETTER</h4>
            <p className="text-body text-sm text-primary-foreground/60 mb-4 leading-relaxed">
              Sign up for exclusive offers and new arrivals.
            </p>
            <div className="flex border border-primary-foreground/30">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL"
                className="flex-1 bg-transparent px-3 py-2 text-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 outline-none"
              />
              <button className="px-3 border-l border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors">
                <span className="text-primary-foreground text-lg">›</span>
              </button>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-display text-sm font-bold mb-3 tracking-wider">INFORMATION</h4>
            <ul className="space-y-2.5 text-body text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Imprint</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">General Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-display text-sm font-bold mb-3 tracking-wider">CONTACT</h4>
            <ul className="space-y-2.5 text-body text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Shipping Conditions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Right of Withdrawal</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-display text-sm font-bold mb-3 tracking-wider">SOCIAL MEDIA</h4>
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-body text-xs text-primary-foreground/40">© 2025, SIIP.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
