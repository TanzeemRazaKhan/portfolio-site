"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertTriangle, Scale, Users, Mail, Calendar } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function TermsOfService() {
  const sections = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use this website",
        "We reserve the right to modify these terms at any time without prior notice",
        "Your continued use of the site constitutes acceptance of any changes",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Use of Website",
      content: [
        "This website is for informational and portfolio purposes only",
        "You may view, download, and print content for personal, non-commercial use",
        "You may not modify, distribute, or reproduce content without permission",
        "Commercial use of any content requires explicit written consent",
      ],
    },
    {
      icon: <Scale className="h-6 w-6 text-green-600" />,
      title: "Intellectual Property",
      content: [
        "All content, including text, images, code, and design, is owned by Tanzeem Raza Khan",
        "Third-party libraries and frameworks are used under their respective licenses",
        "Project examples may contain proprietary information and are for demonstration only",
        "Unauthorized use of intellectual property may result in legal action",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />,
      title: "Disclaimers",
      content: [
        "Information is provided 'as is' without warranties of any kind",
        "We do not guarantee the accuracy or completeness of information",
        "Use of this website is at your own risk",
        "We are not liable for any damages arising from use of this website",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Service
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website. These terms govern your use of our services.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Last updated: January 2024</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Introduction */}
        <ScrollReveal delay={200}>
          <Card className="mb-12 hover-lift">
            <CardContent className="p-8">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                These Terms of Service ("Terms") govern your use of the portfolio website operated by Tanzeem Raza Khan.
                By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <ScrollReveal key={index} delay={index * 200} direction={index % 2 === 0 ? "left" : "right"}>
              <Card className="hover-lift hover-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg animate-float"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {section.icon}
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 animate-fade-in"
                        style={{ animationDelay: `${itemIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Terms */}
        <ScrollReveal delay={800}>
          <Card className="mt-12 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl">Additional Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Forms</h4>
                  <p>
                    Information submitted through contact forms will be used solely for communication purposes and
                    handled according to our Privacy Policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">External Links</h4>
                  <p>
                    Our website may contain links to external sites. We are not responsible for the content or privacy
                    practices of these sites.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Governing Law</h4>
                  <p>
                    These terms are governed by the laws of India. Any disputes will be resolved in the courts of Uttar
                    Pradesh, India.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal delay={1000}>
          <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover-glow">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About These Terms?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                If you have any questions about these Terms of Service, please contact us and we'll be happy to help.
              </p>
              <a
                href="mailto:tanzeem.raza@example.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-scale"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </a>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
