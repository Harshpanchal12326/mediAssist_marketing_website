import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-charcoal-950 dark-bg-grid text-white py-16 md:py-24 border-t border-primary/20 relative"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-teal rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-teal glow-icon">
            <img src="/favicon.ico" alt="MediAssist" width="500" height="600"/>
              </div>
              <span className="font-bold text-lg group-hover:text-primary smooth-transition">
                MediAssist
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Involving Healthcare Byte by Byte
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-charcoal-900 smooth-transition glow-card"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-charcoal-900 smooth-transition glow-card"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-charcoal-900 smooth-transition glow-card"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold mb-6 text-white">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#healthbuddyy"
                  className="hover:text-primary smooth-transition"
                >
                  HealthBuddyy
                </a>
              </li>
              <li>
                <a
                  href="https://healthbudddy.netlify.app"
                  className="hover:text-primary smooth-transition"
                >
                  ClinicXpert
                </a>
              </li>
              <li>
                <a
                  href="https://pharmamate.netlify.app"
                  className="hover:text-primary smooth-transition"
                >
                  PharmaMate
                </a>
              </li>
              <li>
                <a href="https://pharmamate.netlify.app" className="hover:text-primary smooth-transition">
                  Desktop Software
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#team"
                  className="hover:text-primary smooth-transition"
                >
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary smooth-transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary smooth-transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary smooth-transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 hover:text-primary smooth-transition">
                <Mail size={18} />
                <a href="mailto:hello@mediassist.com">hello@mediassist.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-primary smooth-transition">
                <Phone size={18} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="text-gray-400">Worldwide Healthcare Network</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} mediassist. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-primary smooth-transition group">
              Privacy Policy
              <span className="block h-0.5 w-0 group-hover:w-full bg-primary smooth-transition"></span>
            </a>
            <a href="#" className="hover:text-primary smooth-transition group">
              Terms of Service
              <span className="block h-0.5 w-0 group-hover:w-full bg-primary smooth-transition"></span>
            </a>
            <a href="#" className="hover:text-primary smooth-transition group">
              Compliance
              <span className="block h-0.5 w-0 group-hover:w-full bg-primary smooth-transition"></span>
            </a>
            <a href="#" className="hover:text-primary smooth-transition group">
              Security
              <span className="block h-0.5 w-0 group-hover:w-full bg-primary smooth-transition"></span>
            </a>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 pt-12 border-t border-primary/20">
          <div className="max-w-md mx-auto text-center md:max-w-none md:text-left md:flex md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground glow-heading">
                Stay Updated
              </h3>
              <p className="text-muted-foreground text-sm">
                Subscribe to our newsletter for healthcare insights and product
                updates.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-charcoal-800 text-white placeholder-muted-foreground border border-primary/30 focus:border-primary focus:outline-none smooth-transition min-w-60 glow-card"
              />
              <button
                type="submit"
                className="relative px-6 py-2 bg-gradient-teal text-charcoal-900 font-semibold rounded-lg glow-button whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
