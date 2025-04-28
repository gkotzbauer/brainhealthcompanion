import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { ProductTour } from "@/components/ProductTour";
import { CommunityHub } from "@/components/CommunityHub";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <FadeInOnScroll>
        <section className="relative w-full min-h-[600px] flex items-center bg-white" style={{backgroundImage: 'url(/hero-image.png)', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
          <div className="container mx-auto px-4 py-24 flex flex-col justify-center min-h-[500px]">
            <div className="max-w-2xl bg-white/80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Compassionate Support for Every Step of the Aging Journey
              </h1>
              <p className="text-2xl text-gray-700 mb-10">
                Personalized care companions for families — and enhanced support tools for care agencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  Caregiver
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Care Agency
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

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

      {/* Community Hub Section */}
      <FadeInOnScroll>
        <CommunityHub />
      </FadeInOnScroll>

      {/* Footer */}
      <Footer />
    </main>
  );
}
