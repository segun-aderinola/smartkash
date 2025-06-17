import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function OlufemiAwojobiPage() {
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
                      src="/images/olufemi_awojobi.jpeg"
                      alt="Olufemi Awojobi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Olufemi Awojobi</h1>
                <p className="text-xl md:text-2xl mb-6 opacity-90">Chairman</p>
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
                  Olufemi Awojobi brings over three decades of leadership experience spanning the financial services,
                  consultancy, and education sectors. As Chairman, he provides strategic oversight and governance to
                  ensure sustainable growth, sound financial management, and impactful stakeholder engagement.
                </p>

                <p>
                  Olufemi is a Fellow of the Chartered Association of Certified Accountants (FCCA) and a Fellow of the
                  Institute of Chartered Accountants of Nigeria (FCA). Olufemi is a seasoned SAP Financial Consultant,
                  having led major system implementation projects for blue-chip clients in the UK, including Diageo,
                  Boots, and AstraZeneca, during his tenure at Infosys Ltd.
                </p>

                <p>
                  His earlier career includes nearly two decades as Senior Manager (Operations) at Action for Children,
                  where he managed national programmes with a budget exceeding £200 million and led cross-functional
                  teams across the UK.
                </p>

                <p>
                  In addition to his extensive industry experience, Olufemi is deeply committed to education and talent
                  development. He currently serves as a Lecturer in Accounting at Coventry University UK, where he
                  teaches across undergraduate levels and specialises in accounting, finance, and business strategy. He
                  holds an MBA, a BSc in Business Management (First Class Honours), and is pursuing a PhD in Leadership
                  and Policy at Coventry University.
                </p>

                <p>
                  Olufemi has also held several governance roles in the voluntary sector, including serving as Treasurer
                  and Director for organisations focused on housing, social impact, and health awareness. His broad
                  expertise in finance, leadership, and education makes him a great asset in guiding Smart Kash
                  Financials' strategic direction.
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
                      PhD in Leadership and Policy (Pursuing) - Coventry University
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-blue-100">MBA - Coventry University</li>
                    <li className="text-gray-700 pl-4 border-l-2 border-blue-100">
                      BSc Business Management (First Class Honours)
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
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">Chairman - SmartKash Financials</li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Lecturer - Coventry University UK
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      SAP Financial Consultant - Infosys Ltd
                    </li>
                    <li className="text-gray-700 pl-4 border-l-2 border-green-100">
                      Senior Manager (Operations) - Action for Children
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
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mb-2">
                      Fellow of the Chartered Association of Certified Accountants (FCCA)
                    </span>
                    <span className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800">
                      Fellow of the Institute of Chartered Accountants of Nigeria (FCA)
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