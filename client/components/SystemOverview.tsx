import { ArrowRight } from "lucide-react";

export function SystemOverview() {
  return (
    <section className="py-20 md:py-32 bg-charcoal-900 dark-bg-grid relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-teal rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground glow-heading">
              One Platform,
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent animate-pulse">
                Infinite Possibilities
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              mediassist is more than just an app. It's a comprehensive healthcare ecosystem that connects 
              all stakeholders in the healthcare industry. From patient appointments to prescription management, 
              everything works seamlessly together.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-teal flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Patient Access</h3>
                  <p className="text-muted-foreground">
                    Book appointments, order medicines, and access your complete health records in one place.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-teal flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Doctor Management</h3>
                  <p className="text-muted-foreground">
                    Manage appointments, create prescriptions, and track patient outcomes efficiently.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-teal flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Pharmacy Integration</h3>
                  <p className="text-muted-foreground">
                    Verify patient IDs, dispense medicines securely, and maintain prescription records.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white rounded-lg bg-gradient-teal hover:shadow-lg smooth-transition"
            >
              Get Started Now
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Right Side - Visual Diagram */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central circle */}
              <div className="absolute w-48 h-48 rounded-full bg-gradient-teal opacity-10 blur-2xl"></div>

              {/* Main mediassist node */}
              <div className="absolute z-10 w-24 h-24 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <p className="font-bold text-xs tracking-widest">MEDIASSIST</p>
                  <p className="text-xs opacity-90">Platform</p>
                </div>
              </div>

              {/* Patient node */}
              <div className="absolute top-0 left-0 w-20 h-20 rounded-lg bg-rose-100 dark:bg-rose-950 border-2 border-rose-400 flex items-center justify-center">
                <div className="text-center text-xs font-bold text-rose-700 dark:text-rose-300">
                  <div className="mb-1">👤</div>
                  <p>Patient</p>
                </div>
              </div>

              {/* Doctor node */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-lg bg-blue-100 dark:bg-blue-950 border-2 border-blue-400 flex items-center justify-center">
                <div className="text-center text-xs font-bold text-blue-700 dark:text-blue-300">
                  <div className="mb-1">👨‍⚕️</div>
                  <p>Doctor</p>
                </div>
              </div>

              {/* Pharmacy node */}
              <div className="absolute bottom-0 right-8 w-20 h-20 rounded-lg bg-green-100 dark:bg-green-950 border-2 border-green-400 flex items-center justify-center">
                <div className="text-center text-xs font-bold text-green-700 dark:text-green-300">
                  <div className="mb-1">💊</div>
                  <p>Pharmacy</p>
                </div>
              </div>

              {/* Database node */}
              <div className="absolute bottom-0 left-8 w-20 h-20 rounded-lg bg-purple-100 dark:bg-purple-950 border-2 border-purple-400 flex items-center justify-center">
                <div className="text-center text-xs font-bold text-purple-700 dark:text-purple-300">
                  <div className="mb-1">🗄️</div>
                  <p>Database</p>
                </div>
              </div>

              {/* Connection lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="50%" y1="50%" x2="10%" y2="10%" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="90%" y2="10%" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="70%" y2="85%" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="50%" y1="50%" x2="30%" y2="85%" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
