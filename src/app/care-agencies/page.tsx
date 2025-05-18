import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, AlertCircle, Heart, CheckCircle, Download, Calendar, BookOpen } from "lucide-react";
import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function CareAgencies() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <FadeInOnScroll>
        <section className="relative w-full min-h-[600px] flex items-center bg-gradient-to-r from-blue-50 to-white">
          <div className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Elevate Your Care Agency&apos;s Impact
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Transform your care delivery with AI-powered insights and support tools designed for modern care agencies.
                </p>
                <WaitlistForm triggerText="Schedule a Demo" />
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/care-agency.jpeg"
                  alt="Care team using digital tools in a professional setting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* What We Offer Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                A Comprehensive Platform for Modern Care Agencies
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From staff training to scaling your customer touchpoints, we help you deliver exceptional care and optimize your operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-6 rounded-lg bg-blue-50">
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Training & Support</h3>
                <p className="text-gray-700">
                  Make sure your team is always up to speed on the latest in brain health care techniques and best practices.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50">
                <AlertCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Monitoring</h3>
                <p className="text-gray-700">
                  Track client progress and receive early alerts about potential health changes.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50">
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Analytics</h3>
                <p className="text-gray-700">
                  Understand and improve your agency&apos;s impact with timely and targeted insights and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Testimonials Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              &quot;This platform has transformed how we deliver care.&quot;
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <div className="relative h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Sarah&apos;s Photo</span>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  &quot;Our staff retention has improved significantly since implementing these tools. The training resources are invaluable.&quot;
                </p>
                <p className="font-semibold text-gray-900">— Sarah M., Care Agency Director</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <div className="relative h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">David&apos;s Photo</span>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  &quot;The analytics have helped us demonstrate our value to families and improve our care delivery.&quot;
                </p>
                <p className="font-semibold text-gray-900">— David R., Agency Owner</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* How It Works Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              Support Your Team, Enhance Your Care
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Quick Setup Process</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Setup</h3>
                <p className="text-gray-700">
                  Get your team onboarded and trained in hours or days, not months.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Care Management Interface</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A Happy Workforce & Happy Clients</h3>
                <p className="text-gray-700">
                  Give your care workforce access to the timely client insights and up-to-date care guidance they need to simplify their work life and deliver care that creates happy clients.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Growth Metrics Dashboard</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Grow Your Impact</h3>
                <p className="text-gray-700">
                  Get the data-driven insights you need to optimize and scale your operations and impact.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <WaitlistForm triggerText="Request a Demo" />
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Why It Matters Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Because Quality Care Requires the Right Tools
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  In today&apos;s care landscape, agencies need more than just good intentions. They need technology that empowers their team and improves client outcomes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-600">40%</span>
                    </div>
                    <p className="text-gray-700">reduction in staff turnover</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-600">85%</span>
                    </div>
                    <p className="text-gray-700">improvement in care documentation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-600">2x</span>
                    </div>
                    <p className="text-gray-700">faster client onboarding</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/agency-care.png"
                  alt="Agency Success Metrics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Resources Section - Temporarily Hidden
      <FadeInOnScroll>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              Resources for Care Agencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Case Study Cover</span>
                  </div>
                </div>
                <Download className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Success Stories</h3>
                <p className="text-gray-700 mb-4">Real agencies, real results</p>
                <Button variant="outline" className="w-full">Download PDF</Button>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Webinar Preview</span>
                  </div>
                </div>
                <Calendar className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Demo</h3>
                <p className="text-gray-700 mb-4">See the platform in action</p>
                <Button variant="outline" className="w-full">Register Now</Button>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Implementation Guide</span>
                  </div>
                </div>
                <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation Guide</h3>
                <p className="text-gray-700 mb-4">Step-by-step setup process</p>
                <Button variant="outline" className="w-full">View Guide</Button>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: ROI Calculator</span>
                  </div>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">ROI Calculator</h3>
                <p className="text-gray-700 mb-4">Calculate your potential savings</p>
                <Button variant="outline" className="w-full">Try Calculator</Button>
              </div>
            </div>
            <div className="text-center mt-12">
              <WaitlistForm triggerText="Explore All Resources" />
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      */}

      {/* Final CTA Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Care Agency?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the growing number of agencies using our platform to deliver exceptional care and grow their business.
            </p>
            <div className="text-center">
              <WaitlistForm triggerText="Schedule a Demo" />
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      <Footer />
    </main>
  );
} 