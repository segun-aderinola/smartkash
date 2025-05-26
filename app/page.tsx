"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Smartphone,
  CreditCard,
  Building,
  Users,
  Lock,
  Eye,
  HeadphonesIcon,
  CheckCircle,
  Star,
  Bell,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heroSlides = [
    {
      title: "Empowering Your Financial Future",
      subtitle: "Innovative solutions for the unbanked and underserved communities",
    },
    {
      title: "Driving Growth, Inspiring Change",
      subtitle: "Empowering small businesses and individuals with access to financial services",
    },
    {
      title: "Building Wealth, Creating Opportunities",
      subtitle: "Transforming lives through tailored financial support for entrepreneurs and low-income earners",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const services = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Loans",
      description:
        "Unlock the financial support you need with our diverse loan offerings. Whether for personal or business purposes, we provide quick and accessible loans to help you reach your goals.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Investments",
      description:
        "Grow your wealth confidently with our strategic investment solutions. Our expert guidance and innovative products ensure you maximize returns while minimizing risks.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Banking",
      description:
        "Access your account anytime with our online, mobile, and USSD banking platforms. Manage transactions, apply for loans, and more with ease from your phone or computer.",
    },
  ]

  const detailedServices = [
    {
      title: "Credits and Loans",
      description:
        "We offer quick and accessible loans for individuals, small businesses, and entrepreneurs. Our credit solutions provide the financial support you need to grow and succeed.",
      icon: <CreditCard className="h-12 w-12" />,
    },
    {
      title: "Venture Capital",
      description:
        "We support startups and early-stage companies who have shown great potential for substantial and rapid growth with credits and funding.",
      icon: <Building className="h-12 w-12" />,
    },
    {
      title: "Investments",
      description:
        "Grow your wealth with our structured investment products, designed for solid returns. We provide expert advice to help you make smart, informed investment decisions.",
      icon: <TrendingUp className="h-12 w-12" />,
    },
    {
      title: "Payment Services",
      description:
        "We offer efficient payroll, pension, and loan disbursement services for businesses and government entities. Our payment solutions ensure timely and secure transactions.",
      icon: <Users className="h-12 w-12" />,
    },
    {
      title: "E-Banking and Digital Platforms",
      description:
        "Access your account anytime with our online, mobile, and USSD banking platforms. Manage transactions, apply for loans, and more with ease from your phone or computer.",
      icon: <Smartphone className="h-12 w-12" />,
    },
  ]

  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Two-factor authentication",
      description: "Two-factor authentication ensures added protection by using verification steps.",
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "Biometric access",
      description: "Easily and securely log in with biometric features, and facial recognition.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
      title: "Fraud detection and alerts",
      description: "Fraud detection safeguards your money, sending instant alerts for any activity.",
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-600" />,
      title: "End-to-end encryption",
      description: "By encryption, protecting your data from unauthorized access.",
    },
    {
      icon: <Bell className="h-8 w-8 text-teal-600" />,
      title: "Transaction notifications",
      description: "Instant notifications for transaction keep you informed to manage your finances.",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-purple-600" />,
      title: "24/7 Protection support",
      description: "Our dedicated team is available around the clock to help you.",
    },
  ]

  const values = [
    "Customer-Centric Approach",
    "Security and Privacy",
    "Reliable Support",
    "Inclusive Financial Solutions",
    "Financial Expertise",
    "Transparent Operations",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-8"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            >
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                  FINANCIAL SOLUTIONS
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">{heroSlides[currentSlide].subtitle}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg border-2">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fast acceptance
                </div>
              </div>
            </div>

            <div
              className="relative"
              style={{
                transform: `translateY(${scrollY * -0.1}px)`,
              }}
            >
              <img
                src="/images/man_holding_money.png"
                alt="SmartKash Network Financial Services"
                className="h-200 w-auto"
              />
              {/* <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">S</span>
                      </div>
                      <span className="font-semibold text-gray-900">SmartKash</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm font-medium">120K+</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">Loan Approved</div>
                    <div className="text-3xl font-bold text-green-600">₦35,890.00</div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">1st Jan, 2024</span>
                      <span className="text-green-600 font-medium">3.09% ↗</span>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Free 3 Month
                <div className="text-xs opacity-90">on Pro plan</div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">ABOUT US</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About us</h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At SmartKash Network Financial Services, we are dedicated to providing practical and innovative
                  solutions to all your financial challenges. Whether you're struggling with accessing credits or
                  growing your small business, our range of personalized financial services ensures that you can achieve
                  your goals with ease.
                </p>
                <p>
                  Our expert team is committed to understanding your unique financial needs and tailoring solutions that
                  work for you. From providing quick loans to offering long-term investment strategies, we support
                  individuals, micro-entrepreneurs, and small businesses in building a secure financial future.
                </p>
                <p>
                  With SmartKash Network Financial Services by your side, you can be rest assured that your financial
                  worries are handled with care and expertise. We go beyond basic banking by offering education,
                  support, and financial literacy to help you make informed decisions.
                </p>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">120K+</h4>
                    <p className="text-sm text-gray-600">Active Users</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">₦2.5B+</h4>
                    <p className="text-sm text-gray-600">Loans Disbursed</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">99.9%</h4>
                    <p className="text-sm text-gray-600">Security Rate</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-orange-600" />
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

      {/* Detailed Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full">SECURITY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              We protect your money at every step with SmartKash
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SmartKash ensures your money is protected at every step with advanced encryption, real-time monitoring,
              and multi-factor authentication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Marquee */}
      <section className="py-16 bg-blue-600 overflow-hidden">
        <div className="flex animate-marquee space-x-16">
          {[...values, ...values, ...values].map((value, index) => (
            <div key={index} className="flex items-center space-x-4 text-white whitespace-nowrap">
              <span className="text-xl font-semibold">{value}</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
