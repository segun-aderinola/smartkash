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
  CheckCircle,
  Clock,
  Award,
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
        "Quick and accessible credit solutions for individuals, small businesses, and micro-entrepreneurs with flexible terms.",
      color: "bg-blue-50 group-hover:bg-blue-600",
      iconColor: "text-blue-600 group-hover:text-white",
      image: "/images/finance-business-accounting-analysis-management-concept.jpg",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Venture Capital",
      description:
        "Strategic funding and support for high-potential startups and growing businesses with innovative ideas.",
      color: "bg-purple-50 group-hover:bg-purple-600",
      iconColor: "text-purple-600 group-hover:text-white",
      image: "/images/35294.jpg",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Investments",
      description:
        "Structured investment solutions tailored to your risk appetite with competitive returns and expert guidance.",
      color: "bg-green-50 group-hover:bg-green-600",
      iconColor: "text-green-600 group-hover:text-white",
      image: "/images/accountant-calculating-profit-with-financial-analysis-graphs.jpg",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Payment Services",
      description: "Comprehensive payroll, pension, and disbursement services for businesses and government entities.",
      color: "bg-orange-50 group-hover:bg-orange-600",
      iconColor: "text-orange-600 group-hover:text-white",
      image: "/images/6134225.jpg",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Digital Banking",
      description:
        "24/7 access to banking services through mobile, online, and USSD platforms with Visa and MasterCard solutions.",
      color: "bg-teal-50 group-hover:bg-teal-600",
      iconColor: "text-teal-600 group-hover:text-white",
      image: "/images/payment-solutions-financial-technology-with-businessman-using-tablet-background.jpg",
    },
  ]

  const products = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Susu Quick Loan",
      subtitle: "Fast Loans for Everyday Needs",
      description: "Quick loan solution for short-term financial needs of individuals and small businesses.",
      color: "border-l-blue-500",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Micro-Enterprise Loan",
      subtitle: "Empowering Small Business Growth",
      description: "Specialized loans helping micro-entrepreneurs expand operations and improve financial standing.",
      color: "border-l-purple-500",
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Personal Loan",
      subtitle: "Finance Your Goals Easily",
      description: "Personal loans with flexible repayment terms for various individual financial needs.",
      color: "border-l-green-500",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "SME Working Capital",
      subtitle: "Fuel Business Growth",
      description: "Working capital support for small and medium enterprises to grow their businesses.",
      color: "border-l-orange-500",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Overdraft Facility",
      subtitle: "Manage Cash Flow Gaps",
      description: "Flexible credit option for covering temporary cash flow shortages seamlessly.",
      color: "border-l-red-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Venture Capital",
      subtitle: "Innovation Funding",
      description: "Strategic support for high-potential startups to make lasting market impact.",
      color: "border-l-indigo-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fixed Term Investments",
      subtitle: "Competitive Returns",
      description: "Secure investment options with attractive interest rates for wealth growth.",
      color: "border-l-teal-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Electronic Products",
      subtitle: "Digital Banking Solutions",
      description: "Mobile banking, USSD services, and card products for convenient banking access.",
      color: "border-l-pink-500",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Structured Finance",
      subtitle: "Custom Business Solutions",
      description: "Tailored financial packages including payroll services and cash collection.",
      color: "border-l-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-6 py-3 rounded-full shadow-lg">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Financial Solutions
              <br />
              <span className="text-blue-600">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial products and services designed for individuals, small businesses, and underserved
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { icon: Users, number: "120K+", label: "Happy Clients", color: "bg-blue-100 text-blue-600" },
                { icon: TrendingUp, number: "₦2.5B+", label: "Funds Disbursed", color: "bg-green-100 text-green-600" },
                { icon: Shield, number: "99.9%", label: "Security Rate", color: "bg-purple-100 text-purple-600" },
                { icon: Award, number: "4.9/5", label: "Customer Rating", color: "bg-orange-100 text-orange-600" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 lg:space-x-4 group">
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 ${stat.color} rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900">{stat.number}</h3>
                    <p className="text-sm lg:text-base text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
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
              Innovative financial solutions designed to meet your unique needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 scroll-animate opacity-0 translate-y-8 overflow-hidden`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-8 relative">
                  <div
                    className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg -mt-16 relative z-10`}
                  >
                    <div className={`${service.iconColor} transition-colors duration-300`}>{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored financial products to support your specific needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 scroll-animate opacity-0 translate-y-8 border-l-4 ${product.color} group`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <div className="text-gray-600 group-hover:text-blue-600 transition-colors">{product.icon}</div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SmartKash?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're committed to providing exceptional service and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Approval",
                description: "Fast processing times to get you financial support when you need it most.",
                icon: <Zap className="h-8 w-8" />,
              },
              {
                title: "Flexible Terms",
                description: "Customizable repayment options that fit your unique circumstances.",
                icon: <Settings className="h-8 w-8" />,
              },
              {
                title: "Expert Support",
                description: "Professional guidance and financial education for informed decisions.",
                icon: <Users className="h-8 w-8" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center scroll-animate opacity-0 translate-y-8 transition-all duration-700 group`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}