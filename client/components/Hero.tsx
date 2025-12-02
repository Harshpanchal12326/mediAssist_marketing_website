import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-charcoal-900 dark:to-charcoal-800 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-teal rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 smooth-transition hover:bg-primary/15">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-semibold">Healthcare Reimagined</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Healthcare at Your
            <br />
            <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Fingertips
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Involving Healthcare Byte by Byte
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            mediassist is a comprehensive healthcare ecosystem connecting patients, doctors, and pharmacies. 
            Access appointments, prescriptions, and medicines in one unified platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#apps"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white rounded-lg bg-gradient-teal hover:shadow-lg smooth-transition"
            >
              Explore Apps
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-foreground rounded-lg border-2 border-border hover:bg-muted smooth-transition"
            >
              Learn More
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-foreground">Trusted by Healthcare Professionals</p>
              <p className="text-xs text-muted-foreground">Worldwide Health Database System</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
