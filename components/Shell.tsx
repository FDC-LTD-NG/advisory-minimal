"use client";

import { useState } from "react";
import { View } from "@/lib/data/navigation";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import LandingView from "@/components/views/LandingView";
import AboutView from "@/components/views/AboutView";
import LeadershipView from "@/components/views/LeadershipView";
import ContactView from "@/components/views/ContactView";
import { siteConfig } from "@/lib/data";

export default function Shell() {
  const [view, setView] = useState<View>("landing");
  const navigate = (v: View) => setView(v);

  return (
    <div className="fixed inset-0 overflow-hidden bg-ink text-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary to-ink" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${siteConfig.heroImage}')` }}
      />
      <div className="absolute inset-0 bg-ink/40" />

      <TopBar onNavigate={navigate} />

      <main className="absolute inset-0 z-10 flex items-center px-8 pt-24 pb-28 md:px-16 lg:px-24">
        <div className="w-full max-w-xl">
          <div className="mb-6 h-1.5 w-20 bg-accent" />
          <div className="card-scroll max-h-[60vh] overflow-y-auto bg-surface p-8 text-ink shadow-2xl md:p-12">
            {view === "landing" && <LandingView onNavigate={navigate} />}
            {view === "about" && <AboutView />}
            {view === "leadership" && <LeadershipView />}
            {view === "contact" && <ContactView />}
          </div>
        </div>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
