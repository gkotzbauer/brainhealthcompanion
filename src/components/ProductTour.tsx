import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Play } from "lucide-react";

export function ProductTour() {
  const features = [
    "Personalized brain health check-ins",
    "Cognitive health monitoring",
    "Predictive risk alerts",
    "24/7 support access",
    "Seamless provider communication (for agencies)",
  ];

  const testimonials = [
    {
      quote: "My Brain Health has been a game-changer for our family. The daily guidance and support have made all the difference.",
      author: "Sarah M.",
      role: "Caregiver"
    },
    {
      quote: "The predictive health insights have helped us catch potential issues early. It's like having a medical professional by your side.",
      author: "Michael R.",
      role: "Son and Caregiver"
    },
    {
      quote: "The community support is invaluable. Knowing others are going through similar experiences makes the journey less lonely.",
      author: "Jennifer K.",
      role: "Daughter and Caregiver"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Your Care Companion
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/how-it-works.png"
              alt="Companion app demo"
              fill
              className="object-contain bg-white"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Key Features</h3>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">{idx + 1}</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Explore the Companion
          </Button>
        </div>
      </div>
    </section>
  );
} 