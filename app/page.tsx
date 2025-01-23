"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { MainContent } from "@/components/layout/main-content";

export default function Home() {
  return (
    <div className="h-screen max-w-[1600px] mx-auto overflow-hidden bg-gradient-to-b flex">
      <Sidebar />
      <div className="p-6 h-screen overflow-auto w-full transition-all duration-300 text-neutral-800">
          <MainContent />
      </div>
    </div>
  );
}