"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bot, Clock } from "lucide-react";

interface AgentStatusCardProps {
  name: string;
  status: string;
  progress: number;
  task: string;
  startTime: string;
  tools: string[];
}

export function AgentStatusCard({
  name,
  status,
  progress,
  task,
  startTime,
  tools,
}: AgentStatusCardProps) {
  return (
    <Card className="bg-white border-gray-200 mb-4">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <Bot className="w-5 h-5 mr-2 text-green-500" />
            <h3 className="font-medium text-sm">{name}</h3>
          </div>
          <Badge
            variant="outline"
            className="bg-green-100/10 cursor-default text-green-500 border-green-500"
          >
            {status}
          </Badge>
        </div>

        <Progress value={progress} className="h-1 mb-3" />

        <p className="text-sm text-neutral-700 mb-3">{task}</p>

        <div className="flex items-center text-xs text-neutral-600 mb-3">
          <Clock className="w-4 h-4 mr-1" />
          <span className="mt-0.5">{startTime}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge
              key={tool}
              variant="secondary"
              className="badge"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
