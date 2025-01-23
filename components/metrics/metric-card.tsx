"use client";

import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend: {
    value: string;
    isPositive: boolean;
  };
  description: string;
}

export function MetricCard({ title, value, trend, description }: MetricCardProps) {
  return (
    <Card className="bg-white border-gray-200 p-4 hover:scale-[1.02] transition-all duration-150">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-neutral-700">{title}</h3>
        <div className={cn(
          "flex items-center text-sm",
          trend.isPositive ? "text-green-600" : "text-red-500"
        )}>
          {trend.isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          {trend.value}
        </div>
      </div>
      <div className="text-2xl font-semibold mb-2 text-neutral-800">{value}</div>
      <div className="text-xs text-neutral-700 border-t border-gray-200 pt-2">
        {description}
      </div>
    </Card>
  );
}