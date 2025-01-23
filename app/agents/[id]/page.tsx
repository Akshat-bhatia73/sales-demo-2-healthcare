import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AgentDetails } from "@/components/agents/details/agent-details";
import { agents } from "@/lib/data/agents";

export const dynamicParams = false;

export function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id,
  }));
}

export default function AgentDetailsPage({ params }: { params: { id: string }}) {
  const agent = agents.find(a => a.id === params.id);

  if (!agent) {
    return (
      <div className="max-w-[1400px] mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Agent Not Found</h1>
          <p className="text-gray-600 mb-4">The requested agent could not be found.</p>
          <Link href="/agents">
            <Button className="bg-blue-500 hover:bg-blue-600">
              Return to Agents
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto p-6 space-y-6">
      <Link href="/agents">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Agents
        </Button>
      </Link>

      <AgentDetails agent={agent} />
    </div>
  );
}
