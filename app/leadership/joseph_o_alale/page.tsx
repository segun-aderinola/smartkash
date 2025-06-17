import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function JosephOAlalePage() {
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
                    <img src="/images/joseph_alale.JPG" alt="Joseph O Alale" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Joseph O Alale</h1>
                <p className="text-xl md:text-2xl mb-6 opacity-90">Advisory Board Member</p>
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
                  Mr. Joseph O. Alale graduated with Master's degree from the University of Lagos. He is a fellow of the
                  Institute of Chartered Accountants of Nigeria (FCA) and other professional bodies namely the Chartered
                  institute of Stockbrokers (ACS) Chartered institute of Taxation of Nigeria (ACIT), New York society of
                  Certified Public Accountants (NYSSCPA) and the Certified Information Systems Auditor (CISA).
                </p>

                <p>
                  He has a wide range of professional experience as an audit Supervisor with Akintola williams Deloitte,
                  one of the big five firms in the world. Also held various positions in the internal audit and
                  Compliance department at Intercontinental Bank as well Access Bank.
                </p>

                <p>
                  He is an enrolled agent (EA) with the United Stated Inland Revenue service (IRS) and work as a tax
                  expert with INTUIT (Leading company in accounting and tax software) in Maryland, United States.
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
                      Master's Degree - University of Lagos
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
                      Tax Expert - INTUIT, Maryland, USA
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Internal Audit & Compliance - Access Bank
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Internal Audit & Compliance - Intercontinental Bank
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Audit Supervisor - Akintola Williams Deloitte
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
                      Fellow - ICAN (FCA)
                    </span>
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mr-2 mb-2">
                      Chartered Institute of Stockbrokers (ACS)
                    </span>
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mr-2 mb-2">
                      CITN (ACIT)
                    </span>
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mr-2 mb-2">
                      NYSSCPA
                    </span>
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mr-2 mb-2">
                      CISA
                    </span>
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mr-2 mb-2">
                      Enrolled Agent (EA) - US IRS
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
