import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <FadeInOnScroll>
        <section className="relative w-full min-h-[400px] flex items-center bg-gradient-to-r from-blue-50 to-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About My Brain Health
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              The My Brain Health team is on a mission to help the older adult population and their caregivers live their best lives possible. Our dedication to this mission is founded on our personal experience caring for older adults and caregivers and the innovations we've created that has changed how care is delivered.
            </p>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Founder Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Meet Our Founder
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Greg has 20+ years of experience as a CEO, Head of Product, health services researcher, a solutions architect for large healthcare analytics projects. Greg has started four healthcare technology companies, worked for the global consulting firm Accenture, the technology services firm Optum (part of United Healthcare), within pharmaceutical distribution and development teams at Cardinal Health, and as the Managing Director of Strategic Technology Initiatives within the Center for Population Health for the globally renowned Dartmouth Research Institute.
                  </p>
                  <p className="mb-4">
                    Shortly prior to Morph, Greg designed and co-led the transformation of an ambulatory care system into a whole-person care strategy based on the "About Me Care Card" and care model he created. The model resulted in $2M+ in savings for the health system, a 1290% increase in the adoption of the About Me Care Card in the first nine months post-release, and a return-on-investment (ROI) of greater than 200%.
                  </p>
                  <p>
                    In his role, Greg created the health system's analytic model that guided continuous improvement for the care teams and evaluated the on-going ROI of the care model. Greg has also led multiple international research initiatives focused on designing and testing novel approaches to integrating the patient voice into the clinical workflow to optimize care quality and patient outcomes.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/Greg-founder.jpeg"
                  alt="Greg, Founder of My Brain Health"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Our Approach Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Approach to Care
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  My Brain Health's Cognitive Care Companion is based on an 'About Me' care conversation design created by the My Brain Health Founders. The 'About Me' care conversation design is an approach to care conversations that ensures every person receives the personalized care they need, desire, and deserve.
                </p>
                <p className="mb-6">
                  This means that our Cognitive Care Companion is designed to first understand your needs, goals, and preferences and then to shape all future conversations using the information you share. This conversation approach supports our mission to help the older adult population and their caregivers live their best lives possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Research Papers Section */}
      <FadeInOnScroll>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Research & Publications
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Below are several papers that describe the About Me care conversation design and the key insights from global research and implementation of the About Me approach.
              </p>
              <div className="space-y-6">
                <Link 
                  href="https://www.dropbox.com/scl/fi/3y4s1o6nyu4l2k31nnxcw/CARE-Suite-Interdependent-Care-Model-August-2023.pdf?rlkey=27db94reqaam58wg55umod2ml&e=1&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">The About Me Interdependent Care Model - August 2023</h3>
                </Link>

                <Link 
                  href="https://www.dropbox.com/scl/fi/i2fb86lxf2i8l9i9txmjx/Feasibility-and-Acceptability-of-the-About-Me-Care-Card-as-a-Tool-for-Engaging-Older-Adults-in-Conversations-About-Cognitive-Impairment.pdf?rlkey=wmvrpa06yivas3axjpg8ksl24&e=1&st=00sqcc10&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Feasibility and Acceptability of the "About Me" Care Card as a Tool for Engaging Older Adults in Conversations About Cognitive Impairment</h3>
                </Link>

                <Link 
                  href="https://www.dropbox.com/scl/fi/z7lepkio6ih6y6lzd42hr/About-Me-History-The-Vision-First-Five-Years-Spring-2024.pdf?rlkey=8c3oiapz390qhlx5lf3qov8ie&e=1&st=cu70oh0h&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">About Me History - The Vision & First Five Years Spring 2024</h3>
                </Link>

                <Link 
                  href="https://www.dropbox.com/scl/fi/p0hpe0p4i1ohneaxaj8f7/A-Feasibility-and-Acceptability-Analysis-of-a-Care-Conversation-Tool-for-Engaging-Aging-Adults-in-Conversations-about-Cognitive-Impairment-while-Aging-The-About-Me-Care-Card-for-Aging-Adults-55.pdf?rlkey=clzxzf6a8trrplhtyynilm36u&e=1&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">A Feasibility and Acceptability Analysis of a Care Conversation Tool for Engaging Aging Adults in Conversations about Cognitive Impairment while Aging: The About Me Care Card for Aging Adults (55+)</h3>
                </Link>

                <Link 
                  href="https://www.dropbox.com/scl/fi/jkzewgwicdw6h31sj6j2v/Sample-SDOH-Research-Supporting-the-About-Me-SDOH-Primary-Care-Card.pdf?rlkey=zp3irmlsmuws66d0i2oluwett&e=1&st=rumbg6nx&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Sample SDOH Research Supporting the About Me SDOH Primary Care Card</h3>
                </Link>

                <Link 
                  href="https://www.dropbox.com/scl/fi/hlra2c4b29v4uu2ffos42/An-environmental-scan-of-tools-that-help-individuals-living-with-mild-cognitive-impairment-or-neurocognitive-disorders-NCD-achieve-their-preferred-health-or-well-being.pdf?rlkey=fhm3l94clnmzh9vzo4qz60i62&e=1&st=9azm47ge&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">An environmental scan of tools that help individuals living with mild cognitive impairment or neurocognitive disorders (NCD) achieve their preferred health or well-being</h3>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      <Footer />
    </main>
  );
} 