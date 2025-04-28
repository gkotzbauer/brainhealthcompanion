import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, Briefcase, FileText } from "lucide-react";

export function CommunityHub() {
  // Families resources
  const familyResources = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Caregiving Guides",
      desc: "Practical tips, emotional support, and daily strategies for family caregivers."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Webinars & Support Groups",
      desc: "Weekly sessions and peer support to help you cope and connect."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Community Forum",
      desc: "Share experiences and advice with other families on the journey."
    }
  ];

  // Agencies resources
  const agencyResources = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Clinical Best Practices",
      desc: "Whitepapers and protocols for cognitive care and patient outcomes."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Workforce Support",
      desc: "Training, stress reduction, and retention resources for your team."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Agency Webinars",
      desc: "Monthly sessions on compliance, tech, and care innovation."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Resource Center
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Families Column */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Families</h3>
              <ul className="space-y-4 mb-6">
                {familyResources.map((item, idx) => (
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2">
              Visit Family Resources
            </Button>
          </div>

          {/* Agencies Column */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Agencies</h3>
              <ul className="space-y-4 mb-6">
                {agencyResources.map((item, idx) => (
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
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 w-full mt-2 hover:bg-blue-50">
              Visit Agency Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 