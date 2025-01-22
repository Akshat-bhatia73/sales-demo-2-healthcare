"use client";

import { SearchCommand } from "@/components/search-command";
import { QuickFilters } from "@/components/filters/quick-filters";
import { MetricsBar } from "@/components/metrics/metrics-bar";
import { ReportCard } from "@/components/report-card";
import { ActionCard } from "@/components/action-card";
import { AgentStatusSection } from "@/components/agents/agent-status-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity } from "lucide-react";

import { featuredReports } from "@/lib/data/featured-reports";
import { actionRecommendations } from "@/lib/data/action-recommendations";
import { intelligenceFeed } from "@/lib/data/intelligence-feed";

export function MainContent() {
  return (
    <div className="space-y-8">
      <header className="space-y-6">
        <h1 className="text-3xl font-bold">Mission Control</h1>
        <SearchCommand />
        <QuickFilters />
        <MetricsBar />
      </header>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <section className="grid grid-cols-2 gap-6">
            {featuredReports.map((category, i) => (
              <ReportCard key={i} {...category} />
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">High-Impact Actions</h2>
            <div className="grid gap-4">
              {actionRecommendations.map((action, i) => (
                <ActionCard key={i} action={action} />
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-4">
          <div className="space-y-6 sticky top-6">
            <AgentStatusSection />
            
            <Card className="bg-slate-900/95 border-slate-800/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-400" />
                  Live Intelligence Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  {intelligenceFeed.map((item, i) => (
                    <div
                      key={i}
                      className="mb-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {item.priority}
                        </span>
                        <span className="text-xs text-slate-400">{item.time}</span>
                      </div>
                      <p className="text-sm mb-2">{item.message}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{item.source}</span>
                        <div className="flex gap-2">
                          {item.tools.map((tool, j) => (
                            <span key={j} className="bg-slate-800 px-2 py-1 rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}