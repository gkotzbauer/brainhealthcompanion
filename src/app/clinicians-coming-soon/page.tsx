import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function Clinicians() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <FadeInOnScroll>
        <section className="relative w-full min-h-[500px] flex items-center bg-gradient-to-r from-blue-50 to-white">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Tools for Healthcare Professionals
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Enhance your practice with our specialized tools designed to support clinical decision-making and patient care coordination.
              </p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Clinical Tools</h2>
              <p className="text-gray-700 mb-4">
                Our platform provides clinicians with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Comprehensive assessment tools</li>
                <li>Evidence-based care protocols</li>
                <li>Progress tracking and monitoring</li>
                <li>Secure communication channels</li>
                <li>Integration with EHR systems</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Care Coordination</h2>
              <p className="text-gray-700 mb-4">
                Streamline your care coordination with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Multi-disciplinary team collaboration</li>
                <li>Care plan development tools</li>
                <li>Patient education resources</li>
                <li>Family communication tools</li>
                <li>Outcome measurement and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 