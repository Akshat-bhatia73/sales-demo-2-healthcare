"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { SkillsGrid } from "@/components/skills/skills-grid";

export default function SkillsPage() {
  return (
    <div className="h-screen max-w-[1600px] mx-auto overflow-hidden bg-gradient-to-b flex">
      <Sidebar />
      <div className="p-6 h-screen overflow-auto w-full transition-all duration-300 text-neutral-800">
        <h1 className="text-2xl font-bold">Skills Library</h1>
        <p className="text-gray-600">Configure and manage your AI skills</p>
        <SkillsGrid />
      </div>
    </div>
  );
}
