"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden flex w-full">
      <Sidebar />
      {children}
    </div>
  );
}
