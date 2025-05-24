"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Briefcase, Sparkles } from "lucide-react"
import Link from "next/link"
import AnimatedCounter from "./animated-counter"
import FloatingParticles from "./floating-particles"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Full Stack Developer", "Software Engineer", "Web Developer", "Problem Solver"]

  useEffect(() => {
    const typeText = () => {
      const currentRoleText = roles[currentRole]
      let i = 0
      const timer = setInterval(() => {
        if (i <= currentRoleText.length) {
          setTypedText(currentRoleText.slice(0, i))
          i++
        } else {
          clearInterval(timer)
          setTimeout(() => {
            // Clear text
            const clearTimer = setInterval(() => {
              if (i > 0) {
                setTypedText(currentRoleText.slice(0, i))
                i--
              } else {
                clearInterval(clearTimer)
                setCurrentRole((prev) => (prev + 1) % roles.length)
              }
            }, 50)
          }, 2000)
        }
      }, 100)
    }

    typeText()
  }, [currentRole])

  return (
    <>
      <FloatingParticles />
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="text-center max-w-5xl mx-auto relative z-10">
          {/* Profile Image with enhanced animations */}
          <div className="mb-8 animate-scale-in">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse-glow hover-glow relative group">
              <span className="text-6xl font-bold text-white">TRK</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Main Heading with stagger animation */}
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="inline-block animate-slide-in-left">Hi, I'm</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient inline-block animate-slide-in-right">
              Tanzeem Raza Khan
            </span>
          </h1>

          {/* Animated typing subtitle */}
          <div className="h-16 mb-6">
            <h2 className="text-2xl sm:text-4xl text-gray-600 dark:text-gray-300 font-semibold">
              <span className="inline-block animate-fade-in-delay">I'm a </span>
              <span className="text-blue-600 dark:text-blue-400 typewriter inline-block min-w-[300px] text-left">
                {typedText}
              </span>
            </h2>
          </div>

          {/* Description with fade-in animation */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-delay leading-relaxed">
            Passionate about creating innovative web applications with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400 hover:scale-105 inline-block transition-transform">
              Angular
            </span>
            ,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400 hover:scale-105 inline-block transition-transform">
              ASP.NET Core
            </span>
            , and modern technologies. Based in Bareilly, India, I specialize in building scalable, user-friendly
            digital solutions that drive business growth and enhance user experiences.
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { number: 3, suffix: "+", label: "Years Experience", delay: "0.2s" },
              { number: 15, suffix: "+", label: "Projects Completed", delay: "0.4s" },
              { number: 10, suffix: "+", label: "Technologies Mastered", delay: "0.6s" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover-lift animate-slide-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons with stagger animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {[
              { href: "/contact", icon: Mail, text: "Get In Touch", primary: true, delay: "0.8s" },
              { href: "/projects", icon: Briefcase, text: "View My Work", primary: false, delay: "1.0s" },
              { href: "/skills", icon: Code, text: "My Skills", primary: false, delay: "1.2s" },
            ].map((button, index) => (
              <Link key={index} href={button.href}>
                <Button
                  size="lg"
                  className={`text-lg px-8 py-3 hover-scale animate-slide-up ${
                    button.primary
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 animate-pulse-glow"
                      : ""
                  }`}
                  variant={button.primary ? "default" : "outline"}
                  style={{ animationDelay: button.delay }}
                >
                  <button.icon className="h-5 w-5 mr-2" />
                  {button.text}
                </Button>
              </Link>
            ))}
          </div>

          {/* Social Links with hover animations */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-delay-3">
            {[
              { href: "https://github.com", icon: Github, color: "hover:text-gray-900 dark:hover:text-white" },
              { href: "https://linkedin.com", icon: Linkedin, color: "hover:text-blue-600" },
              { href: "mailto:tanzeem.raza@example.com", icon: Mail, color: "hover:text-red-600" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                className={`text-gray-600 dark:text-gray-400 ${social.color} hover-scale transition-all duration-300 stagger-${index + 1}`}
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-8 w-8" />
                </a>
              </Button>
            ))}
          </div>

          {/* Scroll Down Arrow with bounce animation */}
          <Link href="/about">
            <Button variant="ghost" size="sm" className="animate-bounce hover:animate-pulse">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
