import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Apps", href: "#apps" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-primary/20 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo with glow */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-teal glow-icon">
            <span className="text-white text-sm font-bold">M</span>
          </div>
          <span className="hidden sm:inline text-foreground group-hover:text-primary smooth-transition">
            mediassist
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary smooth-transition relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-teal group-hover:w-full smooth-transition"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-6 py-2 font-medium text-white rounded-lg bg-gradient-teal glow-button"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted/50 rounded-lg smooth-transition border border-primary/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-charcoal-800 border-b border-primary/20 p-4 md:hidden backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary smooth-transition px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-6 py-2 font-medium text-white rounded-lg bg-gradient-teal glow-button w-full"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
