"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LineChart, BarChart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ReportItem {
  title: string;
  time: string;
  icon: any;
  details?: string;
  path?: string;
}

interface ReportCardProps {
  category: string;
  items: ReportItem[];
}

export function ReportCard({ category, items }: ReportCardProps) {
  const router = useRouter();
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);

  const handleDiveDeeper = (item: ReportItem) => {
    if (item.path) {
      router.push(item.path);
    } else {
      setSelectedReport(item);
    }
  };

  return (
    <Card className="card transition-all duration-300">
      <CardHeader className="border-b border-b-gray-200 py-4">
        <CardTitle className="text-lg font-medium text-neutral-800">
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 pb-2 mt-2">
        {items.map((item, j) => (
          <div
            key={j}
            className="group flex p-3 rounded-lg my-2 hover:bg-gray-100
             cursor-pointer transition-all border border-gray-200"
          >
            <item.icon className="w-5 h-5 mr-3 text-green-600" />
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-800">
                {item.title}
              </div>
              <div className="text-xs text-neutral-600">{item.time}</div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="default"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition relative"
                    onClick={() => handleDiveDeeper(item)}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-white text-xs font-medium border-gray-200">
                  <span className="">Dive Deeper</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
