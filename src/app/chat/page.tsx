import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Blue Header */}
      <div className="bg-blue-600 border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-semibold text-white text-center">
            My Brain Health Companion
          </h1>
        </div>
      </div>
      
      {/* Chat Container */}
      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col max-w-4xl">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {/* Example messages - these will be dynamic later */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">AI</span>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="text-gray-800">Hello! I'm your Brain Health Companion. How can I help you today?</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t pt-4">
          <form className="flex gap-2">
            <Input
              type="text"
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
} 