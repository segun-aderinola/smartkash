"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  Award,
  Target,
  TrendingUp,
  Shield,
  Heart,
  Star,
  Mail,
  Phone,
  Linkedin,
  Twitter
} from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function LeadershipPage() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id.replace('-section', '')
          setIsVisible(prev => ({
            ...prev,
            [sectionName]: true,
            hero: true,
            intro: true,
            leadership: true,
            values: true,
            cta: true
          }))
        }
      })
    }, observerOptions)

    // Observe sections as they come into view
    const sections = ['hero-section', 'intro-section', 'leadership-section', 'values-section', 'cta-section']
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const leaders = [
    {
      name: "Yomi Alale",
      position: "Chairman",
      image: "/api/placeholder/300/400",
      bio: "Leading with vision and strategic expertise, driving organizational excellence and sustainable growth.",
      isExecutive: true
    },
  ]

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, delivering exceptional results for our clients.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technology and creative solutions to stay ahead in the financial industry.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description: "We operate with the highest ethical standards, building trust through transparency and honesty.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Our clients are at the center of everything we do, and we're committed to their financial success.",
      color: "bg-red-100 text-red-600"
    }
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
        <section id="hero-section" className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
                className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white text-lg font-medium px-6 py-3 rounded-full border border-white/30">
                    LEADERSHIP TEAM
                </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Our Leadership</h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Meet the visionary leaders driving SmartKash towards excellence, innovation, and sustainable growth in the financial services industry.
                </p>
            </div>
            </div>
        </section>

        {/* Introduction Section */}
        <section id="intro-section" className="py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
                className={`max-w-5xl mx-auto text-center transition-all duration-1000 delay-200 ${
                isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Driven by Excellence & Innovation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                At SmartKash Network Financial Services, our leadership team is driven by a commitment to excellence, innovation, and integrity. With a wealth of experience in the financial industry, our leaders guide the company with a clear vision and a dedication to fostering growth for our clients, employees, and stakeholders.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                Meet the talented individuals who are shaping the future of financial services and leading us towards delivering impactful, customer-focused solutions.
                </p>
            </div>
            </div>
        </section>



        {/* Leadership Team Section */}
        <section id="leadership-section" className="py-20 lg:py-24 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
                className={`text-center mb-16 transition-all duration-1000 ${
                isVisible.leadership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Leaders</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals committed to driving growth and innovation in financial services.
                </p>
            </div>

            {/* Executive Leadership */}
            <div className="mb-20">
                <div 
                className={`text-center mb-12 transition-all duration-1000 delay-200 ${
                    isVisible.leadership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Executive Leadership</h3>
                {/* <div className="w-24 h-1 bg-blue-600 mx-auto"></div> */}
                <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
                
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {leaders.filter(leader => leader.isExecutive).map((leader, index) => (
                    <Card 
                    key={index}
                    className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 ${
                        isVisible.leadership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 300 + 400}ms` }}
                    >
                    <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                        <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-8">
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                            <p className="text-lg font-semibold text-blue-600 mb-4">{leader.position}</p>
                            <p className="text-gray-600 leading-relaxed text-base">{leader.bio}</p>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>

            {/* Non-Executive Directors */}
            <div>
                <div 
                className={`text-center mb-12 transition-all duration-1000 delay-300 ${
                    isVisible.leadership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                >
                {/* <h3 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h3>
                <div className="w-24 h-1 bg-purple-600 mx-auto"></div> */}
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {leaders.filter(leader => !leader.isExecutive).map((leader, index) => (
                    <Card 
                    key={index}
                    className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 ${
                        isVisible.leadership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 600}ms` }}
                    >
                    <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                        <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6">
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                            <p className="text-base font-semibold text-purple-600 mb-3">{leader.position}</p>
                            <p className="text-gray-600 leading-relaxed text-sm">{leader.bio}</p>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
            </div>
        </section>


        {/* CTA Section */}
        <section id="cta-section" className="py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div 
                className={`transition-all duration-1000 ${
                isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your Path to Financial Success Today
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                Got questions? We're here to help!
                </p>
                <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto">
                Our experienced leadership team and dedicated professionals are ready to guide you on your financial journey. Connect with us today to explore how we can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Get Started Today
                    <ArrowRight className="ml-3 h-6 w-6" />
                </Button> */}
                {/* <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-full text-xl font-semibold"
                >
                    Contact Us
                    <Mail className="ml-3 h-6 w-6" />
                </Button> */}
                </div>
            </div>
            </div>
        </section>
        </div>
        <Footer />
    </>
  )
}