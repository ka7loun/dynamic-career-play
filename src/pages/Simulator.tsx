import { useState } from "react";
import { MessageSquare, Mail, ListTodo, Clock, Bell, TrendingUp, Users, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const chatMessages = [
  { from: "Sarah Chen (Senior Mentor)", avatar: "SC", time: "9:15 AM", text: "Hey, welcome to the team! Can you take a look at the Q3 report? It needs... some work. You'll figure out what I mean.", type: "mentor" },
  { from: "You", avatar: "Y", time: "9:22 AM", text: "Thanks Sarah! I'll review it now. Any specific areas I should focus on?", type: "you" },
  { from: "Sarah Chen (Senior Mentor)", avatar: "SC", time: "9:45 AM", text: "Good question! Focus on whatever you think is most important. Trust your judgment.", type: "mentor" },
  { from: "James K. (Teammate)", avatar: "JK", time: "10:30 AM", text: "Hey, can we sync about the presentation deck?", type: "ghoster" },
  { from: "You", avatar: "Y", time: "10:35 AM", text: "Sure! When works for you?", type: "you" },
  { from: "System", avatar: "!", time: "2:00 PM", text: "James K. has not responded. It's been 3.5 hours.", type: "system" },
];

const emails = [
  { from: "Marcus Webb (Client)", subject: "URGENT: Complete scope change needed", preview: "Hi team, after our board meeting yesterday, we need to pivot the entire project deliverable from...", time: "Thu 4:15 PM", unread: true, urgent: true },
  { from: "Sarah Chen", subject: "Re: Q3 Report feedback", preview: "Great catch on the data discrepancy in section 3. Can you also review...", time: "Wed 11:00 AM", unread: true, urgent: false },
  { from: "HR Department", subject: "Welcome to TechCorp — Week 1 Resources", preview: "Welcome aboard! Here are some resources to help you settle in...", time: "Mon 8:00 AM", unread: false, urgent: false },
];

const tasks = {
  todo: [
    { id: 1, title: "Review Q3 report data", priority: "High", tag: "Analysis" },
    { id: 2, title: "Prepare client presentation", priority: "Critical", tag: "Deliverable" },
  ],
  inProgress: [
    { id: 3, title: "Respond to client scope change", priority: "Critical", tag: "Client" },
  ],
  done: [
    { id: 4, title: "Team standup notes", priority: "Low", tag: "Admin" },
    { id: 5, title: "Set up dev environment", priority: "Medium", tag: "Setup" },
  ],
};

const metrics = [
  { label: "Communication", value: 72, trend: "+5" },
  { label: "Follow-through", value: 58, trend: "-3" },
  { label: "Prioritization", value: 81, trend: "+12" },
  { label: "Adaptability", value: 45, trend: "new" },
];

type Tab = 'chat' | 'mail' | 'tasks';

const Simulator = () => {
  const [activeTab, setActiveTab] = useState<Tab>('chat');
  const [currentDay, setCurrentDay] = useState(3);

  const tabs: { key: Tab; icon: typeof MessageSquare; label: string; badge?: number }[] = [
    { key: 'chat', icon: MessageSquare, label: 'Trail Chat', badge: 2 },
    { key: 'mail', icon: Mail, label: 'Trail Mail', badge: 1 },
    { key: 'tasks', icon: ListTodo, label: 'Trail Tasks' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container px-4">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-nexus-green mb-2">Phase 4 — Career Flight Simulator</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">TrailOS</h1>
          <p className="text-muted-foreground">Your simulated corporate workspace. Handle real scenarios.</p>
        </div>

        {/* Day indicator */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 rounded-lg glass px-4 py-2">
            <Clock className="h-4 w-4 text-nexus-purple" />
            <span className="text-sm font-medium">Day {currentDay + 1} of 5 — {days[currentDay]}</span>
          </div>
          <div className="flex gap-1">
            {days.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentDay(i)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${i === currentDay ? 'bg-gradient-to-br from-nexus-purple to-nexus-blue text-white' :
                  i < currentDay ? 'bg-nexus-green/20 text-nexus-green' : 'bg-secondary text-muted-foreground'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main workspace */}
          <div className="lg:col-span-3">
            {/* Tab bar */}
            <div className="flex items-center gap-1 rounded-t-2xl glass border-b-0 p-2">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === t.key ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                  {t.badge && <span className="bg-nexus-red text-white text-xs px-1.5 py-0.5 rounded-full">{t.badge}</span>}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="rounded-b-2xl rounded-tr-2xl glass border-t-0 min-h-[500px]">
              {activeTab === 'chat' && (
                <div className="p-6 space-y-4">
                  {chatMessages.map((m, i) => (
                    <div key={i} className={`flex gap-3 ${m.type === 'you' ? 'flex-row-reverse' : ''}`}>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${m.type === 'mentor' ? 'bg-nexus-blue/20 text-nexus-blue' :
                        m.type === 'ghoster' ? 'bg-nexus-orange/20 text-nexus-orange' :
                          m.type === 'system' ? 'bg-nexus-red/20 text-nexus-red' :
                            'bg-secondary text-foreground'
                        }`}>
                        {m.avatar}
                      </div>
                      <div className={`max-w-[75%] ${m.type === 'system' ? 'w-full max-w-full' : ''}`}>
                        {m.type !== 'you' && <p className="text-xs text-muted-foreground mb-1">{m.from} · {m.time}</p>}
                        <div className={`rounded-xl px-4 py-2.5 text-sm ${m.type === 'system' ? 'bg-nexus-red/10 border border-nexus-red/20 text-nexus-red text-center italic' :
                          m.type === 'you' ? 'bg-gradient-to-r from-nexus-purple/20 to-nexus-blue/20 border border-nexus-purple/20' :
                            'bg-secondary/50'
                          }`}>
                          {m.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'mail' && (
                <div className="divide-y divide-border/50">
                  {emails.map((e, i) => (
                    <div key={i} className={`p-5 hover:bg-secondary/30 cursor-pointer transition-colors ${e.unread ? '' : 'opacity-60'}`}>
                      <div className="flex items-start gap-3">
                        {e.urgent && <AlertCircle className="h-4 w-4 text-nexus-red shrink-0 mt-1" />}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-sm ${e.unread ? 'font-bold' : 'font-medium'}`}>{e.from}</span>
                            <span className="text-xs text-muted-foreground">{e.time}</span>
                          </div>
                          <p className={`text-sm mb-1 ${e.unread ? 'font-semibold' : ''}`}>{e.subject}</p>
                          <p className="text-sm text-muted-foreground truncate">{e.preview}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'tasks' && (
                <div className="p-6 grid grid-cols-3 gap-4">
                  {(["todo", "inProgress", "done"] as const).map((col) => (
                    <div key={col}>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        {col === 'todo' ? 'To Do' : col === 'inProgress' ? 'In Progress' : 'Done'} ({tasks[col].length})
                      </h4>
                      <div className="space-y-2">
                        {tasks[col].map((t) => (
                          <div key={t.id} className="rounded-lg bg-secondary/50 p-3 text-sm cursor-pointer hover:bg-secondary transition-colors">
                            <p className="font-medium mb-2">{t.title}</p>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-1.5 py-0.5 rounded ${t.priority === 'Critical' ? 'bg-nexus-red/10 text-nexus-red' :
                                t.priority === 'High' ? 'bg-nexus-orange/10 text-nexus-orange' :
                                  t.priority === 'Medium' ? 'bg-nexus-blue/10 text-nexus-blue' :
                                    'bg-muted text-muted-foreground'
                                }`}>{t.priority}</span>
                              <span className="text-xs text-muted-foreground">{t.tag}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Metrics sidebar */}
          <div className="space-y-4">
            <div className="rounded-2xl glass p-6">
              <h3 className="font-display text-sm font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-nexus-green" /> Performance
              </h3>
              <div className="space-y-4">
                {metrics.map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{m.label}</span>
                      <span className="font-medium">{m.value}%
                        <span className={`text-xs ml-1 ${m.trend.startsWith('+') ? 'text-nexus-green' : m.trend.startsWith('-') ? 'text-nexus-red' : 'text-muted-foreground'}`}>
                          {m.trend}
                        </span>
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-nexus-purple to-nexus-blue transition-all"
                        style={{ width: `${m.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl glass p-6">
              <h3 className="font-display text-sm font-bold mb-3 flex items-center gap-2">
                <Bell className="h-4 w-4 text-nexus-orange" /> Notifications
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-2 items-start">
                  <div className="w-2 h-2 rounded-full bg-nexus-red mt-1.5 shrink-0" />
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Marcus Webb</span> sent an urgent email</p>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-2 h-2 rounded-full bg-nexus-orange mt-1.5 shrink-0" />
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">James K.</span> hasn't replied in 3h</p>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-2 h-2 rounded-full bg-nexus-blue mt-1.5 shrink-0" />
                  <p className="text-muted-foreground">Sprint deadline in <span className="text-foreground font-medium">2 days</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Navigation */}
        <div className="mt-12 flex justify-start">
          <Button asChild variant="outline" className="glass gap-2 hover-lift">
            <Link to="/interview">
              <ArrowLeft className="h-4 w-4" /> Previous: Stress Test
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
