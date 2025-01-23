"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  isPositive?: boolean;
  detail?: string;
  icon: React.ElementType;
}

export function MetricCard({ title, value, trend, isPositive, detail, icon: Icon }: MetricCardProps) {
  return (
    <Card className="card p-4 transition-all duration-150">
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm font-medium text-neutral-600">{title}</span>
        <Icon className="w-4 h-4 text-neutral-600" />
      </div>
      <div className="text-2xl font-semibold mb-1">{value}</div>
      {trend && (
        <div className={cn(
          "text-sm",
          isPositive ? "text-green-500" : "text-red-500"
        )}>
          {trend}
        </div>
      )}
      {detail && (
        <div className="text-sm text-neutral-600">{detail}</div>
      )}
    </Card>
  );
}