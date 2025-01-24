"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { ExecutionConfirmation } from "./execution-confirmation";
import { useState } from "react";

interface ExecutionPanelProps {
  actionType: "healthcare" | "nurture" | "content";
  onClose: () => void;
}

export function ExecutionPanel({ actionType, onClose }: ExecutionPanelProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">Ready to Execute</h3>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              4-week implementation
            </span>
            <span className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              Low Risk - Reversible
            </span>
          </div>
        </div>
        <Badge variant="outline" className="bg-green-400/10 text-green-500 border-green-500/30">
          Ready
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {["LinkedIn Campaign Manager", "Google Ads", "Salesforce"].map((tool) => (
          <div
            key={tool}
            className="flex items-center gap-2 p-3 rounded-lg border"
          >
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">{tool}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-lg card border space-y-4">
        <h4 className="font-medium">Implementation Steps</h4>
        <div className="space-y-3">
          {[
            "Preserve top performing SEM campaigns",
            "Create new LinkedIn campaign structure",
            "Update budget allocation",
            "Set up performance monitoring"
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
      </div>

      <Button
      variant={"default"}
        className="w-full h-12 text-base font-medium"
        onClick={() => setShowConfirmation(true)}
      >
        <Play className="w-4 h-4 mr-2" />
        Execute Channel Optimization
      </Button>

      <ExecutionConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={onClose}
        onModify={() => setShowConfirmation(false)}
      />
    </div>
  );
}