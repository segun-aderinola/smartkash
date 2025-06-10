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
  Shield,
  CheckCircle,
  Clock,
  Award,
  FileText,
  Calculator,
  DollarSign,
  Briefcase,
  UserCheck,
  Calendar,
  Percent,
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

  const coreServices = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Financial Consulting",
      description:
        "Expert financial advice and strategic planning to help you make informed decisions about your financial future.",
      color: "bg-blue-50 group-hover:bg-blue-600",
      iconColor: "text-blue-600 group-hover:text-white",
      image: "/images/finance-business-accounting-analysis-management-concept.jpg",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Investment Advisory",
      description: "Professional investment guidance with access to diverse portfolios and market insights.",
      color: "bg-green-50 group-hover:bg-green-600",
      iconColor: "text-green-600 group-hover:text-white",
      image: "/images/accountant-calculating-profit-with-financial-analysis-graphs.jpg",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your financial interests.",
      color: "bg-purple-50 group-hover:bg-purple-600",
      iconColor: "text-purple-600 group-hover:text-white",
      image: "/images/35294.jpg",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Corporate Finance",
      description: "Strategic financial solutions for businesses including capital structuring and growth financing.",
      color: "bg-orange-50 group-hover:bg-orange-600",
      iconColor: "text-orange-600 group-hover:text-white",
      image: "/images/payment-solutions-financial-technology-with-businessman-using-tablet-background.jpg",
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Personal Finance Solutions",
      description: "Tailored financial products and services to meet your individual financial needs and goals.",
      color: "bg-teal-50 group-hover:bg-teal-600",
      iconColor: "text-teal-600 group-hover:text-white",
      image: "/images/6134225.jpg",
    },
  ]

  const loanPolicies = [
    {
      title: "MSME Working Capital Loan",
      subtitle: "Secured Business Financing",
      description:
        "Term loans for registered small business owners, traders, and POS operators with collateral security.",
      icon: <Building className="h-8 w-8" />,
      amount: "₦100,000 – ₦2,000,000",
      tenor: "3 – 6 months",
      rate: "4–5% monthly",
      targetBorrowers: "Small business owners, traders, POS operators",
      eligibility: [
        "Age 21–60 years",
        "Verifiable business (6+ months)",
        "BVN + valid ID",
        "Business utility bill",
        "Collateral required",
      ],
      security: "Secured with verifiable asset (100–150% of loan value)",
      fees: "Processing fee: 1.5–2%",
      color: "border-l-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Payroll-Based Personal Loan",
      subtitle: "Salary Earner Financing",
      description: "Short-term unsecured loans for salaried employees in public or private sector organizations.",
      icon: <UserCheck className="h-8 w-8" />,
      amount: "₦50,000 – ₦500,000",
      tenor: "1 – 3 months",
      rate: "4–6% monthly",
      targetBorrowers: "Salaried employees (public/private sector)",
      eligibility: [
        "Age 21–55 years",
        "Stable salary income",
        "Minimum ₦50,000 monthly salary",
        "BVN + employment letter",
        "3 months bank statement",
      ],
      security: "Employer confirmation or post-dated cheques",
      fees: "Processing fee: 1%",
      color: "border-l-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Asset Purchase Loan",
      subtitle: "Equipment & Vehicle Financing",
      description: "Secured loans for purchasing motorcycles, tools, equipment, and other business assets.",
      icon: <Briefcase className="h-8 w-8" />,
      amount: "₦200,000 – ₦1,000,000",
      tenor: "6 – 12 months",
      rate: "3–4% monthly",
      targetBorrowers: "Skilled workers, small business owners, logistics riders",
      eligibility: [
        "Age 21–55 years",
        "Steady business income",
        "BVN + valid ID",
        "20–30% down payment",
        "Residence proof",
      ],
      security: "Asset held as collateral until loan repayment",
      fees: "Processing fee: 1.5%",
      color: "border-l-purple-500",
      bgColor: "bg-purple-50",
    },
  ]

  const generalConditions = [
    { label: "Late Payment Penalty", value: "1–2% per week after grace period" },
    { label: "Grace Period", value: "5–7 days" },
    { label: "Loan Top-up Policy", value: "After 50% repayment with clean history" },
    { label: "Early Repayment", value: "No penalty (encouraged)" },
    { label: "Default Handling", value: "Reminder → Visit → Demand Letter → Legal" },
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
              <span className="bg-blue-100 text-blue-800 text-md font-medium px-6 py-3 rounded-full shadow-lg">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Financial
              <br />
              <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              SmartKash Financials Limited offers a wide range of services including financial consulting, investment
              advisory, risk management, corporate finance, and personal finance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { icon: Users, number: "120K+", label: "Satisfied Clients", color: "bg-blue-100 text-blue-600" },
                { icon: TrendingUp, number: "₦2.5B+", label: "Assets Managed", color: "bg-green-100 text-green-600" },
                { icon: Shield, number: "99.9%", label: "Security Rate", color: "bg-purple-100 text-purple-600" },
                { icon: Award, number: "15+", label: "Years Experience", color: "bg-orange-100 text-orange-600" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 lg:space-x-4 group">
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 ${stat.color} rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900">{stat.number}</h3>
                    <p className="text-md lg:text-base text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Zig-Zag Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to meet your unique needs and goals.
            </p>
          </div>

          <div className="space-y-20">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image Section */}
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""} scroll-animate opacity-0 translate-y-8 transition-all duration-700`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={service.image || "/placeholder.svg?height=300&width=500"}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div
                          className={`absolute bottom-4 right-4 w-16 h-16 ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <div className={`${service.iconColor} transition-colors duration-300`}>{service.icon}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Content Section */}
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-1" : ""} scroll-animate opacity-0 translate-y-8 transition-all duration-700`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <span className="bg-blue-100 text-blue-800 text-md font-medium px-3 py-1 rounded-full">
                        Professional Advice
                      </span>
                      <span className="bg-green-100 text-green-800 text-md font-medium px-3 py-1 rounded-full">
                        Expert Guidance
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-md font-medium px-3 py-1 rounded-full">
                        Tailored Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Policies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Loan Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible financing solutions with competitive rates and transparent terms.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {loanPolicies.map((loan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-animate opacity-0 translate-y-8 border-l-4 ${loan.color} overflow-hidden`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`${loan.bgColor} p-6`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                        <div className="text-gray-700">{loan.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{loan.title}</h3>
                        <p className="text-md font-medium text-gray-600">{loan.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-md leading-relaxed">{loan.description}</p>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="text-md font-medium text-gray-500">Amount</span>
                        </div>
                        <p className="text-md font-semibold text-gray-900">{loan.amount}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-md font-medium text-gray-500">Tenor</span>
                        </div>
                        <p className="text-md font-semibold text-gray-900">{loan.tenor}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Percent className="h-4 w-4 text-purple-600" />
                          <span className="text-md font-medium text-gray-500">Interest Rate</span>
                        </div>
                        <p className="text-md font-semibold text-gray-900">{loan.rate}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Calculator className="h-4 w-4 text-orange-600" />
                          <span className="text-md font-medium text-gray-500">Processing Fee</span>
                        </div>
                        <p className="text-md font-semibold text-gray-900">{loan.fees}</p>
                      </div>
                    </div>

                    {/* Target Borrowers */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-900 mb-2">Target Borrowers</h4>
                      <p className="text-md text-gray-600">{loan.targetBorrowers}</p>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-900 mb-2">Key Requirements</h4>
                      <ul className="space-y-1">
                        {loan.eligibility.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex} className="text-md text-gray-600 flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <Button
                      variant="outline"
                      className="w-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* General Conditions */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">General Loan Conditions</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {generalConditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-900 mb-1">{condition.label}</h4>
                        <p className="text-md text-gray-600">{condition.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Simple Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our streamlined application process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Eligibility Check",
                description: "Review of credit scores and financial history",
                icon: <CheckCircle className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "Documentation",
                description: "Submit necessary documents and financial statements",
                icon: <FileText className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Quick Approval",
                description: "Fast approval process based on your profile",
                icon: <Clock className="h-8 w-8" />,
              },
              {
                step: "04",
                title: "Fund Disbursement",
                description: "Receive funds quickly upon approval",
                icon: <DollarSign className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center scroll-animate opacity-0 translate-y-8 transition-all duration-700 group`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-md font-bold">
                    {item.step}
                  </div> */}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-md leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us at SmartKash Financials Limited, and let's navigate the financial landscape together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
