"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ThumbsUp, ThumbsDown, Sparkles } from "lucide-react";
import { journeyInsights } from "@/lib/data/journey-insights";
import { Button } from "../ui/button";

export function InsightsPanel() {
  const [currentInsight, setCurrentInsight] = useState(0);

  const insight = journeyInsights[currentInsight];

  return (
    <Card className="card">
      <CardHeader className="border-b border-gray-200 p-4">
        <CardTitle className="flex items-center text-lg">
          <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
          AI Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 px-6 py-4">
        <div className="space-y-4">
          <h3 className="font-medium text-lg">{insight.title}</h3>
          <p className="text-neutral-700">{insight.primaryText}</p>
          <p className="text-sm text-neutral-600">{insight.explanation}</p>
          <div className=" px-4 py-2 rounded-lg border">
            <p className="text-sm font-medium text-green-600">Recommendation</p>
            <p className="mt-1 text-sm">{insight.recommendation}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">AI Confidence</span>
            <span className="text-green-600">{insight.confidence}%</span>
          </div>
          <Progress value={insight.confidence} className="h-1" />
        </div>

        <div className="flex justify-between pt-4 border-t">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="p-2 rounded-lg transition-colors"
            >
              <ThumbsUp className="w-4 h-4 text-neutral-800" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="p-2 rounded-lg transition-colors"
            >
              <ThumbsDown className="w-4 h-4 mt-1 text-neutral-800" />
            </Button>
          </div>
          <div className="flex gap-1">
            {journeyInsights.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentInsight ? "bg-green-500" : "bg-neutral-500"
                }`}
                onClick={() => setCurrentInsight(index)}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
