"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Clock, MessageCircle, Calendar, CheckCircle } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "", projectType: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      value: "tanzeem.raza@example.com",
      link: "mailto:tanzeem.raza@example.com",
      description: "Best way to reach me for project inquiries",
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      description: "Available Mon-Fri, 9 AM - 6 PM IST",
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Location",
      value: "Bareilly, Uttar Pradesh, India",
      link: "#",
      description: "Open to remote work globally",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-white",
      description: "Check out my code repositories",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-600",
      description: "Connect with me professionally",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      name: "Email",
      url: "mailto:tanzeem.raza@example.com",
      color: "hover:text-red-600",
      description: "Send me a direct email",
    },
  ]

  const projectTypes = [
    "Web Application Development",
    "API Development",
    "E-commerce Solution",
    "Custom Software Development",
    "Consulting & Code Review",
    "Other",
  ]

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "I usually respond to emails within 24 hours during business days.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, I work with clients globally and am comfortable with different time zones.",
    },
    {
      question: "What's your preferred project size?",
      answer: "I work on projects of all sizes, from small features to large-scale applications.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer maintenance and support packages for all projects I develop.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, interesting projects, or just have a chat about
              technology. Let's connect and create something amazing together!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <ScrollReveal direction="left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <ScrollReveal key={index} delay={index * 200}>
                      <Card className="hover:shadow-lg transition-all duration-300 hover-lift hover-glow group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div
                              className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-all duration-300 animate-float"
                              style={{ animationDelay: `${index * 0.5}s` }}
                            >
                              {info.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{info.title}</h4>
                              {info.link !== "#" ? (
                                <a
                                  href={info.link}
                                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium hover-scale inline-block"
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-gray-700 dark:text-gray-300 font-medium">{info.value}</p>
                              )}
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="left" delay={400}>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <ScrollReveal key={index} delay={index * 100}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover-scale group"
                      >
                        <div
                          className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300 group-hover:animate-pulse`}
                        >
                          {social.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{social.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{social.description}</div>
                        </div>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Availability Status */}
            <ScrollReveal direction="left" delay={600}>
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800 hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Current Status</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">🟢 Available for new projects</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Currently accepting freelance projects and full-time opportunities
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right">
              <Card className="shadow-xl hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-blue-600 animate-pulse" />
                    Send a Message
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12 animate-scale-in">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ScrollReveal delay={100}>
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              type="text"
                              name="name"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full transition-all duration-300 focus:scale-105"
                            />
                          </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full transition-all duration-300 focus:scale-105"
                            />
                          </div>
                        </ScrollReveal>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ScrollReveal delay={300}>
                          <div>
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Subject *
                            </label>
                            <Input
                              id="subject"
                              type="text"
                              name="subject"
                              placeholder="Project inquiry, collaboration, etc."
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              className="w-full transition-all duration-300 focus:scale-105"
                            />
                          </div>
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                          <div>
                            <label
                              htmlFor="projectType"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Project Type
                            </label>
                            <select
                              id="projectType"
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-105"
                            >
                              <option value="">Select project type</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </ScrollReveal>
                      </div>

                      <ScrollReveal delay={500}>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          >
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full transition-all duration-300 focus:scale-105"
                          />
                        </div>
                      </ScrollReveal>

                      <ScrollReveal delay={600}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-lg py-3 hover-scale animate-pulse-glow transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </ScrollReveal>
                    </form>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {/* FAQ Section */}
        <ScrollReveal delay={800}>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 150} direction="scale">
                  <Card className="hover:shadow-lg transition-all duration-300 hover-lift hover-glow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Response Time & Availability */}
        <ScrollReveal delay={1000}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Quick Response",
                description: "Usually respond within 24 hours",
                color: "text-blue-600",
              },
              {
                icon: Calendar,
                title: "Flexible Schedule",
                description: "Available across different time zones",
                color: "text-purple-600",
              },
              {
                icon: MessageCircle,
                title: "Clear Communication",
                description: "Regular updates and transparent process",
                color: "text-green-600",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="scale">
                <Card className="text-center hover-lift hover-glow">
                  <CardContent className="pt-6">
                    <item.icon
                      className={`h-8 w-8 ${item.color} mx-auto mb-3 animate-float`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
