

# NEXUS — Frontend UI Plan

## Design Direction
Premium, dark-themed UI with accent gradients (purple-to-blue), glassmorphism cards, subtle animations, and a bold typographic hierarchy. Think Linear/Vercel/Raycast aesthetic — minimal, powerful, impressive at first glance.

---

## Pages & Features

### 1. Landing Page (Hero)
- Bold animated headline: "Replace Resumes with Proof"
- Subtitle + CTA buttons ("I'm a Student" / "I'm a Recruiter")
- Animated skill heatmap graphic or particle mesh as hero visual
- Stats bar: "45% of managers say grads are unprepared" with source
- Feature sections with icon cards for the 4 phases
- Smooth scroll with fade-in animations

### 2. Student Dashboard — Skill Heatmap (Phase 1: Digital Mirror)
- Upload area for transcripts/GitHub/projects (drag & drop UI)
- 360° Skill Heatmap visualization (radar chart using Recharts)
- "Hidden Strengths" and "Critical Voids" cards with color-coded badges
- Progress indicator showing profile completeness

### 3. Career Mapping (Phase 2: The Bridge)
- 5 suggested career paths as ranked cards with match percentage
- Gap Analysis view: side-by-side comparison (current skills vs. industry standard) as horizontal bar chart
- "Micro-Challenges" section — 3 challenge cards with difficulty, time, and skill tags

### 4. AI Voice Interview (Phase 3: Stress Test)
- Interview UI with avatar/waveform animation (simulated, no real AI)
- Live transcript panel with highlighted "Red Flags" (red) and "Winning Moments" (green)
- Post-interview scorecard: Sentiment, Confidence, Tone gauges
- Detailed feedback accordion

### 5. Career Flight Simulator — NexusOS (Phase 4: Core Innovation)
- Corporate desktop-style interface with a taskbar and window panels
- Simulated apps as tabs/windows:
  - **Nexus Chat** (Slack-like) — messages from AI personas (Senior Mentor, Ghoster, Angry Client)
  - **Nexus Mail** (Outlook-like) — inbox with scenario emails
  - **Nexus Tasks** (Jira-like) — kanban board with sprint tasks
- Timer/day indicator ("Day 3 of 5 — Thursday")
- Notification toasts from simulated coworkers
- Performance sidebar showing real-time soft-skill metrics

### 6. Recruiter Dashboard
- "Post a Job Sprint" form — define 3 "Moments of Truth"
- Top 10 Candidates list ranked by Work-Readiness Score (WRS)
- Each candidate card shows: WRS breakdown (technical, soft-skill, reliability, integrity), growth arc sparkline
- Candidate deep-dive modal:
  - Growth Arc line chart
  - Highlight Reel placeholder (video thumbnail)
  - One-Click downloadable CV preview

### 7. Shared Components
- Responsive top navigation with role switcher (Student/Recruiter)
- Dark/light mode toggle
- Consistent card system with glassmorphism
- Animated page transitions

---

## Tech Approach
- All mock/static data — no backend needed
- Recharts for all data visualizations
- Tailwind + custom CSS variables for the premium dark theme
- Lucide icons throughout
- Framer-motion-style animations via tailwindcss-animate + CSS keyframes

