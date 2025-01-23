"use client";

import { useRouter } from "next/navigation";
import { SearchCommand } from "@/components/search-command";
import { JourneyHeader } from "@/components/journey/journey-header";
import { MetricsGrid } from "@/components/journey/metrics-grid";
import { JourneyFlow } from "@/components/journey/journey-flow";
import { InsightsPanel } from "@/components/journey/insights-panel";
import { StageAnalysis } from "@/components/journey/stage-analysis";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HealthcareJourneyPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1600px] mx-auto space-y-6 pt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-start gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  size={"icon"}
                  className="bg-gray-200"
                  onClick={() => router.push("/")}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white border-gray-200 text-xs">
                <span>Back to Mission Control</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <JourneyHeader />
        </div>
      </div>
      <div className="mb-8">
        <SearchCommand />
      </div>
      <MetricsGrid />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <JourneyFlow />
          <StageAnalysis />
        </div>
        <div className="col-span-4">
          <InsightsPanel />
        </div>
      </div>
    </div>
  );
}
