import { Linkedin, Mail, ExternalLink } from "lucide-react";

const team = [
  {
    id: "adit-ghosh",
    name: "Adit Ghosh",
    role: "CEO & CTO",
    description: "Visionary leader and technical architect of mediassist. Driving innovation in healthcare technology.",
    email: "adit@mediassist.com",
    linkedin: "https://linkedin.com",
    initials: "AG",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "subhrajeet-dash",
    name: "Subhrajeet Dash",
    role: "COO",
    description: "Operations expert ensuring seamless healthcare platform delivery and user satisfaction.",
    email: "subhrajeet@mediassist.com",
    linkedin: "https://linkedin.com",
    initials: "SD",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "harsh-panchal",
    name: "Harsh Panchal",
    role: "CFO",
    description: "Financial strategist managing sustainable growth and business operations of mediassist.",
    email: "harsh@mediassist.com",
    linkedin: "https://linkedin.com",
    initials: "HP",
    color: "from-orange-500 to-rose-500",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-gray-50 dark:bg-charcoal-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Experienced healthcare and technology professionals dedicated to transforming the healthcare industry.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member) => (
            <div
              key={member.id}
              className="group bg-white dark:bg-charcoal-900 rounded-2xl overflow-hidden border border-border hover:border-primary/50 smooth-transition hover:shadow-xl"
            >
              {/* Photo Placeholder */}
              <div className={`h-56 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>

                {/* Avatar initials */}
                <div className="text-6xl font-bold text-white/80 group-hover:scale-110 smooth-transition">
                  {member.initials}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Name and Role */}
                <h3 className="text-2xl font-bold mb-1 text-foreground">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-4">{member.role}</p>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white smooth-transition"
                    title="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white smooth-transition"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`#${member.id}`}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white smooth-transition"
                    title="View Profile"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl overflow-hidden">
          <div className="px-8 md:px-12 py-12 md:py-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              We're building the future of healthcare. If you're passionate about healthcare technology, 
              we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@mediassist.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:shadow-lg smooth-transition"
            >
              View Careers
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
