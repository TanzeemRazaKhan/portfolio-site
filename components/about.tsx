"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, MapPin, Download } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Education",
      description: "Bachelor's in Computer Science",
      details: "Specialized in Software Engineering and Web Development",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Certifications",
      description: "Microsoft Certified Developer",
      details: "Angular, ASP.NET Core, Azure Fundamentals",
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: "Location",
      description: "Bareilly, India",
      details: "Available for remote and on-site opportunities",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A dedicated Software Developer with expertise in full-stack development, passionate about creating efficient
            and scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate Software Developer with over 3 years of experience in building modern web applications.
              My expertise spans across frontend technologies like Angular and React, backend development with ASP.NET
              Core, and database management with SQL Server.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that are both functional and
              delightful. I'm always eager to learn new technologies and take on challenging projects that push the
              boundaries of what's possible.
            </p>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Angular",
              "React",
              "ASP.NET Core",
              "C#",
              "TypeScript",
              "SQL Server",
              "HTML5",
              "CSS3",
              "JavaScript",
              "Git",
              "Azure",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
