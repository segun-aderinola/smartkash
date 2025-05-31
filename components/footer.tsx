import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, X, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact Us", href: "/contact" },
  ]

  const services = [
    { name: "Credits and Loans", href: "#services" },
    { name: "Venture Capital", href: "#services" },
    { name: "Investments", href: "#services" },
    { name: "Payment Services", href: "#services" },
    { name: "Digital Banking", href: "#services" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: X },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Stay Updated with SmartKash</h3>
              <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl">
                Get the latest updates on our financial services, investment opportunities, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-sm md:text-base"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile-first flex layout */}
          <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between">
            
            {/* Company Info - Takes full width on mobile, 40% on desktop */}
            <div className="flex-shrink-0 lg:w-2/5 lg:pr-12">
              <div className="mb-6">
                <img
                  src="/images/smartkash-logo.png"
                  alt="SmartKash Network Financial Services"
                  className="h-10 md:h-12 w-auto mb-4"
                />
                <h3 className="text-xl md:text-2xl font-bold mb-2">SmartKash</h3>
                <p className="text-sm md:text-base text-gray-400">Network Financial Services</p>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                Empowering your financial future with innovative solutions for the unbanked and underserved communities.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-300">123 Financial District, Lagos, Nigeria</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-300">+234 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-300">info@smartkash.ng</span>
                </div>
              </div>
            </div>

            {/* Links Section - Flex container */}
            <div className="flex-1 lg:w-3/5">
              <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-12">
                
                {/* Quick Links & Services - Always side by side */}
                <div className="flex flex-1 space-x-8 lg:space-x-12">
                  {/* Quick Links */}
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Quick Links</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {quickLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base hover:underline"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Our Services</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {services.map((service) => (
                        <li key={service.name}>
                          <Link
                            href={service.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base hover:underline"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Legal & Social */}
                <div className="flex-shrink-0 lg:w-64">
                  <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Legal</h4>
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {legalLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base hover:underline"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Social Links */}
                  <div>
                    <h5 className="text-base md:text-lg font-semibold mb-4">Follow Us</h5>
                    <div className="flex space-x-3 md:space-x-4">
                      {socialLinks.map((social) => {
                        const IconComponent = social.icon
                        return (
                          <Link
                            key={social.name}
                            href={social.href}
                            className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                            aria-label={social.name}
                          >
                            <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs md:text-sm text-gray-400 text-center md:text-left">
              © {currentYear} SmartKash Network Financial Services. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-6 text-xs md:text-sm text-gray-400">
              <span>Licensed by CBN</span>
              <span className="hidden md:inline">•</span>
              <span>NDIC Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}