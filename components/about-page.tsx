"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, MapPin, Download, Calendar, Users, Target, Heart } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import AnimatedCounter from "./animated-counter"

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Education",
      description: "Bachelor's in Computer Science Engineering",
      details: "Graduated with First Class Honors, specialized in Software Engineering and Web Development",
      year: "2019-2023",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Certifications",
      description: "Microsoft Certified Developer",
      details: "Angular Professional, ASP.NET Core Specialist, Azure Fundamentals AZ-900",
      year: "2022-2024",
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: "Location",
      description: "Bareilly, Uttar Pradesh, India",
      details: "Available for remote work globally and on-site opportunities in North India",
      year: "Current",
    },
  ]

  const experience = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Pvt Ltd",
      period: "2023 - Present",
      description:
        "Leading full-stack development projects using Angular and ASP.NET Core. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines",
        "Reduced bug reports by 60%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2022 - 2023",
      description:
        "Developed and maintained web applications using Angular, ASP.NET Core, and SQL Server. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Delivered 8 major projects on time",
        "Improved user experience design",
        "Integrated third-party APIs",
        "Optimized database queries",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2021 - 2022",
      description:
        "Started my professional journey working on various web development projects. Gained hands-on experience with modern web technologies and agile development methodologies.",
      achievements: [
        "Completed 15+ small projects",
        "Learned industry best practices",
        "Contributed to open source",
        "Built responsive web applications",
      ],
    },
  ]

  const personalValues = [
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Innovation",
      description: "Always seeking creative solutions to complex problems",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Collaboration",
      description: "Believing in the power of teamwork and knowledge sharing",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Quality",
      description: "Committed to writing clean, maintainable, and efficient code",
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      title: "Growth",
      description: "Continuously learning and adapting to new technologies",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Me
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A passionate Software Developer with a strong foundation in full-stack development, dedicated to creating
              innovative solutions that make a real impact in the digital world.
            </p>
          </div>
        </ScrollReveal>

        {/* Personal Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p className="animate-fade-in">
                  My journey into software development began during my college years when I discovered the power of code
                  to solve real-world problems. What started as curiosity quickly became a passion that drives me every
                  day.
                </p>
                <p className="animate-fade-in-delay">
                  With over <AnimatedCounter end={3} suffix="+" /> years of professional experience, I've had the
                  privilege of working on diverse projects ranging from e-commerce platforms to enterprise management
                  systems. My expertise spans across frontend technologies like Angular and React, backend development
                  with ASP.NET Core, and database management with SQL Server.
                </p>
                <p className="animate-fade-in-delay-2">
                  I believe in the philosophy of continuous learning and staying updated with the latest industry
                  trends. This mindset has helped me adapt to new technologies quickly and deliver solutions that are
                  not just functional but also scalable and maintainable.
                </p>
                <p className="animate-fade-in-delay-3">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I'm based in Bareilly, India, but I work with teams
                  and clients from around the globe.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover-scale">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" className="hover-scale">
                  Contact Me
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <ScrollReveal key={index} delay={index * 200}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover-glow transition-all duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <Badge variant="outline" className="text-xs animate-pulse">
                              {item.year}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{item.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.details}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Professional Experience */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 300} direction={index % 2 === 0 ? "left" : "right"}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit animate-pulse">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-center gap-2 animate-fade-in"
                              style={{ animationDelay: `${achIndex * 0.1}s` }}
                            >
                              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Personal Values */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">What Drives Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalValues.map((value, index) => (
                <ScrollReveal key={index} delay={index * 150} direction="scale">
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover-lift hover-glow">
                    <CardContent className="pt-6">
                      <div
                        className="flex justify-center mb-4 animate-float"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Technologies Overview */}
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technologies I Work With</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm proficient in a wide range of technologies and always eager to learn new ones. Here's my current tech
              stack:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Angular",
                "React",
                "ASP.NET Core",
                "C#",
                "TypeScript",
                "JavaScript",
                "SQL Server",
                "Entity Framework",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
                "Git",
                "Azure",
                "Docker",
                "Postman",
                "Visual Studio",
                "VS Code",
              ].map((tech, index) => (
                <ScrollReveal key={tech} delay={index * 50}>
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 hover-scale cursor-pointer"
                  >
                    {tech}
                  </Badge>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
