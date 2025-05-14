"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import Link from "next/link";

export function WaitlistForm({ triggerText }: { triggerText: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    userType: "caregiver",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just log the data and close the modal
    console.log("Waitlist submission:", formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({ email: "", userType: "caregiver" });
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setIsSubmitted(false);
    }
  };

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

  // For the "Get Started" button in navigation, show the waitlist form
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Our Waitlist</DialogTitle>
          <DialogDescription>
            {isSubmitted 
              ? "Thank you for your interest! We are onboarding on a rolling basis to ensure we properly cater our offerings to our customer's needs. Someone from our team will be in touch soon."
              : "Enter your information for early access."}
          </DialogDescription>
        </DialogHeader>
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>I am a</Label>
              <RadioGroup
                value={formData.userType}
                onValueChange={(value: "caregiver" | "care-agency") => setFormData({ ...formData, userType: value })}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="caregiver" id="caregiver" />
                  <Label htmlFor="caregiver">Caregiver</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="care-agency" id="care-agency" />
                  <Label htmlFor="care-agency">Care Agency</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              Join Waitlist
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
} 