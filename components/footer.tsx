import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Homepage", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ]

  const services = [
    { name: "Personal Loans", href: "/services" },
    { name: "Business Loans", href: "/services" },
    { name: "Investment Services", href: "/services" },
    { name: "Venture Capital", href: "/services" },
    { name: "Digital Banking", href: "/services" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Compliance", href: "#" },
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with SmartKash</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get the latest updates on our financial services, investment opportunities, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img src="/images/smartkash-logo.jpg" alt="SmartKash Financials Limited" className="h-12 w-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">SmartKash</h3>
                <p className="text-md text-gray-400">Financials Limited</p>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your single resource for comprehensive and fully integrated wealth management services. Empowering
                individuals and businesses to achieve their financial goals.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-md text-gray-300">132/134 Sagamu Road, Ikorodu, Lagos State</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-md text-gray-300">08118954209</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-md text-gray-300">smartkashmicro@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-md"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-md"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              {/* <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 mb-8">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-md"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul> */}

              {/* Social Links */}
              <div>
                <h5 className="text-md font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                        aria-label={social.name}
                      >
                        <IconComponent className="h-4 w-4" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-md text-gray-400">
              © {currentYear} SmartKash Financials Limited. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-6 text-md text-gray-400">
              <span>Licensed Financial Institution</span>
              <span>•</span>
              <span>Regulated & Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
