import { Upload, Eye, AlertTriangle, TrendingUp, FileText, Github, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer
} from "recharts";

const skillData = [
  { skill: "Problem Solving", current: 85, industry: 90 },
  { skill: "Collaboration", current: 40, industry: 80 },
  { skill: "Communication", current: 65, industry: 85 },
  { skill: "Technical", current: 90, industry: 75 },
  { skill: "Leadership", current: 30, industry: 60 },
  { skill: "Adaptability", current: 55, industry: 70 },
  { skill: "Time Mgmt", current: 70, industry: 75 },
  { skill: "Critical Thinking", current: 80, industry: 85 },
];

const strengths = [
  { title: "Data Science Aptitude", desc: "Your Physics coursework shows high logic reasoning ideal for Data Science roles", tag: "Hidden" },
  { title: "Algorithm Design", desc: "Top 15% in competitive programming patterns across your GitHub repos", tag: "Strong" },
  { title: "Technical Writing", desc: "Project documentation quality exceeds 80% of peers", tag: "Hidden" },
];

const voids = [
  { title: "Team Collaboration", desc: "Zero evidence of multi-person project contributions", severity: "Critical" },
  { title: "Client Communication", desc: "No experience in stakeholder-facing interactions", severity: "High" },
  { title: "Conflict Resolution", desc: "No data points for interpersonal challenge handling", severity: "Medium" },
];

const StudentDashboard = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-nexus-purple mb-2">Phase 1 — Digital Mirror</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Your Skill Heatmap</h1>
          <p className="text-muted-foreground">Upload your academic DNA and discover your true professional profile.</p>
        </div>

        {/* Upload + Profile Completeness */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 rounded-2xl glass p-8">
            <h3 className="font-display text-lg font-bold mb-4">Upload Your Data</h3>
            <div className="border-2 border-dashed border-border rounded-xl p-10 text-center hover:border-nexus-purple/50 transition-colors cursor-pointer">
              <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Drag & drop files here, or click to browse</p>
              <p className="text-xs text-muted-foreground/60">PDF Transcripts, GitHub URLs, Project descriptions</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { icon: FileText, label: "Transcript.pdf", status: "Uploaded" },
                { icon: Github, label: "github.com/alex", status: "Connected" },
                { icon: FolderOpen, label: "3 Projects", status: "Analyzed" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm">
                  <f.icon className="h-4 w-4 text-nexus-purple" />
                  <span>{f.label}</span>
                  <span className="text-xs text-nexus-green">✓ {f.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl glass p-8">
            <h3 className="font-display text-lg font-bold mb-4">Profile Completeness</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="url(#grad)" strokeWidth="8" strokeDasharray={`${68 * 2.64} ${100 * 2.64}`} strokeLinecap="round" />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--nexus-purple))" />
                      <stop offset="100%" stopColor="hsl(var(--nexus-blue))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold">68%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Transcripts</span><span className="text-nexus-green">✓</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">GitHub</span><span className="text-nexus-green">✓</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Projects</span><span className="text-nexus-green">✓</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Interview</span><span className="text-nexus-orange">Pending</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Simulation</span><span className="text-muted-foreground/50">Not started</span></div>
            </div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="rounded-2xl glass p-8 mb-10">
          <h3 className="font-display text-lg font-bold mb-6">360° Skill Heatmap</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="You" dataKey="current" stroke="hsl(var(--nexus-purple))" fill="hsl(var(--nexus-purple))" fillOpacity={0.2} strokeWidth={2} />
                <Radar name="Industry Standard" dataKey="industry" stroke="hsl(var(--nexus-blue))" fill="hsl(var(--nexus-blue))" fillOpacity={0.1} strokeWidth={2} strokeDasharray="4 4" />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-nexus-purple" /> Your Skills</div>
            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-nexus-blue opacity-60" /> Industry Standard</div>
          </div>
        </div>

        {/* Strengths & Voids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-nexus-green" /> Hidden Strengths
            </h3>
            <div className="space-y-3">
              {strengths.map((s, i) => (
                <div key={i} className="rounded-xl glass p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{s.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-nexus-green/10 text-nexus-green">{s.tag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-nexus-red" /> Critical Voids
            </h3>
            <div className="space-y-3">
              {voids.map((v, i) => (
                <div key={i} className="rounded-xl glass p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{v.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      v.severity === 'Critical' ? 'bg-nexus-red/10 text-nexus-red' :
                      v.severity === 'High' ? 'bg-nexus-orange/10 text-nexus-orange' :
                      'bg-muted text-muted-foreground'
                    }`}>{v.severity}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
