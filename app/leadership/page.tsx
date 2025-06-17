"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Target, Shield, Heart } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function LeadershipPage() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id.replace("-section", "")
          setIsVisible((prev) => ({
            ...prev,
            [sectionName]: true,
            hero: true,
            intro: true,
            leadership: true,
            values: true,
            cta: true,
          }))
        }
      })
    }, observerOptions)

    const sections = ["hero-section", "intro-section", "leadership-section", "values-section", "cta-section"]
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const executives = [
    {
      name: "Olufemi Awojobi",
      position: "Chairman",
      image: "/images/olufemi_awojobi.jpeg",
      slug: "olufemi_awojobi",
      bio: "Fellow of FCCA and FCA with over three decades of leadership experience spanning financial services, consultancy, and education sectors.",
    },
    {
      name: "Yomi Alale",
      position: "MD & CEO",
      image: "/images/Yomi_Alale.JPG",
      slug: "yomi_alale",
      bio: "Seasoned business leader with extensive experience across banking, telecommunications, and food industry sectors.",
    },
    {
      name: "Bello Oluwatoyin Lois",
      position: "Executive Director",
      image: "/images/Bello_Oluwatoyin_Lois.JPG",
      slug: "bello_oluwatoyin_lois",
      bio: "Dedicated professional with expertise in financial management, operations, and strategic planning across multiple business functions.",
    },
    {
      name: "Joseph O Alale",
      position: "Advisory Board Member",
      image: "/images/joseph_alale.jpeg",
      slug: "joseph_o_alale",
      bio: "Fellow of the Institute of Chartered Accountants with extensive experience in audit, compliance, and taxation across international markets.",
    },
    {
      name: "Olaniyi Osun",
      position: "Director",
      image: "/images/olaniyi_osun.jpeg",
      slug: "olaniyi_osun",
      bio: "Seasoned security professional with extensive international experience and founder of leading security firms in the UK and Nigeria.",
    },
  ]

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, delivering exceptional results for our clients.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technology and creative solutions to stay ahead in the financial industry.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description: "We operate with the highest ethical standards, building trust through transparency and honesty.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Our clients are at the center of everything we do, and we're committed to their financial success.",
      color: "bg-red-100 text-red-600",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-fade-in-left {
            animation: fadeInLeft 0.8s ease-out forwards;
          }

          .animate-fade-in-right {
            animation: fadeInRight 0.8s ease-out forwards;
          }

          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
        `}</style>

        {/* Hero Section */}
        <section
          id="hero-section"
          className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 lg:py-28 relative overflow-hidden"
        >
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white text-lg font-medium px-6 py-3 rounded-full border border-white/30">
                  LEADERSHIP TEAM
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Our Leadership</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Meet the visionary leaders driving SmartKash towards excellence, innovation, and sustainable growth in
                the financial services industry.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="intro-section" className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`max-w-5xl mx-auto text-center transition-all duration-1000 delay-200 ${
                isVisible.intro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Driven by Excellence & Innovation</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                At SmartKash Financials Limited, our leadership team is driven by a commitment to excellence,
                innovation, and integrity. With a wealth of experience in the financial industry, our leaders guide the
                company with a clear vision and a dedication to fostering growth for our clients, employees, and
                stakeholders.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Meet the talented individuals who are shaping the future of financial services and leading us towards
                delivering impactful, customer-focused solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Leadership Section */}
        <section id="leadership-section" className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible.leadership ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Executive Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals committed to driving growth and innovation in financial services.
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
            </div>

            {/* Leadership Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executives.map((executive, index) => (
                <Link
                  key={index}
                  href={`/leadership/${executive.slug}`}
                  className={`group cursor-pointer transition-all duration-300 ${
                    isVisible.leadership ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative mb-4 overflow-hidden bg-gray-200 aspect-[4/5] group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={executive.image || "/placeholder.svg?height=400&width=320"}
                      alt={executive.name}
                      className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Name and Title */}
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {executive.name}
                    </h3>
                    <p className="text-md text-gray-600 font-medium">{executive.position}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Values */}
        <section id="values-section" className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The core principles that guide our leadership team in driving organizational success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-md leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta-section"
          className="py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div
              className={`transition-all duration-1000 ${
                isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Path to Financial Success Today</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">Got questions? We're here to help!</p>
              <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto">
                Our experienced leadership team and dedicated professionals are ready to guide you on your financial
                journey. Connect with us today to explore how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
