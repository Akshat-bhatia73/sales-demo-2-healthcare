"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

const filters = [
  "Enterprise ($1B+)",
  "Technical Decision Makers",
  "High Engagement",
  "Active Pipeline",
  "CISO Engaged",
];

export function AccountsFilters() {
  return (
    <div className="flex items-center gap-2">
      {filters.map((filter) => (
        <Badge
          key={filter}
          className="badge px-4 py-1"
        >
          {filter}
        </Badge>
      ))}
      <Button variant="outline" size="sm">
        <Plus className="h-4 w-4 mr-1" />
        Add Filter
      </Button>
    </div>
  );
}
