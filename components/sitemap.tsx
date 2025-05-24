"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, User, Wrench, Briefcase, Mail, Shield, FileText, Map, ExternalLink } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"

export default function Sitemap() {
  const siteStructure = [
    {
      icon: <Home className="h-5 w-5 text-blue-600" />,
      title: "Home",
      href: "/",
      description: "Welcome page with hero section and overview",
    },
    {
      icon: <User className="h-5 w-5 text-purple-600" />,
      title: "About Me",
      href: "/about",
      description: "Personal background, education, and experience",
    },
    {
      icon: <Wrench className="h-5 w-5 text-green-600" />,
      title: "Skills",
      href: "/skills",
      description: "Technical skills, certifications, and expertise",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-orange-600" />,
      title: "Projects",
      href: "/projects",
      description: "Portfolio of completed projects and work samples",
    },
    {
      icon: <Mail className="h-5 w-5 text-red-600" />,
      title: "Contact",
      href: "/contact",
      description: "Get in touch for opportunities and collaborations",
    },
  ]

  const legalPages = [
    {
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      title: "Privacy Policy",
      href: "/privacy",
      description: "How we collect, use, and protect your information",
    },
    {
      icon: <FileText className="h-5 w-5 text-purple-600" />,
      title: "Terms of Service",
      href: "/terms",
      description: "Terms and conditions for using this website",
    },
    {
      icon: <Map className="h-5 w-5 text-green-600" />,
      title: "Sitemap",
      href: "/sitemap",
      description: "Complete overview of website structure and pages",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Site{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Map
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Navigate through all pages and sections of the portfolio website. Find exactly what you're looking for.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Pages */}
        <ScrollReveal delay={200}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Main Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteStructure.map((page, index) => (
                <ScrollReveal key={index} delay={index * 150} direction="scale">
                  <Card className="hover-lift hover-glow group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300 animate-float"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {page.icon}
                        </div>
                        {page.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{page.description}</p>
                      <Button variant="outline" size="sm" className="hover-scale" asChild>
                        <Link href={page.href}>
                          Visit Page
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Legal Pages */}
        <ScrollReveal delay={600}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Legal & Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <ScrollReveal key={index} delay={index * 150} direction="scale">
                  <Card className="hover-lift hover-glow group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300 animate-float"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        >
                          {page.icon}
                        </div>
                        {page.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{page.description}</p>
                      <Button variant="outline" size="sm" className="hover-scale w-full" asChild>
                        <Link href={page.href}>
                          View Page
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Navigation */}
        <ScrollReveal delay={800}>
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Navigation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Jump directly to any section of the website</p>
              <div className="flex flex-wrap justify-center gap-3">
                {siteStructure.map((page, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="hover-scale animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    asChild
                  >
                    <Link href={page.href}>
                      {page.icon}
                      <span className="ml-2">{page.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Contact CTA */}
        <ScrollReveal delay={1000}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Can't find what you're looking for?</p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover-scale animate-pulse-glow"
              asChild
            >
              <Link href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
