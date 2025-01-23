"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function HealthcareJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="px-6 h-screen overflow-auto transition-all duration-300">
        {children}
      </div>
    </div>
  );
}