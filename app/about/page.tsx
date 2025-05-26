import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Shield,
  Award,
  Handshake,
  UserCheck,
  Star,
} from "lucide-react"

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Empathy",
      description:
        "We prioritize understanding and addressing the needs of all stakeholders, working together to meet shared goals.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description:
        "Trust and transparency are at the heart of our operations, ensuring high moral standards in all dealings.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Assurance",
      description:
        "We commit to providing the best services consistently, fostering confidence in our ability to meet customer expectations.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Nobility",
      description:
        "Our actions reflect a commitment to excellence and high principles, ensuring quality service at all times.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Teamwork",
      description:
        "Collaboration and mutual respect guide our efforts, enabling diverse skills and perspectives to achieve collective success.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Respect",
      description:
        "We value giving and receiving respect, which fosters a supportive and comfortable environment for all.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Professionalism",
      description:
        "Our approach combines competence, good manners, and dependability to ensure high standards in every interaction.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  const focusAreas = [
    {
      title: "Economically Active Low-Income Earners",
      description:
        "Supporting individuals with limited income to access essential financial services and grow their economic potential.",
    },
    {
      title: "Micro-Entrepreneurs",
      description: "Empowering small business owners with the capital and resources they need to expand and succeed.",
    },
    {
      title: "Unbanked Populations",
      description: "Bringing financial services to those who have been excluded from traditional banking systems.",
    },
    {
      title: "Urban and Rural Communities",
      description: "Serving diverse communities across Nigeria, from bustling cities to remote rural areas.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                ABOUT SMARTKASH
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Financial
              <br />
              <span className="text-blue-600">Inclusion</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SmartKash Network Financial Services is a proudly Nigerian Microfinance company committed to advancing
              financial inclusion for underserved communities across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We focus on providing innovative financial solutions to individuals and small businesses who lack
                  access to mainstream financial services. Our goal is to uplift economically active low-income earners,
                  unbanked individuals, and micro-entrepreneurs, offering them the tools they need to thrive in both
                  urban and rural areas.
                </p>
                <p>
                  With a deep commitment to empowering our clients, we deliver a wide range of financial services,
                  including loans and investment products. Our mission is to foster economic growth by supporting micro
                  and small enterprises, helping them grow through access to credit, financial education, and tailored
                  services.
                </p>
                <p>
                  At SmartKash, we believe in the power of financial inclusion to transform lives and build stronger,
                  more resilient communities.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">120K+</h4>
                    <p className="text-sm text-gray-600">Lives Impacted</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">₦2.5B+</h4>
                    <p className="text-sm text-gray-600">Loans Disbursed</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">99.9%</h4>
                    <p className="text-sm text-gray-600">Security Rate</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">4.9/5</h4>
                    <p className="text-sm text-gray-600">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To aggressively grow value by promoting an effective and integrated financial system that responds to
                  the needs of their customers.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To distinguish ourselves as an admired financial service, a trusted partner company, and a provider of
                  innovative financial solutions for growing and protecting wealth.
                </p>
              </CardContent>
            </Card>

            {/* Strategy */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Providing accessible and innovative financial solutions through technology, fostering financial
                  literacy and offering personalized support to empower our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business focus is on serving economically active low-income earners, micro-entrepreneurs, and the
              unbanked populations in urban and rural areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our clients and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start your path to financial success today.</h2>
          <p className="text-xl mb-8 opacity-90">Got questions? We're here to help!</p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
