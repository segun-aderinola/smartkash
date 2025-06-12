import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, Briefcase, Award, Mail } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function OlaniyiOsunPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-8">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-1 lg:order-1">
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                    <img src="/images/olaniyi_osun.jpeg" alt="Olaniyi Osun" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Olaniyi Osun</h1>
                <p className="text-xl md:text-2xl mb-6 opacity-90">Non Executive Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
                <p>
                  Olaniyi Osun is a seasoned security professional with an extensive background in international and
                  domestic security operations. A recognized member of an international security body, Mr. Osun has
                  consistently demonstrated a commitment to excellence and innovation in the security industry.
                </p>

                <p>
                  With a career spanning several decades, he has undergone rigorous training at prestigious security
                  institutions both in Nigeria and abroad. His broad expertise covers areas such as corporate security
                  management, counter-terrorism, surveillance, risk assessment, and crisis response.
                </p>

                <p>
                  Mr. Osun is the visionary founder of First Liberty Security, a leading UK-based security firm that
                  provides top-tier security solutions tailored to the needs of individuals, corporations, and
                  government institutions. Under his leadership, First Liberty has built a strong reputation for
                  professionalism, discretion, and operational efficiency.
                </p>

                <p>
                  In addition to his work in the UK, he serves as the Chairman of Jacka Security, a prominent Nigerian
                  security company known for its innovative approach to safeguarding assets and people in a challenging
                  security landscape. Through Jacka Security, Mr. Osun continues to contribute to national safety,
                  workforce development, and strategic security planning in Nigeria.
                </p>

                <p>
                  His dedication to professional development and knowledge sharing has made him a respected figure in
                  global security circles. Mr. Osun remains passionate about shaping the future of security services
                  through continuous learning, collaboration, and ethical leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Education */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Education</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-gray-700 pl-4 border-l-2 border-blue-100">
                      Training at Prestigious Security Institutions (Nigeria & International)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Non Executive Director - SmartKash Financials
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Founder & CEO - First Liberty Security (UK)
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Chairman - Jacka Security (Nigeria)
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      International Security Operations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mr-2 mb-2">
                      Member - International Security Body
                    </span>
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mr-2 mb-2">
                      Professional Security Certifications
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
