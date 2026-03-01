import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Zap, GraduationCap, Briefcase, ArrowLeft, Brain, Target, Mic, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const studentPhases = [
  { to: "/dashboard", label: "Digital Mirror", subtitle: "Phase 1", icon: Brain },
  { to: "/careers", label: "The Bridge", subtitle: "Phase 2", icon: Target },
  { to: "/interview", label: "Stress Test", subtitle: "Phase 3", icon: Mic },
  { to: "/simulator", label: "Flight Sim", subtitle: "Phase 4", icon: Monitor },
];

const studentPaths = ["/dashboard", "/careers", "/interview", "/simulator"];
const recruiterPaths = ["/recruiter"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isStudentFlow = studentPaths.includes(location.pathname);
  const isRecruiterFlow = recruiterPaths.includes(location.pathname);
  const isLanding = location.pathname === "/";

  const currentPhaseIndex = studentPaths.indexOf(location.pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-nexus-purple to-nexus-blue transition-transform group-hover:scale-110">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">TRAIL</span>
        </Link>

        {/* Desktop Center: Contextual Nav */}
        <div className="hidden md:flex items-center gap-1">
          {isLanding && (
            <div className="flex items-center gap-2">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-nexus-purple/10 hover:text-nexus-purple text-muted-foreground hover-lift"
              >
                <GraduationCap className="h-4 w-4" />
                Student
              </Link>
              <div className="w-px h-5 bg-border/60" />
              <Link
                to="/recruiter"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-nexus-orange/10 hover:text-nexus-orange text-muted-foreground hover-lift"
              >
                <Briefcase className="h-4 w-4" />
                Recruiter
              </Link>
            </div>
          )}

          {isStudentFlow && (
            <div className="flex items-center gap-0.5">
              {studentPhases.map((phase, i) => {
                const isActive = location.pathname === phase.to;
                const isPast = i < currentPhaseIndex;
                const Icon = phase.icon;
                return (
                  <Link
                    key={phase.to}
                    to={phase.to}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                        ? "text-foreground bg-gradient-to-r from-nexus-purple/15 to-nexus-blue/15 glow-purple"
                        : isPast
                          ? "text-nexus-green/80 hover:text-foreground hover:bg-secondary/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                  >
                    <div className={`flex h-6 w-6 items-center justify-center rounded-md transition-all ${isActive
                        ? "bg-gradient-to-br from-nexus-purple to-nexus-blue"
                        : isPast
                          ? "bg-nexus-green/20"
                          : "bg-secondary"
                      }`}>
                      <Icon className={`h-3 w-3 ${isActive ? "text-white" : isPast ? "text-nexus-green" : "text-muted-foreground"}`} />
                    </div>
                    <span className="hidden lg:inline">{phase.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-nexus-purple to-nexus-blue" />
                    )}
                  </Link>
                );
              })}
            </div>
          )}

          {isRecruiterFlow && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-nexus-orange/10 text-nexus-orange">
                <Briefcase className="h-3.5 w-3.5" />
                <span className="text-sm font-semibold">Recruiter Portal</span>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-2">
          {(isStudentFlow || isRecruiterFlow) && (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground gap-1.5"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Home
            </Button>
          )}
          {isLanding && (
            <>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Log in
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-nexus-purple to-nexus-blue text-white border-0 hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-border/50 p-4 space-y-1 animate-slide-down">
          {isLanding && (
            <>
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-nexus-purple/10 text-muted-foreground"
              >
                <GraduationCap className="h-4 w-4 text-nexus-purple" />
                Enter as Student
              </Link>
              <Link
                to="/recruiter"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-nexus-orange/10 text-muted-foreground"
              >
                <Briefcase className="h-4 w-4 text-nexus-orange" />
                Enter as Recruiter
              </Link>
              <div className="pt-3 flex flex-col gap-2">
                <Button variant="ghost" size="sm">Log in</Button>
                <Button size="sm" className="bg-gradient-to-r from-nexus-purple to-nexus-blue text-white border-0">
                  Get Started
                </Button>
              </div>
            </>
          )}

          {isStudentFlow && (
            <>
              <button
                onClick={() => { navigate("/"); setOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground w-full text-left"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </button>
              <div className="h-px bg-border/50 my-2" />
              {studentPhases.map((phase, i) => {
                const isActive = location.pathname === phase.to;
                const isPast = i < currentPhaseIndex;
                const Icon = phase.icon;
                return (
                  <Link
                    key={phase.to}
                    to={phase.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                        ? "text-foreground bg-nexus-purple/10"
                        : isPast
                          ? "text-nexus-green/80"
                          : "text-muted-foreground"
                      }`}
                  >
                    <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${isActive
                        ? "bg-gradient-to-br from-nexus-purple to-nexus-blue"
                        : isPast
                          ? "bg-nexus-green/20"
                          : "bg-secondary"
                      }`}>
                      <Icon className={`h-3.5 w-3.5 ${isActive ? "text-white" : isPast ? "text-nexus-green" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <span className="block">{phase.label}</span>
                      <span className="block text-xs text-muted-foreground">{phase.subtitle}</span>
                    </div>
                  </Link>
                );
              })}
            </>
          )}

          {isRecruiterFlow && (
            <>
              <button
                onClick={() => { navigate("/"); setOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground w-full text-left"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </button>
              <div className="h-px bg-border/50 my-2" />
              <div className="flex items-center gap-2 px-4 py-2 text-nexus-orange">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm font-semibold">Recruiter Portal</span>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
