import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, Mail } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function YomiAlalePage() {
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
                    <img
                      src="/images/Yomi_Alale.JPG"
                      alt="Yomi Alale" 
                      className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Yomi Alale</h1>
                <p className="text-xl md:text-2xl mb-6 opacity-90">Managing Director & CEO</p>
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
                  Yomi Alale is a seasoned business leader with extensive experience across multiple sectors, including
                  banking, telecommunications, and the food industry. He holds a Higher National Diploma in Business
                  Administration and Management from Federal polytechnic Offa, a Postgraduate Diploma from Lagos State
                  University, and an MBA with a specialization in Cost Management from Ladoke Akintola University of
                  Technology, Ogbomoso. He is also a certified member of the Institute of Cost Management Nigeria
                  (ICMN).
                </p>

                <p>
                  Yomi began his professional journey in the banking industry, serving as a Sales Manager at PSL, a
                  subsidiary of Prudent Bank. He subsequently joined Prudent Bank (now Polaris Bank), where he gained
                  valuable cross-departmental experience. He notably headed the Foreign Operations Reconciliation Unit
                  before resigning from Skye Bank in 2010 as a Senior Officer.
                </p>

                <p>
                  Beyond banking, Yomi is an accomplished entrepreneur. He is the founder of Yagocom Nigeria Limited, a
                  strategic partner with Airtel Nigeria in the telecommunications sector. He also serves as the Chairman
                  of Yago Food Company, demonstrating his versatility and entrepreneurial spirit.
                </p>

                <p>
                  As Managing Director and Chief Executive Officer of Smart Kash Financials, he leverages his diverse
                  background to drive innovation, growth, and sustainable success for the organization.
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
                    <li className="text-gray-700 pl-4 border-l-2 border-blue-100">MBA in Cost Management - LAUTECH</li>
                    <li className="text-gray-700 pl-4 border-l-2 border-blue-100">PGD - Lagos State University</li>
                    <li className="text-gray-700 pl-4 border-l-2 border-blue-100">
                      HND Business Admin - Federal polytechnic Offa
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
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">MD/CEO - SmartKash Financials</li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">Chairman - Yago Food Company</li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Founder - Yagocom Nigeria Limited
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">Senior Officer - Skye Bank</li>
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
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800">
                      Institute of Cost Management Nigeria (ICMN)
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
