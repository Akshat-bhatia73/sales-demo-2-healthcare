"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { MainContent } from "@/components/layout/main-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      <Sidebar />
      <div className="pl-16 lg:pl-64 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto p-6">
          <MainContent />
        </div>
      </div>
    </div>
  );
}