import { Target, Clock, Zap, Trophy, ArrowRight, ArrowLeft, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import { Link } from "react-router-dom";

const careerPaths = [
  { title: "Junior Product Manager", match: 87, company: "Tech Startups", growth: "+24% demand" },
  { title: "Data Analyst", match: 82, company: "Finance / SaaS", growth: "+31% demand" },
  { title: "Sales Engineer", match: 76, company: "Enterprise SaaS", growth: "+18% demand" },
  { title: "UX Researcher", match: 71, company: "Product Companies", growth: "+22% demand" },
  { title: "Technical Writer", match: 65, company: "Developer Tools", growth: "+15% demand" },
];

const gapData = [
  { skill: "Stakeholder Mgmt", current: 35, required: 85 },
  { skill: "Agile / Scrum", current: 50, required: 90 },
  { skill: "User Research", current: 30, required: 80 },
  { skill: "Roadmapping", current: 20, required: 85 },
  { skill: "Data Analysis", current: 75, required: 80 },
  { skill: "Communication", current: 65, required: 90 },
];

const challenges = [
  {
    title: "The Sprint Retro",
    desc: "Lead a simulated sprint retrospective with 3 AI team members. Handle conflicting feedback and produce an action plan.",
    difficulty: "Medium",
    time: "45 min",
    skills: ["Facilitation", "Conflict Resolution", "Agile"],
  },
  {
    title: "The Client Pitch",
    desc: "Present a product roadmap to an AI client who keeps changing requirements mid-meeting.",
    difficulty: "Hard",
    time: "30 min",
    skills: ["Persuasion", "Adaptability", "Presentation"],
  },
  {
    title: "The Data Brief",
    desc: "Analyze a messy dataset and write a clear, concise one-page brief for non-technical stakeholders.",
    difficulty: "Easy",
    time: "60 min",
    skills: ["Data Analysis", "Writing", "Simplification"],
  },
];

const CareerMapping = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-nexus-blue mb-2">Phase 2 — The Bridge</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Career Mapping</h1>
          <p className="text-muted-foreground">AI-matched career paths based on your skill profile.</p>
        </div>

        {/* Career paths */}
        <div className="mb-12">
          <h3 className="font-display text-lg font-bold mb-4">Top Career Matches</h3>
          <div className="space-y-3">
            {careerPaths.map((c, i) => (
              <div key={i} className={`rounded-xl glass p-5 flex items-center gap-4 hover:bg-card/80 transition-colors cursor-pointer ${i === 0 ? 'gradient-border glow-purple' : ''}`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg font-display font-bold text-sm ${i === 0 ? 'bg-gradient-to-br from-nexus-purple to-nexus-blue text-white' : 'bg-secondary text-muted-foreground'
                  }`}>
                  #{i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{c.title}</span>
                    {i === 0 && <span className="text-xs px-2 py-0.5 rounded-full bg-nexus-purple/10 text-nexus-purple">Best Match</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{c.company} · {c.growth}</p>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl font-bold gradient-text">{c.match}%</span>
                  <p className="text-xs text-muted-foreground">match</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gap Analysis */}
        <div className="rounded-2xl glass p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-5 w-5 text-nexus-blue" />
            <h3 className="font-display text-lg font-bold">Gap Analysis — Junior Product Manager</h3>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gapData} layout="vertical" barGap={2}>
                <XAxis type="number" domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <YAxis dataKey="skill" type="category" width={120} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <Bar dataKey="current" radius={[0, 4, 4, 0]} barSize={14}>
                  {gapData.map((_, i) => (
                    <Cell key={i} fill="hsl(var(--nexus-purple))" fillOpacity={0.8} />
                  ))}
                </Bar>
                <Bar dataKey="required" radius={[0, 4, 4, 0]} barSize={14}>
                  {gapData.map((_, i) => (
                    <Cell key={i} fill="hsl(var(--nexus-blue))" fillOpacity={0.3} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-nexus-purple" /> Your Skills</div>
            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-nexus-blue opacity-40" /> Required</div>
          </div>
        </div>

        {/* Micro-Challenges */}
        <div>
          <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-nexus-orange" /> Micro-Challenges
          </h3>
          <p className="text-muted-foreground text-sm mb-6">Prove the missing skills with targeted challenges.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {challenges.map((ch, i) => (
              <div key={i} className="rounded-xl glass p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${ch.difficulty === 'Hard' ? 'bg-nexus-red/10 text-nexus-red' :
                      ch.difficulty === 'Medium' ? 'bg-nexus-orange/10 text-nexus-orange' :
                        'bg-nexus-green/10 text-nexus-green'
                    }`}>{ch.difficulty}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {ch.time}
                  </span>
                </div>
                <h4 className="font-semibold mb-2">{ch.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{ch.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ch.skills.map((s, j) => (
                    <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{s}</span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full glass">
                  Start Challenge <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Navigation */}
        <div className="mt-12 flex justify-between">
          <Button asChild variant="outline" className="glass gap-2 hover-lift">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4" /> Previous: Digital Mirror
            </Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-nexus-purple to-nexus-blue text-white border-0 hover:opacity-90 hover-lift px-6">
            <Link to="/interview">
              Next: Stress Test <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CareerMapping;
