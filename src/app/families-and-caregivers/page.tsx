import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, AlertCircle, Heart, CheckCircle, Download, Calendar, BookOpen } from "lucide-react";
import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function FamiliesAndCaregivers() {
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
                  You&apos;re Caring for Them. We&apos;re Here to Care for You.
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Personalized brain health support, guidance, and peace of mind — 24/7.
                </p>
                <WaitlistForm triggerText="Meet Your Care Companion" />
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/daughter-parent.png"
                  alt="Daughter and elderly parent in a calm home setting"
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
                A Digital Care Companion That Supports the Whole Journey
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Whether you&apos;re juggling work, family, or caring from afar — our platform is here to help you feel less alone and more in control.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-6 rounded-lg bg-blue-50">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: 24/7 Support Illustration</span>
                  </div>
                </div>
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Personalized Support</h3>
                <p className="text-gray-700">
                  Coaching, emotional guidance, and cognitive care suggestions tailored to your loved one&apos;s needs.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Health Alerts Dashboard</span>
                  </div>
                </div>
                <AlertCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proactive Health Alerts</h3>
                <p className="text-gray-700">
                  Get notified early about cognitive, behavioral, or lifestyle changes — before they become emergencies.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Peace of Mind Illustration</span>
                  </div>
                </div>
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Peace of Mind at Every Step</h3>
                <p className="text-gray-700">
                  From medication reminders to stress check-ins, you&apos;ll always feel supported — without needing to do it all alone.
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
              {"I finally feel like I have a partner in this."}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <div className="relative h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Maria&apos;s Photo</span>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  {"Before this, I was overwhelmed every day. Now I get daily support and reminders that actually help."}
                </p>
                <p className="font-semibold text-gray-900">— Maria S., Daughter & Caregiver</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <div className="relative h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">James&apos;s Photo</span>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  {"The care companion has helped me and my mom feel connected and supported, even from different cities."}
                </p>
                <p className="font-semibold text-gray-900">— James T., Remote Caregiver</p>
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
              Simple, Supportive, and Always There for You
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started in Minutes</h3>
                <p className="text-gray-700">
                  Tell us a bit about your loved one and caregiving needs.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/care-companion-demo.png"
                    alt="Care Companion Interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Your Companion</h3>
                <p className="text-gray-700">
                  You&apos;ll receive daily coaching, brain health tips, emotional check-ins, and smart alerts.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Connected Care Experience</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Feel Confident, Stay Connected</h3>
                <p className="text-gray-700">
                  {"Whether at home or on the go, you'll always be informed and supported."}
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <WaitlistForm triggerText="Try It Today – Risk-Free" />
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
                  Because Caregiving Is Hard — And You Deserve Support, Too
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Caregivers face burnout, stress, and financial strain. My Brain Health is built to lighten your load — emotionally, logistically, and mentally.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-600">60%</span>
                    </div>
                    <p className="text-gray-700">of caregivers report high emotional stress</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-600">100%</span>
                    </div>
                    <p className="text-gray-700">Most caregiving is unpaid and unsupported</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-600">24/7</span>
                    </div>
                    <p className="text-gray-700">Cognitive conditions often evolve without warning — we help you stay ahead</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image: Caregiver Support Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Resources Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              Free Tools for Your Caregiving Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Survival Kit Cover</span>
                  </div>
                </div>
                <Download className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Caregiver Survival Kit</h3>
                <p className="text-gray-700 mb-4">Essential resources and guides</p>
                <Button variant="outline" className="w-full">Download PDF</Button>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Webinar Preview</span>
                  </div>
                </div>
                <Calendar className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Webinar</h3>
                <p className="text-gray-700 mb-4">How to Talk to Providers About Brain Health</p>
                <Button variant="outline" className="w-full">Register Now</Button>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: Mindfulness Guide Cover</span>
                  </div>
                </div>
                <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mindfulness Guide</h3>
                <p className="text-gray-700 mb-4">Journal prompts and stress management</p>
                <Button variant="outline" className="w-full">View Guide</Button>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image: FAQ Preview</span>
                  </div>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">FAQ</h3>
                <p className="text-gray-700 mb-4">How can this help with Alzheimer&apos;s or MCI?</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
            <div className="text-center mt-12">
              <WaitlistForm triggerText="Explore the Resource Library" />
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Final CTA Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Support Is Just a Click Away
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Try your personalized care companion and experience what stress-free caregiving can feel like.
            </p>
            <div className="text-center">
              <WaitlistForm triggerText="Get Started Free" />
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      <Footer />
    </main>
  );
} 