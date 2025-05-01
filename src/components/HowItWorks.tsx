import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeartHandshake, Users, LineChart } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <HeartHandshake className="w-12 h-12 text-blue-600" />,
      title: "Reduced Caregiver Burden",
      desc: "Automate daily care plans, on-demand resources and guidance, get assistance with care coordination"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Reduce Social Isolation",
      desc: "Gain a 24/7 companion that gives you the freedom to express your needs or ask questions anonymously"
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-600" />,
      title: "Optimize Care",
      desc: "Predictive data can inform more targeted conversations and action plans with medical professionals."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          A 24/7 digital care companion - care support for the caregiver
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