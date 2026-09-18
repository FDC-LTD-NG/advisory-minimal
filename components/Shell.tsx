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
    <div className="fixed inset-0 overflow-hidden bg-[#1E2749] text-[#FAFAFF]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${siteConfig.heroImage}')` }}
      />
      <div className="absolute inset-0 bg-[rgba(30,39,73,0.5)]" />

      <TopBar onNavigate={navigate} />

      <main className="absolute inset-0 z-10 flex items-center px-6 pt-24 pb-28 md:px-16 lg:px-24">
        <div className="w-full max-w-sm md:max-w-md">
          <div className="mb-5 h-1.5 w-16 bg-[#E4D9FF]" />

          {/* Wrapper — holds size, shadow, corners */}
          <div className="relative max-h-[50vh] overflow-hidden rounded-sm shadow-2xl md:max-h-[58vh]">
            {/* Overlay — translucent periwinkle, sits on top */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-[#E4D9FF]/25" />

            {/* Scroll container — content */}
            <div
              key={view}
              className="card-scroll max-h-[50vh] overflow-y-auto bg-[#F6F4F0] p-7 text-[#1E2749] md:max-h-[58vh] md:p-9"
              style={{ animation: "var(--animate-card-in)" }}
            >
              {view === "landing" && <LandingView onNavigate={navigate} />}
              {view === "about" && <AboutView />}
              {view === "leadership" && <LeadershipView />}
              {view === "contact" && <ContactView />}
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
 