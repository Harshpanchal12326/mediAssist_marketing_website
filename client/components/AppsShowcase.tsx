import { Heart, Stethoscope, Pill, Download } from "lucide-react";

const apps = [
  {
    id: "healthbuddyy",
    name: "HealthBuddyy",
    subtitle: "Patient App",
    description: "Your personal health companion",
    features: [
      "Book appointments with doctors",
      "Order medicines online",
      "Track your health records",
      "Get health recommendations",
    ],
    icon: Heart,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
    link: "https://healthbudddy.netlify.app",
  },
  {
    id: "clinicxpert",
    name: "ClinicXpert",
    subtitle: "Doctor App",
    description: "Streamline patient care",
    features: [
      "Manage patient appointments",
      "Create digital prescriptions",
      "Access patient history",
      "Communicate with patients",
    ],
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    link: "https://clinicxpert.netlify.app",
  },
  {
    id: "pharmamate",
    name: "PharmaMate",
    subtitle: "Pharmacy App",
    description: "Over-the-counter medicine dispensing",
    features: [
      "Register with patient ID",
      "Dispense medicines securely",
      "Manage inventory",
      "Track prescriptions",
    ],
    icon: Pill,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    link: "https://pharmamate.netlify.app",
  },
];

export function AppsShowcase() {
  return (
    <section
      id="apps"
      className="py-20 md:py-32 bg-charcoal-900 dark-bg-grid relative"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground glow-heading">
            Three Powerful Apps
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage healthcare, from patients to doctors
            to pharmacies. All connected through mediassist.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {apps.map((app) => {
            const IconComponent = app.icon;
            return (
              <div
                key={app.id}
                className={`group relative rounded-2xl overflow-hidden smooth-transition hover:-translate-y-2 border border-primary/30 glow-card bg-charcoal-800`}
              >
                {/* Gradient Background Glow */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${app.color} rounded-full mix-blend-screen filter blur-3xl opacity-10 group-hover:opacity-20 smooth-transition`}
                ></div>

                {/* Content */}
                <div className="relative p-8 md:p-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition glow-icon`}
                  >
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-1 text-foreground">
                    {app.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-4">
                    {app.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${app.color} mt-2 flex-shrink-0 animate-pulse`}
                        ></div>
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 smooth-transition group/link`}
                  >
                    Learn More
                    <span className="group-hover/link:translate-x-1 smooth-transition">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download Section */}
        <div className="relative rounded-2xl overflow-hidden border border-primary/30 glow-card bg-gradient-to-br from-charcoal-900 to-charcoal-800">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 pointer-events-none"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 glow-heading">
                Desktop Software Available
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Download the desktop version of our apps for enhanced features
                and offline access.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-teal text-charcoal-900 font-semibold rounded-lg glow-button group/btn">
                  <Download size={20} />
                  Download for Windows
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 text-foreground font-semibold rounded-lg border border-primary/40 hover:border-primary/70 hover:bg-primary/30 smooth-transition glow-card">
                  <Download size={20} />
                  Download for Mac
                </button>
              </div>
            </div>

            <div className="hidden lg:block w-32 h-32">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center glow-icon animate-float-glow">
                <Download size={64} className="text-white opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
