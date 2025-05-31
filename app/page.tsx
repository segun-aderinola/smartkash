"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Star,
  Bell,
} from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id
            .replace("-header", "")
            .replace("-content", "")
            .replace("-stats", "");
          setIsVisible((prev) => ({
            ...prev,
            [sectionName]: true,
            services: true,
            about: true,
            detailedServices: true,
            security: true,
            cta: true,
          }));
        }
      });
    }, observerOptions);

    // Observe sections as they come into view
    const sections = [
      "services-header",
      "about-content",
      "detailed-services-header",
      "security-header",
      "cta-content",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const heroSlides = [
    {
      title: "Empowering Your Financial Future",
      subtitle: "Smart solutions for the unbanked and underserved communities",
      image: "/images/Image_fx.png",
    },
    {
      title: "Building Wealth, Creating Opportunities",
      subtitle: "Tailored support for entrepreneurs and growing businesses",
      image: "/images/dcb31263139c0b2a1f9fe94cfee2f23549d6d4bb.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const services = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Quick Loans",
      description:
        "Fast, accessible loans for personal and business needs. Get the financial support you need to reach your goals.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Smart Investments",
      description:
        "Grow your wealth with strategic investment solutions. Expert guidance for maximum returns with minimal risk.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Banking",
      description:
        "24/7 access through mobile, online, and USSD platforms. Manage transactions and apply for loans anywhere.",
    },
  ];

  const detailedServices = [
    {
      title: "Credits and Loans",
      description:
        "Quick, accessible loans for individuals and businesses. Fast approval with flexible terms to help you grow.",
      icon: <CreditCard className="h-12 w-12" />,
    },
    {
      title: "Venture Capital",
      description:
        "Strategic funding for high-potential startups. We support early-stage companies with growth potential.",
      icon: <Building className="h-12 w-12" />,
    },
    {
      title: "Investment Products",
      description:
        "Structured investment solutions for solid returns. Expert advice for smart, informed investment decisions.",
      icon: <TrendingUp className="h-12 w-12" />,
    },
    {
      title: "Payment Services",
      description:
        "Efficient payroll and disbursement services. Secure, timely transactions for businesses and government.",
      icon: <Users className="h-12 w-12" />,
    },
    {
      title: "Digital Platforms",
      description:
        "Complete e-banking solutions. Mobile, online, and USSD access for all your banking needs.",
      icon: <Smartphone className="h-12 w-12" />,
    },
  ];

  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Two-factor authentication",
      description:
        "Enhanced security with multi-step verification for your protection.",
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "Biometric access",
      description:
        "Secure login with fingerprint and facial recognition technology.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
      title: "Fraud detection",
      description:
        "Real-time monitoring with instant alerts for suspicious activity.",
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-600" />,
      title: "End-to-end encryption",
      description:
        "Advanced encryption protecting your data from unauthorized access.",
    },
    {
      icon: <Bell className="h-8 w-8 text-teal-600" />,
      title: "Transaction alerts",
      description:
        "Instant notifications keeping you informed of all account activity.",
    },
    {
      icon: <Headphones className="h-8 w-8 text-purple-600" />,
      title: "24/7 Support",
      description:
        "Round-the-clock protection and assistance from our expert team.",
    },
  ];

  const values = [
    "Customer-Centric Approach",
    "Security and Privacy",
    "Reliable Support",
    "Inclusive Financial Solutions",
    "Financial Expertise",
    "Transparent Operations",
  ];

  return (
    <div className="bg-white">

      {/* Navigation Placeholder */}
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        />

        {/* Parallax Overlay */}
        <div
          className="absolute inset-0 bg-black/20"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Floating shapes - Responsive sizing */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-8 h-8 xs:w-10 xs:h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-10 sm:left-20 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-16 sm:right-32 w-10 h-10 xs:w-12 xs:h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-white/10 rounded-full animate-bounce"></div>

        <div className="relative z-10 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div
                className="space-y-4 sm:space-y-6 lg:space-y-8 text-white pt-16 sm:pt-20"
                style={{
                  transform: `translateY(${scrollY * 0.2}px)`,
                }}
              >
                <div className="inline-block">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm lg:text-base font-medium px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full border border-white/30">
                    FINANCIAL SOLUTIONS
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-90 max-w-lg">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>

              {/* Right Image Container - Static Single Image */}
              <div className="relative hero-image-container h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-screen flex items-end">
                {/* Static Background Image */}
                <div
                  className="absolute inset-0 hero-background-image"
                  style={{
                    backgroundImage: `url(/images/Image_fx.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Floating elements - Responsive positioning and sizing */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 animate-float z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
                    <div>
                      <div className="text-xs sm:text-sm lg:text-base font-semibold">120K+</div>
                      <div className="text-xs sm:text-sm opacity-80">Active Users</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 -left-2 sm:-left-4 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 animate-float delay-1000 z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
                    <div>
                      <div className="text-xs sm:text-sm lg:text-base font-semibold">₦2.5B+</div>
                      <div className="text-xs sm:text-sm opacity-80">Disbursed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide indicators - Responsive sizing */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
              isVisible.services
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="services-header"
            data-animate
          >
            <span className="bg-blue-100 text-blue-800 text-sm sm:text-base lg:text-lg font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full">
              QUICK SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 sm:mt-5 lg:mt-6 mb-3 sm:mb-4">
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable financial solutions designed for your success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 ${
                  isVisible.services
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                id={`service-${index}`}
                data-animate
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-7 lg:mb-8 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
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
                <span className="bg-blue-100 text-blue-800 text-sm sm:text-base font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full">
                  ABOUT US
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                About SmartKash
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  SmartKash delivers practical financial solutions for all your
                  needs. From credit access to business growth, our personalized
                  services help you achieve your goals effortlessly.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Our expert team understands your unique financial situation.
                  We provide quick loans, investment strategies, and
                  comprehensive support for individuals, entrepreneurs, and
                  small businesses.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Beyond basic banking, we offer financial education and
                  literacy programs. Trust SmartKash to handle your financial
                  future with care and expertise.
                </p>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                      120K+
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">Active Users</p>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                      ₦2.5B+
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">Loans Disbursed</p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                  <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                      99.9%
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">Security Rate</p>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Star className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                      4.9/5
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <span className="bg-blue-100 text-blue-800 text-sm sm:text-base font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-5 lg:mb-6">
              Our Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {detailedServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-6 sm:p-7 lg:p-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors text-sm sm:text-base px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <span className="bg-purple-100 text-purple-800 text-sm sm:text-base font-medium px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full">
              SECURITY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-5 lg:mb-6">
              Your Money is Protected at Every Step
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced encryption, real-time monitoring, and multi-factor
              authentication keep your finances secure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 sm:p-7 lg:p-8">
                  <div className="mb-4 sm:mb-5 lg:mb-6">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
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
            Start Your Financial Success Journey Today
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-7 lg:mb-8 opacity-90">
            Ready to transform your financial future?
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </section>

      {/* Footer Placeholder */}
      <Footer />
    </div>
  );
}