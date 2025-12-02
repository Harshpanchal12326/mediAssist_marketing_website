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
  },
];

export function AppsShowcase() {
  return (
    <section id="apps" className="py-20 md:py-32 bg-white dark:bg-charcoal-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Three Powerful Apps
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage healthcare, from patients to doctors to pharmacies.
            All connected through mediassist.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {apps.map((app) => {
            const IconComponent = app.icon;
            return (
              <div
                key={app.id}
                className={`group relative rounded-2xl overflow-hidden smooth-transition hover:shadow-xl hover:-translate-y-1 ${app.bgColor}`}
              >
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${app.color} rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-30 smooth-transition`}></div>

                {/* Content */}
                <div className="relative p-8 md:p-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition`}>
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-1 text-foreground">{app.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-4">{app.subtitle}</p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${app.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <a
                    href={`#app-${app.id}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 smooth-transition`}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-br from-charcoal-800 to-charcoal-900 dark:from-charcoal-950 dark:to-charcoal-800 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Desktop Software Available
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Download the desktop version of our apps for enhanced features and offline access.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal-900 font-semibold rounded-lg hover:bg-gray-100 smooth-transition">
                  <Download size={20} />
                  Download for Windows
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 smooth-transition">
                  <Download size={20} />
                  Download for Mac
                </button>
              </div>
            </div>
            <div className="hidden lg:block w-32 h-32">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
                <Download size={64} className="text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
