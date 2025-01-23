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
import { Badge } from "../ui/badge";

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
          <div className="space-y-[17px] sticky top-6">
            <AgentStatusSection />
            
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-green-500" />
                  Live Intelligence Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  {intelligenceFeed.map((item, i) => (
                    <div
                      key={i}
                      className="mb-4 p-4 rounded-lg bg-white border border-gray-200 hover:bg-white transition-all cursor-default hover:shadow-md"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-xs px-4 py-1 rounded-full capitalize border ${
                          item.priority === 'high' ? 'bg-red-100/90 text-red-500 border-red-500' : 'bg-yellow-50/70 text-yellow-600 border-yellow-500'
                        }`}>
                          {item.priority}
                        </span>
                        <span className="text-xs text-neutral-500">{item.time}</span>
                      </div>
                      <p className="text-sm mb-2 text-neutral-800">{item.message}</p>
                      <div className="flex items-center justify-between text-xs text-neutral-600">
                        <span className="font-medium">{item.source}</span>
                        <div className="flex gap-2">
                          {item.tools.map((tool, j) => (
                            <Badge key={j} className="badge hover:shadow-none">
                              {tool}
                            </Badge>
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