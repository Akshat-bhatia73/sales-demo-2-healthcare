import { AgentType } from "@/types/agents";

export interface Agent {
  id: string;
  name: string;
  type: AgentType;
  description: string;
  status: "active" | "inactive";
  lastActive?: string;
}

export const agents: Agent[] = [
  {
    id: "1",
    name: "Sales Analysis Agent",
    type: "sales",
    description: "AI agent specialized in analyzing sales data and providing actionable insights",
    status: "active",
    lastActive: new Date().toISOString()
  },
  {
    id: "2",
    name: "Customer Support Agent",
    type: "support",
    description: "AI agent focused on handling customer inquiries and support tickets",
    status: "active",
    lastActive: new Date().toISOString()
  },
  {
    id: "3",
    name: "Market Research Agent",
    type: "research",
    description: "AI agent dedicated to gathering and analyzing market trends and competitor data",
    status: "active",
    lastActive: new Date().toISOString()
  }
]; 
