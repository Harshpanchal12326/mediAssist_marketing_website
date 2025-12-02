import { Globe, Lock, Users, Zap, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Health Database",
    description:
      "Access patient records and medical history from anywhere in the world. Unified healthcare information system.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lock,
    title: "Secure & Encrypted",
    description:
      "Enterprise-grade security ensures patient data is protected with end-to-end encryption and compliance.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Connected Network",
    description:
      "Seamless communication between patients, doctors, and pharmacies. One unified ecosystem.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Instant notifications and real-time synchronization across all platforms and devices.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Always available, never offline. Cloud-based system with guaranteed uptime and reliability.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description:
      "Full compliance with healthcare regulations and data protection standards worldwide.",
    color: "from-indigo-500 to-blue-500",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-charcoal-800 dark-bg-grid relative"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground glow-heading">
            Why Choose mediassist
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with healthcare professionals in mind. Security, efficiency,
            and patient care at the core.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-charcoal-900 border border-primary/30 glow-card smooth-transition hover:-translate-y-1"
              >
                {/* Icon Background Glow */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full mix-blend-screen filter blur-3xl opacity-10 group-hover:opacity-20 smooth-transition`}
                ></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon with glow */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 smooth-transition glow-icon`}
                  >
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Glow overlay accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 smooth-transition pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
