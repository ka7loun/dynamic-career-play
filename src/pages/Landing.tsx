import { ArrowRight, Brain, Mic, Monitor, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "45%", label: "of managers say Gen Z grads are unprepared", source: "Resume Builder, 2024" },
  { value: "73%", label: "of employers prioritize soft skills over technical", source: "LinkedIn Report" },
  { value: "6 mo", label: "average time-to-competency for new graduates", source: "SHRM Research" },
];

const phases = [
  {
    icon: Brain,
    title: "Digital Mirror",
    subtitle: "Phase 1",
    description: "Upload your academic DNA — transcripts, GitHub, projects. Our AI creates a 360° Skill Heatmap revealing hidden strengths and critical voids.",
    color: "from-nexus-purple to-nexus-blue",
  },
  {
    icon: Target,
    title: "The Bridge",
    subtitle: "Phase 2",
    description: "AI-matched career paths with gap analysis. See exactly what skills you need and get micro-challenges to prove them fast.",
    color: "from-nexus-blue to-nexus-cyan",
  },
  {
    icon: Mic,
    title: "Stress Test",
    subtitle: "Phase 3",
    description: "AI voice interview that adapts in real-time. Get behavioral analysis on sentiment, confidence, and tone with a full debrief.",
    color: "from-nexus-cyan to-nexus-green",
  },
  {
    icon: Monitor,
    title: "Flight Simulator",
    subtitle: "Phase 4",
    description: "A simulated corporate world — Slack, Outlook, Jira — with AI coworkers. Handle vague briefs, angry clients, and silent teammates.",
    color: "from-nexus-green to-nexus-purple",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-nexus-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-nexus-blue/20 rounded-full blur-[120px] animate-pulse-glow stagger-2" />

        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-slide-up opacity-0">
            <Zap className="h-3.5 w-3.5 text-nexus-purple" />
            The Career Readiness Ecosystem
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 animate-slide-up opacity-0 stagger-1">
            Replace Resumes
            <br />
            <span className="gradient-text">with Proof</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10 animate-slide-up opacity-0 stagger-2">
            A simulated professional world where students fail safely, succeed visibly,
            and recruiters hire on evidence — not gut feeling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0 stagger-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-blue text-white border-0 hover:opacity-90 px-8 h-12 text-base glow-purple">
              <Link to="/dashboard">
                I'm a Student <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base glass">
              <Link to="/recruiter">
                I'm a Recruiter <Users className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border/50 bg-card/40 backdrop-blur-sm">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl font-bold gradient-text mb-2">{s.value}</div>
                <p className="text-muted-foreground text-sm">{s.label}</p>
                <p className="text-muted-foreground/50 text-xs mt-1">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              The <span className="gradient-text">Maturity Gap</span> is Real
            </h2>
            <p className="text-muted-foreground text-lg">
              Universities reward individual, theoretical excellence. Employers reward collaborative problem-solving
              and professional etiquette. Students enter the workforce like pilots flying for the first time —
              without a flight simulator.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-card/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Four Phases to <span className="gradient-text">Work-Ready</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A progressive journey from self-discovery to simulated workplace mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {phases.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-2xl glass p-8 phase-card"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} mb-4`}>
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{p.subtitle}</p>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Ready to Prove You're <span className="gradient-text">Work-Ready</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join the ecosystem that replaces static resumes with dynamic proof of performance.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-blue text-white border-0 hover:opacity-90 px-8 h-12 text-base glow-purple">
              <Link to="/dashboard">
                Start Your Journey <TrendingUp className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-nexus-purple to-nexus-blue">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="font-display text-sm font-bold">TRAIL</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 TRAIL. Built for the future of hiring.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
