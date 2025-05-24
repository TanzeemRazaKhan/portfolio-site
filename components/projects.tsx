"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Angular frontend and ASP.NET Core backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Angular", "ASP.NET Core", "SQL Server", "Azure"],
      category: "Full Stack",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "C#", "SignalR", "Entity Framework"],
      category: "Web App",
      github: "#",
      demo: "#",
    },
    {
      title: "Inventory Management API",
      description:
        "RESTful API for inventory management with CRUD operations, authentication, and comprehensive documentation using Swagger.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["ASP.NET Core", "Web API", "JWT", "Swagger"],
      category: "Backend",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive charts, and weather alerts using external APIs.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Angular", "TypeScript", "Chart.js", "Weather API"],
      category: "Frontend",
      github: "#",
      demo: "#",
    },
    {
      title: "Blog Management System",
      description:
        "A content management system for blogs with rich text editor, category management, and SEO optimization features.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
      category: "Full Stack",
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A real-time messaging application with group chats, file sharing, and online status indicators using SignalR.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Angular", "SignalR", "ASP.NET Core", "SQL Server"],
      category: "Web App",
      github: "#",
      demo: "#",
    },
  ]

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Web App"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, from concept to
            deployment.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Want to see more of my work?</p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
