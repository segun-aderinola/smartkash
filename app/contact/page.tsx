// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Send,
//   MessageCircle,
//   Headphones,
//   Shield,
//   CheckCircle,
//   ArrowRight,
//   Building,
//   Users,
//   Calendar
// } from "lucide-react"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   })

//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     // Handle form submission here
//     console.log('Form submitted:', formData)
//     alert('Thank you for your message! We\'ll get back to you soon.')
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: ''
//     })
//   }

//   const contactMethods = [
//     {
//       icon: <Mail className="h-8 w-8" />,
//       title: "Email Us",
//       content: "info@smartkash.ng",
//       description: "Send us an email anytime",
//       action: "mailto:info@smartkash.ng",
//       color: "bg-blue-100 text-blue-600"
//     },
//     {
//       icon: <Phone className="h-8 w-8" />,
//       title: "Call Us",
//       content: "09128733117, 08153619822",
//       description: "Speak with our team directly",
//       action: "tel:+2349128733117",
//       color: "bg-green-100 text-green-600"
//     },
//     {
//       icon: <MapPin className="h-8 w-8" />,
//       title: "Visit Us",
//       content: "52, Shagamu - Ikorodu Road, Sabo",
//       description: "beside enviable group, Ikorodu, Lagos, Nigeria",
//       action: "https://maps.google.com/?q=52+Shagamu+Ikorodu+Road+Sabo+Lagos+Nigeria",
//       color: "bg-purple-100 text-purple-600"
//     }
//   ]

//   const services = [
//     {
//       icon: <Headphones className="h-6 w-6" />,
//       title: "Customer Support",
//       description: "Get help with your account and services"
//     },
//     {
//       icon: <Shield className="h-6 w-6" />,
//       title: "Security Assistance", 
//       description: "Report security concerns or get help"
//     },
//     {
//       icon: <Building className="h-6 w-6" />,
//       title: "Business Inquiries",
//       description: "Explore partnership opportunities"
//     },
//     {
//       icon: <Users className="h-6 w-6" />,
//       title: "New Account Setup",
//       description: "Start your financial journey with us"
//     }
//   ]

//   return (
//     <>
//      <Navbar />
//       <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 lg:py-28">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-block mb-6">
//               <span className="bg-white/20 backdrop-blur-sm text-white text-lg font-medium px-6 py-3 rounded-full border border-white/30">
//                 GET IN TOUCH
//               </span>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact Us</h1>
//             <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
//               We're here to help you with all your financial needs. Whether you have questions about our services, need support with your account, or want to explore new opportunities, our team is ready to assist.
//             </p>
//             <p className="text-lg opacity-80">
//               Reach out to us through any of our contact channels, and we'll ensure you receive prompt and reliable service to guide you on your financial journey.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Choose your preferred way to reach us. We're available to help you succeed.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {contactMethods.map((method, index) => (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
//                 <CardContent className="p-8 text-center">
//                   <div className={`w-20 h-20 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
//                     {method.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
//                   <p className="text-lg font-semibold text-gray-800 mb-2">{method.content}</p>
//                   <p className="text-gray-600 mb-6 text-base">{method.description}</p>
//                   {/* <Button 
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
//                     onClick={() => window.open(method.action, '_blank')}
//                   >
//                     Contact Now
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button> */}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//       </div>
//       <Footer />
//     </>
//   )
// }
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
  Headphones,
  Shield,
  ArrowRight,
  Building,
  Users,
  Calendar,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      content: "smartkashmicro@gmail.com",
      description: "Send us an email anytime",
      action: "mailto:smartkashmicro@gmail.com",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      content: "08118954209",
      description: "Speak with our team directly",
      action: "tel:+2348118954209",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Visit Us",
      content: "132/134 Sagamu Road, Ikorodu",
      description: "Besides Jubilee Estate, Lagos State",
      action: "https://maps.google.com/?q=132+Sagamu+Road+Ikorodu+Lagos+Nigeria",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const services = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Customer Support",
      description: "Get help with your account and services",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Assistance",
      description: "Report security concerns or get help",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Business Inquiries",
      description: "Explore partnership opportunities",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "New Account Setup",
      description: "Start your financial journey with us",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 lg:py-28 relative overflow-hidden">
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
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white text-lg font-medium px-6 py-3 rounded-full border border-white/30">
                  GET IN TOUCH
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact SmartKash</h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
                We're here to help you with all your financial needs. Whether you have questions about our services,
                need support with your account, or want to explore new opportunities, our team is ready to assist.
              </p>
              <p className="text-lg opacity-80">
                Reach out to us through any of our contact channels, and we'll ensure you receive prompt and reliable
                service to guide you on your financial journey.
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
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">{method.content}</p>
                    <p className="text-gray-600 mb-6 text-base">{method.description}</p>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
                      onClick={() => window.open(method.action, "_blank")}
                    >
                      Contact Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-md font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-md font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="loan-inquiry">Loan Inquiry</option>
                          <option value="investment">Investment Services</option>
                          <option value="business-loan">Business Loan</option>
                          <option value="support">Customer Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services We Can Help With */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Can We Help You?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our dedicated team is here to assist you with various financial services and inquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-blue-600">{service.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-md leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Office Hours & Location</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                      <div className="text-gray-600">
                        <p>132/134 Sagamu Road, Ikorodu</p>
                        <p>Besides Jubilee Estate</p>
                        <p>Lagos State, Nigeria</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule a Meeting</h3>
                      <p className="text-gray-600 mb-3">
                        Book a consultation with our financial experts to discuss your needs.
                      </p>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">Book Appointment</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-900 font-medium">08118954209</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-900 font-medium">smartkashmicro@gmail.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div className="text-gray-900 font-medium">
                      <p>132/134 Sagamu Road, Ikorodu</p>
                      <p>Besides Jubilee Estate, Lagos State</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="rounded-full">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
