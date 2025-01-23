"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { ChevronLeft, FileText, Bot, Zap, Settings, Menu, GitGraph, Share2 } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: FileText, label: "Reports", href: "#reports" },
  { icon: Bot, label: "Agents", href: "/agents" },
  { icon: Share2, label: "Workflows", href: "/workflows" },
  { icon: Zap, label: "Automations", href: "#automations" },
  { icon: Settings, label: "Setup", href: "#setup" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen side-panel transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between px-3 py-4 border-b">
        <Link href={"/"}>{!isCollapsed && <Logo />}</Link>
        <Button
          variant="ghost"
          size="sm"
          className=""
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <Menu className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="p-2 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-3 rounded-lg text-neutral-600 hover:text-neutral-800 hover:bg-gray-200/50 transition-colors",
              "group cursor-pointer",
              isCollapsed && "justify-center"
            )}
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && (
              <span className="text-sm font-medium ml-3">{item.label}</span>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
}
