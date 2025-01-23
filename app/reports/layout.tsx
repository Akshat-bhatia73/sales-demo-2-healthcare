"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      {children}
    </div>
  );
}
