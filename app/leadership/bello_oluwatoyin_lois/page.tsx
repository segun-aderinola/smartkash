import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, Mail } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function BelloOluwatoyinLoisPage() {
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
                      src="/images/Bello_Oluwatoyin_Lois.jpeg"
                      alt="Bello Oluwatoyin Lois"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Bello Oluwatoyin Lois</h1>
                <p className="text-xl md:text-2xl mb-6 opacity-90">Executive Director</p>
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
                  Bello Oluwatoyin Lois is a dedicated professional with a Bachelor of Science degree in Geography
                  Science and a Chartered Certificate in Management. Her academic background provides her with a solid
                  foundation in spatial analysis and environmental management, while her management certification has
                  honed her leadership and strategic planning skills.
                </p>

                <p>
                  She currently serves as Financial Controller at SmartKash Financials, where she oversees financial
                  operations, budgeting, and reporting to ensure the company's financial health and compliance. Her
                  diverse background spans various capacities including administration, production management, customer
                  service, and marketing.
                </p>

                <p>
                  With extensive experience at Yagocom Nigeria Limited in multiple roles - from Administrator to
                  Production/Purchasing Manager, Customer Service Manager, and Marketing Executive - she brings a
                  comprehensive understanding of business operations and client relationship management.
                </p>

                <p>
                  Her passion for driving sustainable growth and contributing to innovative solutions within the
                  financial industry makes her an invaluable asset to the SmartKash leadership team.
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
                    <li className="text-gray-700 pl-4 border-l-2 border-blue-100">BSc Geography Science</li>
                    <li className="text-gray-700 pl-4 border-l-2 border-blue-100">
                      Chartered Certificate in Management
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
                      Executive Director - SmartKash Financials
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Financial Controller - Finance Company
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Multiple Leadership Roles - Yagocom Nigeria Limited
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
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800">
                      Chartered Management Certificate
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
