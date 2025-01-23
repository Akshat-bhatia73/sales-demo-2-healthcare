"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Filter, Download, ChevronLeft } from "lucide-react";
import { AccountsTable } from "@/components/accounts/accounts-table";
import { AccountsFilters } from "@/components/accounts/accounts-filters";
import { AccountsMetrics } from "@/components/accounts/accounts-metrics";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HealthcareAccountsPage() {
  const router = useRouter();

  return (
    <div className="h-screen max-w-[1600px] mx-auto overflow-hidden bg-gradient-to-b flex">
      <Sidebar />
      <div className="px-6 h-screen overflow-auto w-full transition-all duration-300 text-neutral-800">
        <div className="max-w-[1400px] mx-auto pt-6 space-y-6">
          <div className="flex items-start justify-between">
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
              <div>
                <h1 className="text-3xl font-bold">
                  Enterprise Healthcare Accounts
                </h1>
                <p className="text-neutral-600 mt-2">
                  Analyzing 500+ accounts in healthcare vertical
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <AccountsMetrics />
          <AccountsFilters />
          <AccountsTable />
        </div>
      </div>
    </div>
  );
}
