import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import StudentDashboard from "./pages/StudentDashboard";
import CareerMapping from "./pages/CareerMapping";
import Interview from "./pages/Interview";
import Simulator from "./pages/Simulator";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Apply dark mode by default
if (!document.documentElement.classList.contains('dark')) {
  document.documentElement.classList.add('dark');
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/careers" element={<CareerMapping />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
