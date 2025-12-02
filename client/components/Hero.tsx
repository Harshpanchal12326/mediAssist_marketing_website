import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-charcoal-900 py-20 md:py-32 dark-bg-grid">
      {/* Animated background decoration with glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-teal rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-radial-gradient opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge with glow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 smooth-transition hover:bg-primary/30 border border-primary/40 glow-teal">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-semibold">Healthcare Reimagined</span>
          </div>

          {/* Main Headline with glow text */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight glow-heading">
            Healthcare at Your
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Fingertips
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Involving Healthcare Byte by Byte
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            mediassist is a comprehensive healthcare ecosystem connecting
            patients, doctors, and pharmacies. Access appointments,
            prescriptions, and medicines in one unified platform.
          </p>

          {/* CTA Buttons with glow effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#apps"
              className="relative inline-flex items-center gap-2 px-8 py-3 font-semibold text-white rounded-lg bg-gradient-teal glow-button group"
            >
              Explore Apps
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 smooth-transition"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-foreground rounded-lg border-2 border-primary/40 hover:border-primary/70 hover:bg-primary/10 smooth-transition glow-card"
            >
              Learn More
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-primary/20">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-foreground">
                Trusted by Healthcare Professionals
              </p>
              <p className="text-xs text-muted-foreground">
                Worldwide Health Database System
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
