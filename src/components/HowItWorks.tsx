import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeartHandshake, Users, LineChart } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <HeartHandshake className="w-12 h-12 text-blue-600" />,
      title: "Reduce Caregiver Burden",
      desc: "Automate daily care plans, on-demand care resources and guidance, assistance with care coordination"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Reduce Social Isolation",
      desc: "Gain a 24/7 companion that gives you the freedom to express your needs or ask questions anonymously"
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-600" />,
      title: "Optimize Care for Older Adults",
      desc: "Personalized guidance to help you provide the best medical care for someone you care for."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Your 24/7 Digital Care Companion - Always Here to Support You
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          All you have to do is ask
        </p>

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