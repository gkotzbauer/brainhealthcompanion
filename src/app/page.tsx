import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { ProductTour } from "@/components/ProductTour";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center bg-white" style={{backgroundImage: 'url(/hero-image.png)', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
        <FadeInOnScroll>
          <div className="container mx-auto px-4 py-24 flex flex-col justify-center min-h-[500px]">
            <div className="max-w-2xl bg-white/80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Compassionate Support for Every Step of the Aging Journey
              </h1>
              <p className="text-2xl text-gray-700 mb-10">
                Your 24/7 digital care companion — easing caregiver burden, enhancing quality of life
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WaitlistForm triggerText="Caregiver" />
                <WaitlistForm triggerText="Care Agency" />
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>

      {/* How It Works Section */}
      <FadeInOnScroll>
        <HowItWorks />
      </FadeInOnScroll>

      {/* Who We Help Section */}
      <FadeInOnScroll>
        <WhoWeHelp />
      </FadeInOnScroll>

      {/* Product Tour Section */}
      <FadeInOnScroll>
        <ProductTour />
      </FadeInOnScroll>

      {/* Footer */}
      <Footer />
    </main>
  );
}
