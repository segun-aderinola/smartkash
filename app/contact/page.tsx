"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Calendar
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      content: "info@smartkash.ng",
      description: "Send us an email anytime",
      action: "mailto:info@smartkash.ng",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      content: "09128733117, 08153619822",
      description: "Speak with our team directly",
      action: "tel:+2349128733117",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Visit Us",
      content: "52, Shagamu - Ikorodu Road, Sabo",
      description: "beside enviable group, Ikorodu, Lagos, Nigeria",
      action: "https://maps.google.com/?q=52+Shagamu+Ikorodu+Road+Sabo+Lagos+Nigeria",
      color: "bg-purple-100 text-purple-600"
    }
  ]

  const services = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Customer Support",
      description: "Get help with your account and services"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Assistance", 
      description: "Report security concerns or get help"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Business Inquiries",
      description: "Explore partnership opportunities"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "New Account Setup",
      description: "Start your financial journey with us"
    }
  ]

  return (
    <>
     <Navbar />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white text-lg font-medium px-6 py-3 rounded-full border border-white/30">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              We're here to help you with all your financial needs. Whether you have questions about our services, need support with your account, or want to explore new opportunities, our team is ready to assist.
            </p>
            <p className="text-lg opacity-80">
              Reach out to us through any of our contact channels, and we'll ensure you receive prompt and reliable service to guide you on your financial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to reach us. We're available to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{method.content}</p>
                  <p className="text-gray-600 mb-6 text-base">{method.description}</p>
                  {/* <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    Contact Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}