import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal-900 dark:bg-charcoal-950 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-teal">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <span className="font-bold text-lg">mediassist</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Involving Healthcare Byte by Byte
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary hover:text-charcoal-900 smooth-transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary hover:text-charcoal-900 smooth-transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary hover:text-charcoal-900 smooth-transition"
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
                <a href="#healthbuddyy" className="hover:text-primary smooth-transition">
                  HealthBuddyy
                </a>
              </li>
              <li>
                <a href="#clinicxpert" className="hover:text-primary smooth-transition">
                  ClinicXpert
                </a>
              </li>
              <li>
                <a href="#pharmamate" className="hover:text-primary smooth-transition">
                  PharmaMate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary smooth-transition">
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
                <a href="#team" className="hover:text-primary smooth-transition">
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
                <a href="mailto:hello@mediassist.com">
                  hello@mediassist.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-primary smooth-transition">
                <Phone size={18} />
                <a href="tel:+1234567890">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-400">
                Worldwide Healthcare Network
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} mediassist. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-primary smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              Compliance
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              Security
            </a>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="max-w-md mx-auto text-center md:max-w-none md:text-left md:flex md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for healthcare insights and product updates.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-500 border border-white/20 focus:border-primary focus:outline-none smooth-transition min-w-60"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-teal text-white font-semibold rounded-lg hover:shadow-lg smooth-transition whitespace-nowrap"
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
