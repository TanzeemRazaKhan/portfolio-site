"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Wrench } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

interface AnimatedProgressProps {
  value: number
  className?: string
}

function AnimatedProgress({ value, className }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      setProgress(value)
    }, 500)

    return () => clearTimeout(timer)
  }, [isVisible, value])

  return (
    <div ref={progressRef}>
      <Progress value={progress} className={`h-3 transition-all duration-1000 ease-out ${className}`} />
    </div>
  )
}

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "Angular", level: 92, description: "Advanced component architecture, RxJS, NgRx state management" },
        { name: "React", level: 85, description: "Hooks, Context API, Redux, Next.js framework" },
        { name: "TypeScript", level: 90, description: "Strong typing, interfaces, generics, decorators" },
        { name: "HTML5/CSS3", level: 95, description: "Semantic markup, Flexbox, Grid, animations" },
        { name: "JavaScript", level: 88, description: "ES6+, async/await, DOM manipulation, modules" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS, responsive design, custom components" },
      ],
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications",
      skills: [
        { name: "ASP.NET Core", level: 94, description: "Web API, MVC, middleware, dependency injection" },
        { name: "C#", level: 92, description: "OOP, LINQ, async programming, design patterns" },
        {
          name: "Entity Framework",
          level: 88,
          description: "Code-first, migrations, LINQ queries, performance optimization",
        },
        { name: "SQL Server", level: 87, description: "T-SQL, stored procedures, indexing, query optimization" },
        { name: "Web API", level: 90, description: "RESTful services, authentication, versioning, documentation" },
        { name: "Node.js", level: 75, description: "Express.js, middleware, npm packages, server-side JavaScript" },
      ],
    },
    {
      icon: <Cloud className="h-8 w-8 text-green-600" />,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications in the cloud",
      skills: [
        { name: "Azure", level: 78, description: "App Services, SQL Database, Storage, Active Directory" },
        { name: "Docker", level: 72, description: "Containerization, Docker Compose, multi-stage builds" },
        { name: "Git/GitHub", level: 92, description: "Version control, branching strategies, pull requests, CI/CD" },
        { name: "CI/CD", level: 75, description: "Azure DevOps, GitHub Actions, automated testing and deployment" },
        { name: "IIS", level: 80, description: "Web server configuration, application pools, SSL certificates" },
      ],
    },
    {
      icon: <Wrench className="h-8 w-8 text-orange-600" />,
      title: "Tools & Technologies",
      description: "Development tools and productivity enhancers",
      skills: [
        { name: "Visual Studio", level: 95, description: "Advanced debugging, extensions, project templates" },
        { name: "VS Code", level: 90, description: "Extensions, integrated terminal, debugging, Git integration" },
        { name: "Postman", level: 88, description: "API testing, collections, environments, automation" },
        { name: "SSMS", level: 85, description: "Database management, query optimization, execution plans" },
        { name: "Figma", level: 70, description: "UI/UX design, prototyping, design systems" },
      ],
    },
  ]

  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "AZ-900-2024-001",
      description: "Cloud concepts, Azure services, security, privacy, compliance, and trust",
    },
    {
      name: "Angular Professional Certification",
      issuer: "Angular Team",
      date: "2023",
      credentialId: "ANG-PRO-2023-456",
      description: "Advanced Angular concepts, architecture patterns, and best practices",
    },
    {
      name: "ASP.NET Core Developer",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "ASPNET-DEV-2023-789",
      description: "Web API development, security, performance optimization",
    },
  ]

  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Team Leadership", level: 85 },
    { name: "Communication", level: 90 },
    { name: "Project Management", level: 80 },
    { name: "Mentoring", level: 88 },
    { name: "Agile/Scrum", level: 85 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Here's a comprehensive overview of my technical skills, proficiency levels, and the technologies I work
              with to build modern, scalable applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={categoryIndex}
              delay={categoryIndex * 200}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover-glow transition-all duration-300 animate-float"
                      style={{ animationDelay: `${categoryIndex * 0.5}s` }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{category.title}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <ScrollReveal key={skillIndex} delay={skillIndex * 100}>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <Badge variant="outline" className="text-xs animate-pulse">
                            {skill.level}%
                          </Badge>
                        </div>
                        <AnimatedProgress value={skill.level} />
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{skill.description}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} delay={index * 200} direction="scale">
                  <Card className="hover:shadow-lg transition-all duration-300 hover-lift hover-glow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-900 dark:text-white mb-2">{cert.name}</CardTitle>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{cert.issuer}</p>
                        </div>
                        <Badge variant="secondary" className="animate-pulse">
                          {cert.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cert.description}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Credential ID: <span className="font-mono">{cert.credentialId}</span>
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Soft Skills */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Soft Skills & Leadership
            </h2>
            <Card className="max-w-4xl mx-auto hover-lift">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => (
                    <ScrollReveal key={index} delay={index * 100}>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <AnimatedProgress value={skill.level} />
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Tech Stack Icons */}
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technology Stack</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              {[
                { name: "Angular", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
                { name: "React", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                { name: "C#", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
                { name: "TypeScript", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
                { name: "SQL", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
                { name: "Azure", color: "text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
                { name: "Git", color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
                { name: "Docker", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
              ].map((tech, index) => (
                <ScrollReveal key={index} delay={index * 100} direction="scale">
                  <div className="flex flex-col items-center group">
                    <div
                      className={`w-16 h-16 rounded-xl ${tech.bg} flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300 hover-scale hover-glow animate-float`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span className={`text-2xl font-bold ${tech.color}`}>{tech.name.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{tech.name}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
