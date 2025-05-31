"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/images/smartkash-logo.png"
                  alt="SmartKash Network Financial Services"
                  className="h-28 w-auto hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-4 py-3 text-base font-semibold transition-colors hover:bg-blue-50 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-4 py-3 text-base font-semibold transition-colors hover:bg-blue-50 rounded-lg"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 px-4 py-3 text-base font-semibold transition-colors hover:bg-blue-50 rounded-lg"
              >
                Services
              </Link>
              <Link
                href="/leadership"
                className="text-gray-700 hover:text-blue-600 px-4 py-3 text-base font-semibold transition-colors hover:bg-blue-50 rounded-lg"
              >
                Leadership
              </Link>
              {/* <Link
                href="#"
                className="text-gray-700 hover:text-blue-600 px-4 py-3 text-base font-semibold transition-colors hover:bg-blue-50 rounded-lg"
              >
                Media
              </Link> */}
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-4 py-3 text-base font-semibold transition-colors hover:bg-blue-50 rounded-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t shadow-lg">
            <Link 
              href="/" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-base font-semibold hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-base font-semibold hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-base font-semibold hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/leadership" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-base font-semibold hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Leadership
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-base font-semibold hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold rounded-full shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}