"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, UserCheck, Mail, Calendar } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us through forms (name, email, message)",
        "Technical information such as IP address, browser type, and device information",
        "Usage data including pages visited and time spent on the site",
        "Cookies and similar tracking technologies for site functionality and analytics",
      ],
    },
    {
      icon: <Lock className="h-6 w-6 text-purple-600" />,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide requested services",
        "To improve our website functionality and user experience",
        "To analyze site usage and optimize content",
        "To comply with legal obligations and protect our rights",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Data Protection",
      content: [
        "We implement appropriate security measures to protect your personal information",
        "Data is encrypted during transmission using SSL/TLS protocols",
        "Access to personal information is restricted to authorized personnel only",
        "We regularly review and update our security practices",
      ],
    },
    {
      icon: <UserCheck className="h-6 w-6 text-orange-600" />,
      title: "Your Rights",
      content: [
        "Right to access your personal information",
        "Right to correct or update your information",
        "Right to delete your personal information",
        "Right to object to processing of your information",
        "Right to data portability where applicable",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Policy
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
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
                This Privacy Policy describes how Tanzeem Raza Khan ("we," "our," or "us") collects, uses, and shares
                information about you when you visit our portfolio website. We are committed to protecting your privacy
                and ensuring the security of your personal information.
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

        {/* Cookies Section */}
        <ScrollReveal delay={800}>
          <Card className="mt-12 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience. These include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies</h4>
                    <p className="text-sm">Required for basic site functionality and security.</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Cookies</h4>
                    <p className="text-sm">Help us understand how visitors interact with our site.</p>
                  </div>
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About Privacy?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or how we handle your personal information, please
                don't hesitate to contact us.
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

        {/* Footer Note */}
        <ScrollReveal delay={1200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This privacy policy is effective as of January 2024 and may be updated from time to time. We will notify
              you of any significant changes by posting the new policy on this page.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
