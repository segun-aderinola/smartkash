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
  Headphones,
  CheckCircle,
  Bell,
  Target,
  Award,
} from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id.replace("-header", "").replace("-content", "").replace("-stats", "")
          setIsVisible((prev) => ({
            ...prev,
            [sectionName]: true,
            services: true,
            about: true,
            detailedServices: true,
            security: true,
            cta: true,
          }))
        }
      })
    }, observerOptions)

    const sections = ["services-header", "about-content", "detailed-services-header", "security-header", "cta-content"]
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const heroSlides = [
    {
      title: "Comprehensive Wealth Management",
      subtitle:
        "Your single resource for fully integrated financial services to maximize your wealth and secure your future",
      image: "/images/Image_fx.png",
    },
    {
      title: "Journey to Financial Freedom",
      subtitle:
        "We pride ourselves on delivering personalized service that focuses on the journey with you to realize your dreams",
      image: "/images/dcb31263139c0b2a1f9fe94cfee2f23549d6d4bb.png",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const services = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Financial Consulting",
      description:
        "Objective advice and strategies across the broad spectrum of financial services with specialized expertise.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Investment Advisory",
      description:
        "Professional investment guidance with access to broad financial networks and business associations.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and management solutions to protect and grow your wealth securely.",
    },
  ]

  const detailedServices = [
    {
      title: "Personal Finance Solutions",
      description:
        "Tailored personal loans, payday loans, and financial planning to meet your individual needs and goals.",
      icon: <Users className="h-12 w-12" />,
    },
    {
      title: "Business Loans & SME Finance",
      description:
        "Working capital loans, equipment financing, and business growth solutions for small and medium enterprises.",
      icon: <Building className="h-12 w-12" />,
    },
    {
      title: "Investment Products",
      description: "Mutual funds, stocks, bonds, real estate investments, and retirement accounts for wealth building.",
      icon: <TrendingUp className="h-12 w-12" />,
    },
    {
      title: "Venture Capital Services",
      description:
        "Seed funding, growth capital, and advisory support for innovative startups and high-potential businesses.",
      icon: <Target className="h-12 w-12" />,
    },
    {
      title: "Digital Payment Solutions",
      description: "Digital wallet, merchant services, online payment processing, and cross-border payment solutions.",
      icon: <Smartphone className="h-12 w-12" />,
    },
  ]

  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Advanced Security",
      description: "Multi-layered security protocols protecting your financial data and transactions.",
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "Transparent Operations",
      description: "Clear, honest communication with full transparency in all our financial dealings.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
      title: "Regulatory Compliance",
      description: "Fully licensed and compliant with all financial regulations and industry standards.",
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-600" />,
      title: "Data Protection",
      description: "End-to-end encryption and secure data handling to protect your personal information.",
    },
    {
      icon: <Bell className="h-8 w-8 text-teal-600" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and instant alerts for all account activities and transactions.",
    },
    {
      icon: <Headphones className="h-8 w-8 text-purple-600" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock dedicated support to assist with all your financial needs.",
    },
  ]

  const values = [
    "Integrity & Transparency",
    "Innovation & Technology",
    "Client-Centric Excellence",
    "Comprehensive Solutions",
    "Professional Expertise",
    "Consistent Quality Service",
  ]

  return (
    <div className="bg-white">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        />

        <div
          className="absolute inset-0 bg-black/20"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Floating shapes */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-8 h-8 xs:w-10 xs:h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-10 sm:left-20 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-16 sm:right-32 w-10 h-10 xs:w-12 xs:h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-white/10 rounded-full animate-bounce"></div>

        <div className="relative z-10 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div
                className="space-y-4 sm:space-y-6 lg:space-y-8 text-white pt-16 sm:pt-20"
                style={{
                  transform: `translateY(${scrollY * 0.2}px)`,
                }}
              >
                <div className="inline-block">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-md sm:text-md lg:text-base font-medium px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full border border-white/30">
                    WEALTH MANAGEMENT
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <p className="text-md xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-90 max-w-lg">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full text-md sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>

              <div className="relative hero-image-container h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-screen flex items-end">
                <div
                  className="absolute inset-0 hero-background-image"
                  style={{
                    backgroundImage: `url(/images/Image_fx.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 animate-float z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
                    <div>
                      <div className="text-md sm:text-md lg:text-base font-semibold">120K+</div>
                      <div className="text-md sm:text-md opacity-80">Clients Served</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 -left-2 sm:-left-4 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 animate-float delay-1000 z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
                    <div>
                      <div className="text-md sm:text-md lg:text-base font-semibold">₦2.5B+</div>
                      <div className="text-md sm:text-md opacity-80">Assets Managed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
              isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            id="services-header"
          >
            <span className="bg-blue-100 text-blue-800 text-md sm:text-base lg:text-lg font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full">
              CORE SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 sm:mt-5 lg:mt-6 mb-3 sm:mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise across the broad spectrum of financial services
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 ${
                  isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-7 lg:mb-8 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">{service.icon}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-md sm:text-base lg:text-lg text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-800 text-md sm:text-base font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full">
                  ABOUT SMARTKASH
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Your Trusted Financial Partner
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-md sm:text-base lg:text-lg">
                  SmartKash is your single resource for comprehensive and fully integrated wealth management services.
                  We help you maximize your wealth base, fulfill your dreams and aspirations, and secure a financial
                  future for you and your loved ones.
                </p>
                <p className="text-md sm:text-base lg:text-lg">
                  We pride ourselves on our commitment to delivering personalized service that focuses on the journey
                  with you to realize your dreams. Our objective advice spans the broad spectrum of financial services
                  with specialized expertise.
                </p>
                <p className="text-md sm:text-base lg:text-lg">
                  As your client, your best interests are always our first priority. We strive to develop deep,
                  meaningful relationships built on trust and integrity.
                </p>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full text-md sm:text-base lg:text-lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            <div className="relative">
                <img
                  src="/images/man_holding_money.png"
                  alt="About SmartKash"
                  className="w-full h-full shadow-lg hover:shadow-xl transition-shadow"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16 p-5">
            <span className="bg-blue-100 text-blue-800 text-md sm:text-base font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full">
              OUR SERVICES
            </span>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-5 border-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-5 lg:mb-6">
              Complete Financial Solutions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto">
              From personal finance to business growth, we provide comprehensive solutions for all your financial needs
            </p>
            </div>
            
           
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {detailedServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-6 sm:p-7 lg:p-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">{service.icon}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-md sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <span className="bg-purple-100 text-purple-800 text-md sm:text-base font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full">
              TRUST & SECURITY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-5 lg:mb-6">
              Your Financial Security is Our Priority
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Built on trust, integrity, and professional excellence with comprehensive security measures
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 sm:p-7 lg:p-8">
                  <div className="mb-4 sm:mb-5 lg:mb-6">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-md sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Marquee */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600 overflow-hidden">
        <div className="flex animate-marquee space-x-12 sm:space-x-16 lg:space-x-20">
          {[...values, ...values, ...values].map((value, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 sm:space-x-5 lg:space-x-6 text-white whitespace-nowrap"
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold">{value}</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6">
            Ready to Begin Your Financial Journey?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-7 lg:mb-8 opacity-90">
            Let's navigate the financial landscape together. With our expertise and your vision, the possibilities are
            endless.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
