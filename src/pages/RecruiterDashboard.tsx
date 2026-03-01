import { useState } from "react";
import { Search, Download, Play, TrendingUp, Shield, Brain, Clock, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

const candidates = [
  { id: 1, name: "Alex Rivera", school: "MIT", wrs: 94, technical: 92, soft: 88, reliability: 98, integrity: 97, trend: [40, 55, 62, 78, 85, 92, 94] },
  { id: 2, name: "Priya Sharma", school: "Stanford", wrs: 91, technical: 88, soft: 95, reliability: 90, integrity: 92, trend: [50, 58, 65, 72, 80, 88, 91] },
  { id: 3, name: "Jordan Lee", school: "Georgia Tech", wrs: 89, technical: 95, soft: 78, reliability: 92, integrity: 90, trend: [60, 62, 68, 75, 82, 86, 89] },
  { id: 4, name: "Sofia Martinez", school: "UC Berkeley", wrs: 86, technical: 80, soft: 92, reliability: 88, integrity: 85, trend: [35, 45, 58, 70, 78, 84, 86] },
  { id: 5, name: "Kai Tanaka", school: "U of Tokyo", wrs: 84, technical: 90, soft: 72, reliability: 85, integrity: 88, trend: [55, 60, 65, 70, 76, 80, 84] },
  { id: 6, name: "Emma O'Brien", school: "Trinity College", wrs: 82, technical: 78, soft: 86, reliability: 82, integrity: 83, trend: [42, 50, 60, 68, 75, 80, 82] },
  { id: 7, name: "Liam Chen", school: "Waterloo", wrs: 80, technical: 85, soft: 70, reliability: 80, integrity: 86, trend: [45, 52, 58, 65, 72, 77, 80] },
  { id: 8, name: "Aisha Bello", school: "Oxford", wrs: 78, technical: 72, soft: 82, reliability: 78, integrity: 80, trend: [38, 45, 55, 62, 70, 75, 78] },
  { id: 9, name: "Marcus Kim", school: "CMU", wrs: 76, technical: 82, soft: 68, reliability: 75, integrity: 78, trend: [50, 55, 60, 65, 70, 73, 76] },
  { id: 10, name: "Zara Patel", school: "IIT Delhi", wrs: 74, technical: 70, soft: 80, reliability: 72, integrity: 75, trend: [30, 40, 50, 58, 65, 70, 74] },
];

const RecruiterDashboard = () => {
  const [selected, setSelected] = useState<typeof candidates[0] | null>(null);

  const wrsBreakdown = selected ? [
    { label: "Technical", value: selected.technical },
    { label: "Soft Skills", value: selected.soft },
    { label: "Reliability", value: selected.reliability },
    { label: "Integrity", value: selected.integrity },
  ] : [];

  const growthData = selected ? selected.trend.map((v, i) => ({ day: `Day ${i + 1}`, score: v })) : [];

  return (
    <div className="min-h-screen py-12">
      <div className="container px-4">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-nexus-orange mb-2">Recruiter Portal</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Candidate Rankings</h1>
          <p className="text-muted-foreground">Top candidates ranked by Work-Readiness Score (WRS).</p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 flex items-center gap-2 rounded-xl glass px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search candidates..." className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground/50" />
          </div>
          <Button variant="outline" className="glass">Post a Job Sprint</Button>
        </div>

        {/* Candidates list */}
        <div className="space-y-2">
          {candidates.map((c, i) => (
            <div
              key={c.id}
              onClick={() => setSelected(c)}
              className={`rounded-xl glass p-4 flex items-center gap-4 cursor-pointer transition-all hover:bg-card/80 ${
                selected?.id === c.id ? 'gradient-border glow-purple' : ''
              }`}
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                i < 3 ? 'bg-gradient-to-br from-nexus-purple to-nexus-blue text-white' : 'bg-secondary text-muted-foreground'
              }`}>
                #{i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-sm">{c.name}</span>
                <p className="text-xs text-muted-foreground">{c.school}</p>
              </div>
              {/* Mini sparkline */}
              <div className="hidden sm:block w-24 h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={c.trend.map((v, j) => ({ v }))}>
                    <Line type="monotone" dataKey="v" stroke="hsl(var(--nexus-purple))" strokeWidth={1.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="hidden md:inline"><Brain className="inline h-3 w-3 mr-0.5" />{c.technical}</span>
                <span className="hidden md:inline"><Star className="inline h-3 w-3 mr-0.5" />{c.soft}</span>
                <span className="hidden md:inline"><Clock className="inline h-3 w-3 mr-0.5" />{c.reliability}</span>
                <span className="hidden md:inline"><Shield className="inline h-3 w-3 mr-0.5" />{c.integrity}</span>
              </div>
              <div className="text-right">
                <span className="font-display text-xl font-bold gradient-text">{c.wrs}</span>
                <p className="text-xs text-muted-foreground">WRS</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep-dive modal */}
        {selected && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="w-full max-w-2xl rounded-2xl glass-strong p-8 max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-display text-2xl font-bold">{selected.name}</h2>
                  <p className="text-muted-foreground">{selected.school} · WRS: <span className="gradient-text font-bold">{selected.wrs}</span></p>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 rounded-lg hover:bg-secondary">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Growth Arc */}
              <div className="mb-6">
                <h3 className="font-display text-sm font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-nexus-green" /> Growth Arc
                </h3>
                <div className="h-[200px] rounded-xl bg-secondary/30 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={growthData}>
                      <XAxis dataKey="day" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                      <YAxis domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                      <Line type="monotone" dataKey="score" stroke="hsl(var(--nexus-purple))" strokeWidth={2} dot={{ r: 4, fill: 'hsl(var(--nexus-purple))' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* WRS Breakdown */}
              <div className="mb-6">
                <h3 className="font-display text-sm font-bold mb-3">WRS Breakdown</h3>
                <div className="grid grid-cols-2 gap-3">
                  {wrsBreakdown.map((w, i) => (
                    <div key={i} className="rounded-lg bg-secondary/50 p-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{w.label}</span>
                        <span className="font-bold">{w.value}</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-nexus-purple to-nexus-blue" style={{ width: `${w.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight Reel placeholder */}
              <div className="mb-6">
                <h3 className="font-display text-sm font-bold mb-3">Highlight Reel</h3>
                <div className="rounded-xl bg-secondary/30 h-40 flex items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors">
                  <div className="text-center">
                    <Play className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">30s AI-generated interview highlight</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-nexus-purple to-nexus-blue text-white border-0 hover:opacity-90">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
                <Button variant="outline" className="flex-1 glass">Contact Candidate</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruiterDashboard;
