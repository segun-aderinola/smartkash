// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { ArrowRight, Award, Target, Shield, Heart, Mail, GraduationCap, Briefcase } from "lucide-react"
// import Footer from "@/components/footer"
// import Navbar from "@/components/navbar"

// export default function LeadershipPage() {
//   const [isVisible, setIsVisible] = useState({})

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     }

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionName = entry.target.id.replace("-section", "")
//           setIsVisible((prev) => ({
//             ...prev,
//             [sectionName]: true,
//             hero: true,
//             intro: true,
//             leadership: true,
//             values: true,
//             cta: true,
//           }))
//         }
//       })
//     }, observerOptions)

//     const sections = ["hero-section", "intro-section", "leadership-section", "values-section", "cta-section"]
//     sections.forEach((id) => {
//       const element = document.getElementById(id)
//       if (element) observer.observe(element)
//     })

//     return () => observer.disconnect()
//   }, [])

//   const executives = [
//     {
//       name: "Yomi Alale",
//       position: "Managing Director & Chief Executive Officer",
//       image: "/images/Yomi_Alale.JPG",
//       bio: "Seasoned business leader with extensive experience across banking, telecommunications, and food industry sectors.",
//       fullBio: `Yomi Alale is a seasoned business leader with extensive experience across multiple sectors, including banking, telecommunications, and the food industry. He holds a Higher National Diploma in Business Administration and Management from Federal Polytechnic Offer, a Postgraduate Diploma from Lagos State University, and an MBA with a specialization in Cost Management from Ladoke Akintola University of Technology, Ogbomoso. He is also a certified member of the Institute of Cost Management Nigeria (ICMN).

// Yomi began his professional journey in the banking industry, serving as a Sales Manager at PSL, a subsidiary of Prudent Bank. He subsequently joined Prudent Bank (now Polaris Bank), where he gained valuable cross-departmental experience. He notably headed the Foreign Operations Reconciliation Unit before resigning from Skye Bank in 2010 as a Senior Officer.

// Beyond banking, Yomi is an accomplished entrepreneur. He is the founder of Yagocom Nigeria Limited, a strategic partner with Airtel Nigeria in the telecommunications sector. He also serves as the Chairman of Yago Food Company, demonstrating his versatility and entrepreneurial spirit.

// As Managing Director and Chief Executive Officer of Smart Kash Financials, he leverages his diverse background to drive innovation, growth, and sustainable success for the organization.`,
//       education: [
//         "MBA in Cost Management - LAUTECH",
//         "PGD - Lagos State University",
//         "HND Business Admin - Federal Polytechnic Offer",
//       ],
//       certifications: ["Institute of Cost Management Nigeria (ICMN)"],
//       experience: [
//         "MD/CEO - SmartKash Financials",
//         "Chairman - Yago Food Company",
//         "Founder - Yagocom Nigeria Limited",
//         "Senior Officer - Skye Bank",
//       ],
//     },
//     {
//       name: "Bello Oluwatoyin Lois",
//       position: "Executive Director",
//       image: "/images/Bello_Oluwatoyin_Lois.jpeg",
//       bio: "Dedicated professional with expertise in financial management, operations, and strategic planning across multiple business functions.",
//       fullBio: `Bello Oluwatoyin Lois is a dedicated professional with a Bachelor of Science degree in Geography Science and a Chartered Certificate in Management. Her academic background provides her with a solid foundation in spatial analysis and environmental management, while her management certification has honed her leadership and strategic planning skills.

// She currently serves as Financial Controller at SmartKash Financials, where she oversees financial operations, budgeting, and reporting to ensure the company's financial health and compliance. Her diverse background spans various capacities including administration, production management, customer service, and marketing.

// With extensive experience at Yagocom Nigeria Limited in multiple roles - from Administrator to Production/Purchasing Manager, Customer Service Manager, and Marketing Executive - she brings a comprehensive understanding of business operations and client relationship management.

// Her passion for driving sustainable growth and contributing to innovative solutions within the financial industry makes her an invaluable asset to the SmartKash leadership team.`,
//       education: ["BSc Geography Science", "Chartered Certificate in Management"],
//       certifications: ["Chartered Management Certificate"],
//       experience: [
//         "Executive Director - SmartKash Financials",
//         "Financial Controller - Finance Company",
//         "Multiple Leadership Roles - Yagocom Nigeria Limited",
//       ],
//     },
//   ]

//   const values = [
//     {
//       icon: <Award className="h-8 w-8" />,
//       title: "Excellence",
//       description:
//         "We strive for the highest standards in everything we do, delivering exceptional results for our clients.",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       icon: <Target className="h-8 w-8" />,
//       title: "Innovation",
//       description: "We embrace cutting-edge technology and creative solutions to stay ahead in the financial industry.",
//       color: "bg-purple-100 text-purple-600",
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Integrity",
//       description: "We operate with the highest ethical standards, building trust through transparency and honesty.",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       icon: <Heart className="h-8 w-8" />,
//       title: "Customer Focus",
//       description: "Our clients are at the center of everything we do, and we're committed to their financial success.",
//       color: "bg-red-100 text-red-600",
//     },
//   ]

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-white">
//         <style jsx>{`
//           @keyframes fadeInUp {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes fadeInLeft {
//             from {
//               opacity: 0;
//               transform: translateX(-30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           @keyframes fadeInRight {
//             from {
//               opacity: 0;
//               transform: translateX(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           @keyframes scaleIn {
//             from {
//               opacity: 0;
//               transform: scale(0.9);
//             }
//             to {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }

//           .animate-fade-in-up {
//             animation: fadeInUp 0.8s ease-out forwards;
//           }

//           .animate-fade-in-left {
//             animation: fadeInLeft 0.8s ease-out forwards;
//           }

//           .animate-fade-in-right {
//             animation: fadeInRight 0.8s ease-out forwards;
//           }

//           .animate-scale-in {
//             animation: scaleIn 0.6s ease-out forwards;
//           }
//         `}</style>

//         {/* Hero Section */}
//         <section
//           id="hero-section"
//           className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 lg:py-28 relative overflow-hidden"
//         >
//           {/* Floating Elements */}
//           <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
//           <div
//             className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
//             style={{ animationDelay: "1s" }}
//           ></div>
//           <div
//             className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float"
//             style={{ animationDelay: "2s" }}
//           ></div>

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div
//               className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
//                 isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             >
//               <div className="inline-block mb-6">
//                 <span className="bg-white/20 backdrop-blur-sm text-white text-lg font-medium px-6 py-3 rounded-full border border-white/30">
//                   LEADERSHIP TEAM
//                 </span>
//               </div>
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Our Leadership</h1>
//               <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
//                 Meet the visionary leaders driving SmartKash towards excellence, innovation, and sustainable growth in
//                 the financial services industry.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Introduction Section */}
//         <section id="intro-section" className="py-20 lg:py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div
//               className={`max-w-5xl mx-auto text-center transition-all duration-1000 delay-200 ${
//                 isVisible.intro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Driven by Excellence & Innovation</h2>
//               <p className="text-xl text-gray-600 leading-relaxed mb-12">
//                 At SmartKash Financials Limited, our leadership team is driven by a commitment to excellence,
//                 innovation, and integrity. With a wealth of experience in the financial industry, our leaders guide the
//                 company with a clear vision and a dedication to fostering growth for our clients, employees, and
//                 stakeholders.
//               </p>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Meet the talented individuals who are shaping the future of financial services and leading us towards
//                 delivering impactful, customer-focused solutions.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Executive Leadership Section - Zig-Zag Layout */}
//         <section id="leadership-section" className="py-20 lg:py-24 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div
//               className={`text-center mb-16 transition-all duration-1000 ${
//                 isVisible.leadership ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Executive Leadership</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Experienced professionals committed to driving growth and innovation in financial services.
//               </p>
//               <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
//             </div>

//             {/* Executive Profiles - Modern Layout */}
//             <div className="space-y-16">
//               {executives.map((executive, index) => (
//                 <div
//                   key={index}
//                   className={`${
//                     index === 1 ? "bg-gray-900 text-white" : "bg-white"
//                   } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
//                     isVisible.leadership ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                   }`}
//                   style={{ transitionDelay: `${index * 200}ms` }}
//                 >
//                   <div
//                     className={`grid md:grid-cols-12 gap-6 p-6 md:p-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
//                   >
//                     {/* Image Section - Takes 4 columns on desktop */}
//                     <div className={`md:col-span-4 ${index % 2 === 1 ? "md:col-start-9" : ""}`}>
//                       <div className="relative">
//                         <img
//                           src={executive.image || "/placeholder.svg"}
//                           alt={executive.name}
//                           className="w-full h-auto object-cover rounded-lg shadow-md"
//                         />
//                         {index === 1 && (
//                           <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-2 shadow-md border border-white/20">
//                             <div className="flex items-center space-x-2">
//                               <Award className="h-4 w-4 text-blue-400" />
//                               <span className="text-md font-semibold text-white">15+ Years</span>
//                             </div>
//                           </div>
//                         )}
//                         {index === 0 && (
//                           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
//                             <div className="flex items-center space-x-2">
//                               <Award className="h-4 w-4 text-blue-600" />
//                               <span className="text-md font-semibold text-gray-900">15+ Years</span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Content Section - Takes 8 columns on desktop */}
//                     <div className={`md:col-span-8 ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
//                       <div className="space-y-5">
//                         <div>
//                           <h3 className={`text-3xl font-bold ${index === 1 ? "text-white" : "text-gray-900"}`}>
//                             {executive.name}
//                           </h3>
//                           <p
//                             className={`text-lg font-semibold mt-1 ${index === 1 ? "text-blue-400" : "text-blue-600"}`}
//                           >
//                             {executive.position}
//                           </p>
//                         </div>

//                         <p className={`leading-relaxed ${index === 1 ? "text-gray-300" : "text-gray-600"}`}>
//                           {executive.bio}
//                         </p>

//                         <div className="grid md:grid-cols-2 gap-6 mt-6">
//                           <div>
//                             <div className="flex items-center space-x-2 mb-3">
//                               <GraduationCap
//                                 className={`h-5 w-5 ${index === 1 ? "text-purple-400" : "text-purple-600"}`}
//                               />
//                               <h4 className={`font-semibold ${index === 1 ? "text-white" : "text-gray-900"}`}>
//                                 Education
//                               </h4>
//                             </div>
//                             <ul className="space-y-1">
//                               {executive.education.map((edu, eduIndex) => (
//                                 <li
//                                   key={eduIndex}
//                                   className={`text-md ${index === 1 ? "text-gray-300" : "text-gray-600"}`}
//                                 >
//                                   • {edu}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>

//                           <div>
//                             <div className="flex items-center space-x-2 mb-3">
//                               <Briefcase className={`h-5 w-5 ${index === 1 ? "text-green-400" : "text-green-600"}`} />
//                               <h4 className={`font-semibold ${index === 1 ? "text-white" : "text-gray-900"}`}>
//                                 Key Experience
//                               </h4>
//                             </div>
//                             <ul className="space-y-1">
//                               {executive.experience.slice(0, 3).map((exp, expIndex) => (
//                                 <li
//                                   key={expIndex}
//                                   className={`text-md ${index === 1 ? "text-gray-300" : "text-gray-600"}`}
//                                 >
//                                   • {exp}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>

//                         <div>
//                           <div className="flex items-center space-x-2 mb-3">
//                             <Award className={`h-5 w-5 ${index === 1 ? "text-orange-400" : "text-orange-600"}`} />
//                             <h4 className={`font-semibold ${index === 1 ? "text-white" : "text-gray-900"}`}>
//                               Certifications
//                             </h4>
//                           </div>
//                           <div className="flex flex-wrap gap-2">
//                             {executive.certifications.map((cert, certIndex) => (
//                               <span
//                                 key={certIndex}
//                                 className={`text-md font-medium px-3 py-1 rounded-full ${
//                                   index === 1
//                                     ? "bg-blue-900/50 text-blue-300 border border-blue-700"
//                                     : "bg-blue-100 text-blue-800"
//                                 }`}
//                               >
//                                 {cert}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Leadership Values */}
//         <section id="values-section" className="py-20 lg:py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div
//               className={`text-center mb-16 transition-all duration-1000 ${
//                 isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Values</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 The core principles that guide our leadership team in driving organizational success.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => (
//                 <Card
//                   key={index}
//                   className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
//                     isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                   }`}
//                   style={{ transitionDelay: `${index * 150}ms` }}
//                 >
//                   <CardContent className="p-8 text-center">
//                     <div
//                       className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}
//                     >
//                       {value.icon}
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
//                     <p className="text-gray-600 text-md leading-relaxed">{value.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section
//           id="cta-section"
//           className="py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-black/10"></div>
//           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//             <div
//               className={`transition-all duration-1000 ${
//                 isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Path to Financial Success Today</h2>
//               <p className="text-xl md:text-2xl mb-8 opacity-90">Got questions? We're here to help!</p>
//               <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto">
//                 Our experienced leadership team and dedicated professionals are ready to guide you on your financial
//                 journey. Connect with us today to explore how we can help you achieve your goals.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button
//                   size="lg"
//                   className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   Get Started Today
//                   <ArrowRight className="ml-3 h-6 w-6" />
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-full text-xl font-semibold"
//                 >
//                   Contact Leadership
//                   <Mail className="ml-3 h-6 w-6" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   )
// }
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Target,
  Shield,
  Heart,
  Mail,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LeadershipPage() {
  const [isVisible, setIsVisible] = useState({});
  const [expandedBios, setExpandedBios] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleBio = (index: number) => {
    setExpandedBios((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id.replace("-section", "");
          setIsVisible((prev) => ({
            ...prev,
            [sectionName]: true,
            hero: true,
            intro: true,
            leadership: true,
            values: true,
            cta: true,
          }));
        }
      });
    }, observerOptions);

    const sections = [
      "hero-section",
      "intro-section",
      "leadership-section",
      "values-section",
      "cta-section",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const executives = [
    {
      name: "Yomi Alale",
      position: "Managing Director & Chief Executive Officer",
      image: "/images/Yomi_Alale.JPG",
      bio: "Seasoned business leader with extensive experience across banking, telecommunications, and food industry sectors.",
      fullBio: `Yomi Alale is a seasoned business leader with extensive experience across multiple sectors, including banking, telecommunications, and the food industry. He holds a Higher National Diploma in Business Administration and Management from Federal Polytechnic Offer, a Postgraduate Diploma from Lagos State University, and an MBA with a specialization in Cost Management from Ladoke Akintola University of Technology, Ogbomoso. He is also a certified member of the Institute of Cost Management Nigeria (ICMN).

Yomi began his professional journey in the banking industry, serving as a Sales Manager at PSL, a subsidiary of Prudent Bank. He subsequently joined Prudent Bank (now Polaris Bank), where he gained valuable cross-departmental experience. He notably headed the Foreign Operations Reconciliation Unit before resigning from Skye Bank in 2010 as a Senior Officer.

Beyond banking, Yomi is an accomplished entrepreneur. He is the founder of Yagocom Nigeria Limited, a strategic partner with Airtel Nigeria in the telecommunications sector. He also serves as the Chairman of Yago Food Company, demonstrating his versatility and entrepreneurial spirit.

As Managing Director and Chief Executive Officer of Smart Kash Financials, he leverages his diverse background to drive innovation, growth, and sustainable success for the organization.`,
      education: [
        "MBA in Cost Management - LAUTECH",
        "PGD - Lagos State University",
        "HND Business Admin - Federal Polytechnic Offer",
      ],
      certifications: ["Institute of Cost Management Nigeria (ICMN)"],
      experience: [
        "MD/CEO - SmartKash Financials",
        "Chairman - Yago Food Company",
        "Founder - Yagocom Nigeria Limited",
        "Senior Officer - Skye Bank",
      ],
    },
    {
      name: "Bello Oluwatoyin Lois",
      position: "Executive Director",
      image: "/images/Bello_Oluwatoyin_Lois.jpeg",
      bio: "Dedicated professional with expertise in financial management, operations, and strategic planning across multiple business functions.",
      fullBio: `Bello Oluwatoyin Lois is a dedicated professional with a Bachelor of Science degree in Geography Science and a Chartered Certificate in Management. Her academic background provides her with a solid foundation in spatial analysis and environmental management, while her management certification has honed her leadership and strategic planning skills.

She currently serves as Financial Controller at SmartKash Financials, where she oversees financial operations, budgeting, and reporting to ensure the company's financial health and compliance. Her diverse background spans various capacities including administration, production management, customer service, and marketing.

With extensive experience at Yagocom Nigeria Limited in multiple roles - from Administrator to Production/Purchasing Manager, Customer Service Manager, and Marketing Executive - she brings a comprehensive understanding of business operations and client relationship management.

Her passion for driving sustainable growth and contributing to innovative solutions within the financial industry makes her an invaluable asset to the SmartKash leadership team.`,
      education: [
        "BSc Geography Science",
        "Chartered Certificate in Management",
      ],
      certifications: ["Chartered Management Certificate"],
      experience: [
        "Executive Director - SmartKash Financials",
        "Financial Controller - Finance Company",
        "Multiple Leadership Roles - Yagocom Nigeria Limited",
      ],
    },
  ];

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
      description:
        "We embrace cutting-edge technology and creative solutions to stay ahead in the financial industry.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description:
        "We operate with the highest ethical standards, building trust through transparency and honesty.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer Focus",
      description:
        "Our clients are at the center of everything we do, and we're committed to their financial success.",
      color: "bg-red-100 text-red-600",
    },
  ];

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
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white text-lg font-medium px-6 py-3 rounded-full border border-white/30">
                  LEADERSHIP TEAM
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                Our Leadership
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Meet the visionary leaders driving SmartKash towards excellence,
                innovation, and sustainable growth in the financial services
                industry.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="intro-section" className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`max-w-5xl mx-auto text-center transition-all duration-1000 delay-200 ${
                isVisible.intro
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Driven by Excellence & Innovation
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                At SmartKash Financials Limited, our leadership team is driven
                by a commitment to excellence, innovation, and integrity. With a
                wealth of experience in the financial industry, our leaders
                guide the company with a clear vision and a dedication to
                fostering growth for our clients, employees, and stakeholders.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Meet the talented individuals who are shaping the future of
                financial services and leading us towards delivering impactful,
                customer-focused solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Leadership Section - Compact Cards */}
        <section id="leadership-section" className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible.leadership
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Executive Leadership
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals committed to driving growth and
                innovation in financial services.
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
            </div>

            {/* Executive Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {executives.map((executive, index) => (
                <div key={index} className="space-y-4">
                  {/* Main Executive Card */}
                  <Card
                    className={`${
                      index === 1 ? "border-gray-700" : "bg-white"
                    } border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      isVisible.leadership
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      {/* Image */}
                      <div className="relative mb-6">
                        <div className="w-35 h-35 mx-auto rounded-full overflow-hidden shadow-lg">
                          <img
                            src={executive.image || "/placeholder.svg"}
                            alt={executive.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className={`absolute top-2 right-2 ${
                            index === 1
                              ? "bg-white/10 border-white/20"
                              : "bg-white/90"
                          } backdrop-blur-sm rounded-lg p-2 shadow-md ${
                            index === 1 ? "border" : ""
                          }`}
                        ></div>
                      </div>

                      {/* Name and Position */}
                      <div className="text-center mb-6">
                        <h3 className={`text-2xl font-bold mb-2`}>
                          {executive.name}
                        </h3>
                        <p className={`text-lg font-semibold `}>
                          {executive.position}
                        </p>
                        <p className={`text-md mt-3`}>{executive.bio}</p>
                      </div>

                      {/* Read Bio Button */}
                      <div className="text-center">
                        <Button
                          onClick={() => toggleBio(index)}
                          //   variant={index === 1 ? "outline" : "default"}
                          className={`px-6 py-2 rounded-full transition-all duration-300`}
                        >
                          {expandedBios[index] ? "Hide Bio" : "Read Bio"}
                          <ArrowRight
                            className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                              expandedBios[index] ? "rotate-90" : ""
                            }`}
                          />
                        </Button>
                        {/* Collapsible Bio Section */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            expandedBios[index]
                              ? "max-h-screen opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <Card
                            className={`border-0 shadow-lg`}
                          >
                            <CardContent className="p-6">
                              {/* Full Bio */}
                              <div className="mb-6">
                                <h4
                                  className={`text-lg font-semibold mb-3 ${
                                    index === 1 ? "text-white" : "text-gray-900"
                                  }`}
                                >
                                  About {executive.name.split(" ")[0]}
                                </h4>
                                <p
                                  className={`text-md leading-relaxed`}
                                >
                                  {executive.fullBio}
                                </p>
                              </div>

                              {/* Education and Experience Grid */}
                              <div className="grid md:grid-cols-2 gap-6">
                                {/* Education */}
                                <div>
                                  <div className="flex items-center space-x-2 mb-3">
                                    <GraduationCap
                                      className={`h-5 w-5 ${
                                        index === 1
                                          ? "text-purple-400"
                                          : "text-purple-600"
                                      }`}
                                    />
                                    <h5
                                      className={`font-semibold ${
                                        index === 1
                                          ? "text-white"
                                          : "text-gray-900"
                                      }`}
                                    >
                                      Education
                                    </h5>
                                  </div>
                                  <ul className="space-y-2">
                                    {executive.education.map(
                                      (edu, eduIndex) => (
                                        <li
                                          key={eduIndex}
                                          className={`text-md flex items-start space-x-2 ${
                                            index === 1
                                              ? "text-gray-300"
                                              : "text-gray-600"
                                          }`}
                                        >
                                          <span
                                            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                              index === 1
                                                ? "bg-purple-400"
                                                : "bg-purple-600"
                                            }`}
                                          ></span>
                                          <span>{edu}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>

                                {/* Experience */}
                                <div>
                                  <div className="flex items-center space-x-2 mb-3">
                                    <Briefcase
                                      className={`h-5 w-5 ${
                                        index === 1
                                          ? "text-green-400"
                                          : "text-green-600"
                                      }`}
                                    />
                                    <h5
                                      className={`font-semibold ${
                                        index === 1
                                          ? "text-white"
                                          : "text-gray-900"
                                      }`}
                                    >
                                      Key Experience
                                    </h5>
                                  </div>
                                  <ul className="space-y-2">
                                    {executive.experience.map(
                                      (exp, expIndex) => (
                                        <li
                                          key={expIndex}
                                          className={`text-md flex items-start space-x-2 ${
                                            index === 1
                                              ? "text-gray-300"
                                              : "text-gray-600"
                                          }`}
                                        >
                                          <span
                                            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                              index === 1
                                                ? "bg-green-400"
                                                : "bg-green-600"
                                            }`}
                                          ></span>
                                          <span>{exp}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>

                              {/* Certifications */}
                              <div className="mt-6">
                                <div className="flex items-center space-x-2 mb-3">
                                  <Award
                                    className={`h-5 w-5 ${
                                      index === 1
                                        ? "text-orange-400"
                                        : "text-orange-600"
                                    }`}
                                  />
                                  <h5
                                    className={`font-semibold ${
                                      index === 1
                                        ? "text-white"
                                        : "text-gray-900"
                                    }`}
                                  >
                                    Certifications
                                  </h5>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {executive.certifications.map(
                                    (cert, certIndex) => (
                                      <span
                                        key={certIndex}
                                        className={`text-md font-medium px-3 py-1 rounded-full ${
                                          index === 1
                                            ? "bg-blue-900/50 text-blue-300 border border-blue-700"
                                            : "bg-blue-100 text-blue-800"
                                        }`}
                                      >
                                        {cert}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Values */}
        <section id="values-section" className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible.values
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leadership Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The core principles that guide our leadership team in driving
                organizational success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible.values
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-md leading-relaxed">
                      {value.description}
                    </p>
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
                isVisible.cta
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your Path to Financial Success Today
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Got questions? We're here to help!
              </p>
              <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto">
                Our experienced leadership team and dedicated professionals are
                ready to guide you on your financial journey. Connect with us
                today to explore how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-full text-xl font-semibold"
                >
                  Contact Leadership
                  <Mail className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
