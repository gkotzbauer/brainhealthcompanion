"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WaitlistForm({ triggerText }: { triggerText: string }) {
  // If it's a navigation button, return a Link component
  if (triggerText === "Caregiver") {
    return (
      <Link href="/families-and-caregivers">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold">
          {triggerText}
        </Button>
      </Link>
    );
  }

  if (triggerText === "Care Agency") {
    return (
      <Link href="/care-agencies">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold">
          {triggerText}
        </Button>
      </Link>
    );
  }

  // For all other buttons, link to the web chat page
  return (
    <Link href="/chat">
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold">
        {triggerText}
      </Button>
    </Link>
  );
} 