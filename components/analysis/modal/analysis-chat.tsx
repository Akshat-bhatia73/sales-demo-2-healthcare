"use client";

import { useState } from "react";
import { Command } from "@/components/ui/command";
import { Search, Sparkles, Bot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { analysisResponses } from "@/lib/data/analysis-responses";
import { motion, AnimatePresence } from "framer-motion";

interface AnalysisChatProps {
  type: "healthcare" | "nurture" | "content";
}

const suggestedQuestions = {
  healthcare: [
    "What drives the performance difference?",
    "Show me the ROI calculation",
    "Compare with industry benchmarks"
  ],
  nurture: [
    "Why is 3 days optimal?",
    "Show conversion by timing",
    "Impact on deal velocity"
  ],
  content: [
    "Top performing content types",
    "Engagement metrics breakdown",
    "Content ROI analysis"
  ]
};

interface Message {
  text: string;
  type: "question" | "answer";
  confidence?: number;
}

export function AnalysisChat({ type }: AnalysisChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  const handleQuestionClick = async (question: string) => {
    setMessages(prev => [...prev, { text: question, type: "question" }]);
    setIsThinking(true);

    // Simulate AI thinking delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = analysisResponses[type]?.[question];
    if (response) {
      setMessages(prev => [...prev, { 
        text: response.message,
        type: "answer",
        confidence: response.confidence
      }]);
    }
    setIsThinking(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Command className="rounded-lg border">
          <div className="flex items-center px-3 py-2">
            <Search className="w-4 h-4 mr-2 text-neutral-600" />
            <input
              placeholder="Ask about this analysis..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <Sparkles className="w-4 h-4 text-green-500" />
          </div>
        </Command>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {suggestedQuestions[type].map((question, i) => (
            <button
              key={i}
              className="w-full text-left p-2 text-sm text-neutral-600 hover:bg-neutral-200/50 rounded-lg"
              onClick={() => handleQuestionClick(question)}
            >
              {question}
            </button>
          ))}
        </div>
        
        <div className="mt-4 space-y-4">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-3 rounded-lg text-sm ${
                  msg.type === "question" 
                    ? "bg-neutral-200/40" 
                    : "bg-green-400/10 border border-green-500/20"
                }`}
              >
                {msg.type === "answer" && (
                  <div className="flex items-center gap-2 mb-2 text-green-600">
                    <Bot className="w-4 h-4" />
                    <span className="text-xs font-semibold">AI Analysis</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-neutral-600 text-sm"
            >
              <Bot className="w-4 h-4 animate-pulse" />
              Analyzing...
            </motion.div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}