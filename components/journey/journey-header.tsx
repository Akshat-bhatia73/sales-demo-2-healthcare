"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, Download, Users } from "lucide-react";

export function JourneyHeader() {
  const router = useRouter();

  return (
    <div className="space-y-4 w-full">
      <div>
        <h1 className="text-3xl font-bold">
          Enterprise Healthcare Journey Analysis
        </h1>
        <p className="text-neutral-500 mt-2">
          Based on 500+ customer journeys in healthcare vertical
        </p>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Last 90 Days
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            variant="default"
            onClick={() => router.push("/accounts/healthcare")}
          >
            <Users className="w-4 h-4 mr-2" />
            Inspect Accounts
          </Button>
        </div>
      </div>
    </div>
  );
}
