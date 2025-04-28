import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserPlus, MessageCircle, ActivitySquare } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12 text-blue-600" />,
      title: "Onboard Quickly",
      desc: "Caregivers and agencies register loved ones or clients."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-600" />,
      title: "Daily Companion Engagement",
      desc: "Personalized coaching, reminders, and emotional support begin immediately."
    },
    {
      icon: <ActivitySquare className="w-12 h-12 text-blue-600" />,
      title: "Real-Time Insights and Action",
      desc: "Predictive health alerts guide decisions before issues escalate."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Simple, Seamless Support Tailored to You
        </h2>

        {/* Flow Diagram / Visual */}
        {/* (Removed image as requested) */}

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
} 