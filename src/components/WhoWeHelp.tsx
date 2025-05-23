import { FadeInOnScroll } from "./FadeInOnScroll";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";
import Image from "next/image";
import { Heart, Brain, Clock, AlertCircle, Users, TrendingUp, Handshake, BarChart3 } from "lucide-react";

export function WhoWeHelp() {
  // Families value props
  const familyProps = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Personalized Brain Health Coaching",
      desc: "Daily tips, emotional check-ins, and cognitive care guidance tailored to your loved one."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-blue-600" />,
      title: "Proactive Health Monitoring",
      desc: "Spot changes early with predictive insights — helping you intervene before crises happen."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "The Companion You Need, When You Need It",
      desc: "Get access to 24/7 emotional support, your personalized care journal, and brain health education."
    }
  ];

  // Agencies value props
  const agencyProps = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Enhance Client Outcomes",
      desc: "Our personalized care insights optimize workforce care decisions, patient satisfaction, and minimize care costs."
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: "Strengthen Caregiver Support",
      desc: "Equip your staff and families with real-time cognitive care guidance that optimizes care and reduces stress."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Scale High-Quality Care with Less",
      desc: "Our companion will enable each care team member to support more patients at one time with the same or less effort."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Who We Help
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Families Column */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start">
            <div>
              <div className="relative h-72 w-full mb-6 rounded-lg overflow-hidden">
                <Image src="/sarah-mother.png" alt="Companion app with family" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Support for Families Navigating Cognitive Decline</h3>
              <ul className="space-y-4 mb-6">
                {familyProps.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {item.icon}
                    <div>
                      <div className="font-semibold text-gray-800">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                      {idx === 0 && <div className="h-6"></div>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <WaitlistForm triggerText="Meet Your Care Companion" />
          </div>

          {/* Agencies Column */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start">
            <div>
              <div className="relative h-72 w-full mb-6 rounded-lg overflow-hidden">
                <Image src="/agency-care.png" alt="Care agency team" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Elevate Your Agency Workforce & Operations</h3>
              <ul className="space-y-4 mb-6">
                {agencyProps.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {item.icon}
                    <div>
                      <div className="font-semibold text-gray-800">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <WaitlistForm triggerText="Schedule a Demo" />
          </div>
        </div>
      </div>
    </section>
  );
} 