"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, AlertTriangle, ChevronDown, ChevronUp, Download, Share2, Loader2, Clock2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TimelineStep {
  week: number;
  title: string;
  status: "pending" | "ready";
  estimate: string;
}

const timeline: TimelineStep[] = [
  {
    week: 1,
    title: "Identify top SEM campaigns",
    status: "ready",
    estimate: "2-3 days"
  },
  {
    week: 2,
    title: "Set up LinkedIn campaigns",
    status: "pending",
    estimate: "3-4 days"
  },
  {
    week: 3,
    title: "Begin budget transition",
    status: "pending",
    estimate: "5-7 days"
  },
  {
    week: 4,
    title: "Monitor & optimize",
    status: "pending",
    estimate: "Ongoing"
  }
];

export function ActionExecution() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleExecute = () => {
    setIsExecuting(true);
    // Add execution logic here
    setTimeout(() => setIsExecuting(false), 2000);
  };

  return (
    <Card className="card mt-6">
      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Shift $45,000 to LinkedIn Campaigns
            </h3>
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Next 30 days
              </span>
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                Low Risk - Reversible
              </span>
            </div>
          </div>
          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
            Ready to Execute
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-lg font-medium">Expected Impact</div>
            <div className="text-sm text-neutral-500">
              $45,000 monthly savings • 25% higher SQL rate
            </div>
          </div>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="icon" onClick={() => setShowTimeline(!showTimeline)}>
                    {showTimeline ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <Clock2 className="w-4 h-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Timeline     
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Export   
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
            </Button>
                </TooltipTrigger>
                <TooltipContent>
              Share
                  
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                <Button variant="outline" size="icon" onClick={handleExecute} disabled={isExecuting}>
                  {isExecuting ? <Loader2 className="w-4 h-4 animate-spin"/> : <Play className="w-4 h-4" />}

            </Button>
                </TooltipTrigger>
                <TooltipContent>
              Execute
                  
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <AnimatePresence>
          {showTimeline && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                {timeline.map((step) => (
                  <div key={step.week} className="space-y-2">
                    <div className="text-sm text-neutral-600">Week {step.week}</div>
                    <div className="p-4 rounded-lg card border space-y-2">
                      <div className="font-medium">{step.title}</div>
                      <div className="flex items-center justify-between text-sm">
                        <Badge 
                          variant="outline" 
                          className={step.status === "ready" 
                            ? "bg-green-500/10 text-green-500 border-green-500/30 capitalize"
                            : "bg-neutral-500/10 text-neutral-600 border-neutral-500/30 capitalize"
                          }
                        >
                          {step.status}
                        </Badge>
                        <span className="text-neutral-600">{step.estimate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}