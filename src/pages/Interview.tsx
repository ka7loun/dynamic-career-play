import { useState } from "react";
import { Mic, MicOff, Play, AlertTriangle, CheckCircle, BarChart3, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const transcript = [
  { speaker: "AI", text: "Tell me about a time you had to work with a difficult team member.", type: "question" },
  { speaker: "You", text: "In my database systems course, one team member consistently missed meetings. I scheduled a one-on-one to understand their situation and we reorganized task assignments.", type: "winning" },
  { speaker: "AI", text: "How did you handle it when they still didn't contribute after your conversation?", type: "question" },
  { speaker: "You", text: "Honestly, I just... did their part myself to make sure we got a good grade.", type: "red-flag" },
  { speaker: "AI", text: "What would you do differently in a workplace setting?", type: "question" },
  { speaker: "You", text: "I'd escalate to the project manager after documenting the issues, rather than absorbing the extra work silently. I learned that enabling isn't helping.", type: "winning" },
];

const scores = [
  { label: "Confidence", value: 72, color: "bg-nexus-blue" },
  { label: "Sentiment", value: 65, color: "bg-nexus-purple" },
  { label: "Tone", value: 78, color: "bg-nexus-green" },
  { label: "Structure", value: 55, color: "bg-nexus-orange" },
];

const feedback = [
  { title: "Strong opening with STAR method", detail: "You provided context, action, and result in your first answer. This is exactly what interviewers look for.", positive: true },
  { title: "Avoided conflict escalation", detail: "When the AI pressed on the difficult teammate scenario, you admitted to absorbing work rather than escalating — this is a common red flag for PMs who need to delegate.", positive: false },
  { title: "Self-awareness in recovery", detail: "Your reflection on what you'd do differently showed maturity and growth mindset. Interviewers value candidates who learn from mistakes.", positive: true },
  { title: "Filler words detected", detail: "You used 'honestly' and 'just' as hedging language 3 times. Practice being more direct and assertive.", positive: false },
];

const Interview = () => {
  const [isLive, setIsLive] = useState(false);
  const [showResults, setShowResults] = useState(true);

  return (
    <div className="min-h-screen py-12">
      <div className="container px-4">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-nexus-cyan mb-2">Phase 3 — Stress Test</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">AI Voice Interview</h1>
          <p className="text-muted-foreground">Real-time adaptive interview with behavioral analysis.</p>
        </div>

        {/* Interview Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Avatar / Controls */}
          <div className="rounded-2xl glass p-8 flex flex-col items-center justify-center text-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-blue flex items-center justify-center">
                <div className={`w-24 h-24 rounded-full bg-card flex items-center justify-center ${isLive ? 'animate-pulse' : ''}`}>
                  {isLive ? <Mic className="h-10 w-10 text-nexus-purple" /> : <MicOff className="h-10 w-10 text-muted-foreground" />}
                </div>
              </div>
              {isLive && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 bg-nexus-purple rounded-full animate-pulse" style={{ height: `${12 + Math.random() * 20}px`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              )}
            </div>
            <h3 className="font-display font-bold mb-1">{isLive ? "Listening..." : "Ready to Begin"}</h3>
            <p className="text-sm text-muted-foreground mb-6">AI Behavioral Interviewer</p>
            <Button
              onClick={() => setIsLive(!isLive)}
              className={isLive
                ? "bg-nexus-red hover:bg-nexus-red/90 text-white"
                : "bg-gradient-to-r from-nexus-purple to-nexus-blue text-white hover:opacity-90"
              }
            >
              {isLive ? <><MicOff className="mr-2 h-4 w-4" /> End Interview</> : <><Play className="mr-2 h-4 w-4" /> Start Interview</>}
            </Button>
          </div>

          {/* Transcript */}
          <div className="lg:col-span-2 rounded-2xl glass p-6">
            <h3 className="font-display text-lg font-bold mb-4">Live Transcript</h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {transcript.map((t, i) => (
                <div key={i} className={`flex gap-3 ${t.speaker === 'You' ? 'flex-row-reverse' : ''}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    t.speaker === 'AI' ? 'bg-gradient-to-br from-nexus-purple to-nexus-blue text-white' : 'bg-secondary text-foreground'
                  }`}>
                    {t.speaker === 'AI' ? 'AI' : 'Y'}
                  </div>
                  <div className={`max-w-[80%] rounded-xl px-4 py-3 text-sm ${
                    t.type === 'winning' ? 'bg-nexus-green/10 border border-nexus-green/20' :
                    t.type === 'red-flag' ? 'bg-nexus-red/10 border border-nexus-red/20' :
                    'bg-secondary/50'
                  }`}>
                    {t.type === 'winning' && <span className="text-xs text-nexus-green font-semibold block mb-1">✦ Winning Moment</span>}
                    {t.type === 'red-flag' && <span className="text-xs text-nexus-red font-semibold block mb-1">⚑ Red Flag</span>}
                    {t.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Post-Interview Scorecard */}
        {showResults && (
          <div className="rounded-2xl glass p-8 mb-10">
            <h3 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-nexus-purple" /> Interview Scorecard
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {scores.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
                      <circle cx="50" cy="50" r="42" fill="none" className={`${s.color.replace('bg-', 'stroke-')}`} stroke="currentColor" strokeWidth="8" strokeDasharray={`${s.value * 2.64} ${100 * 2.64}`} strokeLinecap="round"
                        style={{ color: `hsl(var(--${s.color.replace('bg-', '')}))` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-lg font-bold">{s.value}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feedback */}
        {showResults && (
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Detailed Feedback</h3>
            <div className="space-y-3">
              {feedback.map((f, i) => (
                <details key={i} className="rounded-xl glass group">
                  <summary className="flex items-center gap-3 p-5 cursor-pointer list-none">
                    {f.positive ? <CheckCircle className="h-5 w-5 text-nexus-green shrink-0" /> : <AlertTriangle className="h-5 w-5 text-nexus-orange shrink-0" />}
                    <span className="font-semibold text-sm flex-1">{f.title}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground border-t border-border/50 mt-0 pt-3">
                    {f.detail}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interview;
