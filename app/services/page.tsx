"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CreditCard,
  TrendingUp,
  Building,
  Users,
  Smartphone,
  Zap,
  User,
  Briefcase,
  DollarSign,
  Target,
  Shield,
  Globe,
  Settings,
} from "lucide-react"

export default function ServicesPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el))
    }
  }, [])

  const mainServices = [
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Credits and Loans",
      description:
        "We offer a variety of credit solutions designed to meet the needs of individuals, small businesses, and micro-entrepreneurs. Whether you're looking for personal loans, SME working capital, or micro-enterprise loans, we provide accessible and flexible options that cater to different financial circumstances.",
      color: "bg-blue-50 group-hover:bg-blue-600",
      iconColor: "text-blue-600 group-hover:text-white",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Venture Capitals",
      description:
        "Our Venture Capital service provides funding and strategic support to high-potential startups and growing businesses. We invest in innovative ideas and emerging companies, offering not only capital but also the expertise and guidance needed to scale, succeed, and make a lasting impact in the market.",
      color: "bg-purple-50 group-hover:bg-purple-600",
      iconColor: "text-purple-600 group-hover:text-white",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Investments",
      description:
        "For clients looking to grow their wealth, SmartKash offers structured investment solutions tailored to your risk appetite and financial goals. Our investment products range from fixed-term deposits to more strategic, long-term financial instruments that provide solid returns.",
      color: "bg-green-50 group-hover:bg-green-600",
      iconColor: "text-green-600 group-hover:text-white",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Payment Services",
      description:
        "SmartKash simplifies the management of payments for individuals and businesses. We offer comprehensive payroll services, salary disbursements, and pension management for government entities, corporations, and small enterprises.",
      color: "bg-orange-50 group-hover:bg-orange-600",
      iconColor: "text-orange-600 group-hover:text-white",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "E-Banking and Digital Platforms",
      description:
        "Our e-banking services provide clients with easy and secure access to their accounts anytime, anywhere. SmartKash offers online banking platforms, mobile banking, USSD services, and card solutions, including Visa and MasterCard.",
      color: "bg-teal-50 group-hover:bg-teal-600",
      iconColor: "text-teal-600 group-hover:text-white",
    },
  ]

  const products = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Susu Quick Loan",
      subtitle: "Quick and Flexible Loans for Everyday Needs",
      description:
        "A fast and simple loan solution designed to meet the short-term financial needs of individuals and small businesses.",
      color: "border-l-blue-500",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Micro-Enterprise Loan",
      subtitle: "Empowering Small Businesses for Growth",
      description:
        "Tailored specifically for micro-entrepreneurs, this loan helps small businesses expand their operations and improve their financial standing.",
      color: "border-l-purple-500",
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Personal Loan",
      subtitle: "Finance Your Personal Goals Easily",
      description:
        "A personal loan option designed to cover various individual financial needs with flexible repayment terms.",
      color: "border-l-green-500",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "SME Working Capital Loan",
      subtitle: "Fuel Your Business with Adequate Capital",
      description:
        "This product supports small and medium enterprises by providing the working capital they need to grow their businesses.",
      color: "border-l-orange-500",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Overdraft Facility",
      subtitle: "Manage Cash Flow Gaps Seamlessly",
      description:
        "A flexible credit option that allows businesses and individuals to cover temporary cash flow shortages, ensuring smooth operations.",
      color: "border-l-red-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Venture Capitals",
      subtitle: "Fueling Innovation, Driving Business Growth",
      description:
        "Funding and strategic support to high-potential startups and growing businesses to make a lasting impact in the market.",
      color: "border-l-indigo-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fixed Term Investments",
      subtitle: "Grow Your Wealth with Competitive Returns",
      description:
        "A secure investment option that offers attractive interest rates, providing a safe way to grow your money over a fixed period.",
      color: "border-l-teal-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Electronic Products",
      subtitle: "Banking Made Easy with Digital Solutions",
      description:
        "Digital banking solutions like mobile banking, USSD services, and card products offering convenient access to banking services.",
      color: "border-l-pink-500",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Structured Finance",
      subtitle: "Custom Financial Solutions for Your Business",
      description:
        "We offer tailored financial packages for businesses to meet your unique business needs (including payroll services, cash collection).",
      color: "border-l-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">OUR SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Financial
              <br />
              <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At SmartKash Network Financial Services, we are committed to delivering a wide range of financial products
              and services that meet the diverse needs of individuals, small businesses, and underserved communities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Your Financial Journey</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our offerings are designed to provide easy access to credit, venture capitals, and investment
                  opportunities, ensuring that everyone, from micro-entrepreneurs to low-income earners, has the
                  financial tools needed to grow and succeed.
                </p>
                <p>
                  Our approach is centered around financial inclusion, providing innovative solutions that empower our
                  clients to achieve their goals. We offer flexible loan products and structured finance solutions that
                  help drive sustainable business growth and personal financial stability.
                </p>
              </div>
            </div>
            <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">120K+</h4>
                  <p className="text-sm text-gray-600">Satisfied Clients</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">₦2.5B+</h4>
                  <p className="text-sm text-gray-600">Funds Disbursed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to meet your unique needs and help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-animate opacity-0 translate-y-8`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}
                  >
                    <div className={`${service.iconColor} transition-colors duration-300`}>{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-300">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-white group-hover:text-gray-900 group-hover:border-white transition-all duration-300"
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

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored financial products designed to support your specific needs and financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`border-0 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 scroll-animate opacity-0 translate-y-8 border-l-4 ${product.color}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-gray-600">{product.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{product.title}</h3>
                      <p className="text-sm font-medium text-blue-600 mb-2">{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SmartKash?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're committed to providing exceptional service and innovative solutions that make a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Approval",
                description: "Fast processing times to get you the financial support you need when it matters most.",
                icon: <Zap className="h-8 w-8" />,
              },
              {
                title: "Flexible Terms",
                description: "Customizable repayment options that fit your unique financial circumstances.",
                icon: <Settings className="h-8 w-8" />,
              },
              {
                title: "Expert Support",
                description: "Professional guidance and financial education to help you make informed decisions.",
                icon: <Users className="h-8 w-8" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center scroll-animate opacity-0 translate-y-8 transition-all duration-700`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start your path to financial success today.
          </h2>
          <p className="text-xl text-gray-600 mb-8">Got questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 rounded-full text-lg border-2 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}