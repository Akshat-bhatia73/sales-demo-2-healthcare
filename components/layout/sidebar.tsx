"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import {
  ChevronLeft,
  FileText,
  Bot,
  Zap,
  Settings,
  Menu
} from "lucide-react";

const menuItems = [
  { icon: FileText, label: "Reports", href: "#reports" },
  { icon: Bot, label: "Agents", href: "#agents" },
  { icon: Zap, label: "Automations", href: "#automations" },
  { icon: Settings, label: "Setup", href: "#setup" }
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen side-panel transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-800/50">
        {!isCollapsed ? (
          <Logo />
        ) : (
          <div className="w-8 h-8 rounded-full bg-green-500" />
        )}
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="p-2 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-colors",
              "group cursor-pointer"
            )}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {!isCollapsed && (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
}