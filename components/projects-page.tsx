"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, Calendar, Users, Star, Eye } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import AnimatedCounter from "./animated-counter"

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution built with Angular frontend and ASP.NET Core backend. Features include user authentication, product catalog with advanced filtering, shopping cart functionality, secure payment integration with Stripe, order management, and admin dashboard for inventory management.",
      longDescription:
        "This full-stack e-commerce platform was designed to handle high-traffic scenarios with a focus on performance and user experience. The Angular frontend provides a responsive, mobile-first design with real-time updates. The ASP.NET Core backend implements clean architecture principles with proper separation of concerns, comprehensive error handling, and extensive logging.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Angular", "ASP.NET Core", "SQL Server", "Azure", "Stripe API", "SignalR"],
      category: "Full Stack",
      github: "#",
      demo: "#",
      duration: "4 months",
      teamSize: "5 developers",
      status: "Production",
      rating: 5,
      views: 1250,
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & wishlist",
        "Secure payment processing",
        "Order tracking & management",
        "Admin dashboard",
        "Real-time notifications",
        "Mobile responsive design",
      ],
    },
    {
      title: "Task Management System",
      description:
        "A collaborative project management tool with real-time updates, team collaboration features, advanced reporting capabilities, and integration with popular productivity tools. Built using React frontend with ASP.NET Core backend and SignalR for real-time communication.",
      longDescription:
        "This project management system was developed to streamline team collaboration and project tracking. It features a modern React interface with drag-and-drop functionality, real-time updates using SignalR, and comprehensive reporting tools. The system supports multiple project methodologies including Agile and Kanban.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "ASP.NET Core", "SignalR", "Entity Framework", "Chart.js", "Material-UI"],
      category: "Web App",
      github: "#",
      demo: "#",
      duration: "3 months",
      teamSize: "3 developers",
      status: "Production",
      rating: 5,
      views: 890,
      features: [
        "Project & task management",
        "Real-time collaboration",
        "Team chat & notifications",
        "Time tracking & reporting",
        "File sharing & comments",
        "Kanban & Gantt charts",
        "Role-based permissions",
        "Integration with third-party tools",
      ],
    },
    {
      title: "Inventory Management API",
      description:
        "A robust RESTful API for inventory management with comprehensive CRUD operations, JWT authentication, role-based authorization, and extensive API documentation using Swagger. Designed for scalability and performance with proper error handling and logging.",
      longDescription:
        "This inventory management API was built following REST principles and clean architecture patterns. It includes comprehensive validation, error handling, and logging mechanisms. The API supports bulk operations, advanced filtering, and provides detailed analytics for inventory tracking.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["ASP.NET Core", "Web API", "JWT", "Swagger", "AutoMapper", "FluentValidation"],
      category: "Backend",
      github: "#",
      demo: "#",
      duration: "2 months",
      teamSize: "2 developers",
      status: "Production",
      rating: 4,
      views: 650,
      features: [
        "RESTful API design",
        "JWT authentication",
        "Role-based authorization",
        "Comprehensive validation",
        "Swagger documentation",
        "Bulk operations support",
        "Advanced filtering & sorting",
        "Performance monitoring",
      ],
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive charts, weather alerts, and historical data analysis. Built with Angular and integrated with multiple weather APIs for accurate and comprehensive weather information.",
      longDescription:
        "This weather dashboard provides comprehensive weather information with beautiful visualizations. It features geolocation support, multiple weather data sources, and advanced charting capabilities. The application includes weather alerts, historical data analysis, and supports multiple locations.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Angular", "TypeScript", "Chart.js", "Weather API", "Geolocation API", "PWA"],
      category: "Frontend",
      github: "#",
      demo: "#",
      duration: "1.5 months",
      teamSize: "1 developer",
      status: "Production",
      rating: 4,
      views: 420,
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Interactive weather maps",
        "Weather alerts & notifications",
        "Historical data analysis",
        "Multiple location support",
        "Offline functionality (PWA)",
        "Responsive design",
      ],
    },
    {
      title: "Blog Management System",
      description:
        "A comprehensive content management system for blogs with rich text editor, category management, SEO optimization features, comment system, and social media integration. Built with Angular frontend and ASP.NET Core backend.",
      longDescription:
        "This blog management system provides a complete solution for content creators and bloggers. It features a powerful rich text editor, advanced SEO tools, social media integration, and comprehensive analytics. The system supports multiple authors, content scheduling, and automated backups.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Angular", "ASP.NET Core", "SQL Server", "Azure Blob Storage", "TinyMCE", "SEO Tools"],
      category: "Full Stack",
      github: "#",
      demo: "#",
      duration: "3.5 months",
      teamSize: "4 developers",
      status: "Production",
      rating: 5,
      views: 780,
      features: [
        "Rich text editor",
        "Category & tag management",
        "SEO optimization tools",
        "Comment system",
        "Social media integration",
        "Content scheduling",
        "Analytics dashboard",
        "Multi-author support",
      ],
    },
    {
      title: "Real-time Chat Application",
      description:
        "A modern real-time messaging application with group chats, file sharing, online status indicators, message encryption, and video calling capabilities. Built using Angular, SignalR, and ASP.NET Core with focus on security and performance.",
      longDescription:
        "This chat application provides enterprise-grade messaging capabilities with end-to-end encryption, file sharing, and video calling features. It supports large group conversations, message history, and advanced notification systems. The application is optimized for performance and can handle thousands of concurrent users.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Angular", "SignalR", "ASP.NET Core", "WebRTC", "Azure Storage", "Redis"],
      category: "Web App",
      github: "#",
      demo: "#",
      duration: "4 months",
      teamSize: "6 developers",
      status: "Production",
      rating: 5,
      views: 1100,
      features: [
        "Real-time messaging",
        "Group chat support",
        "File & media sharing",
        "Video & voice calls",
        "Message encryption",
        "Online status indicators",
        "Message history & search",
        "Push notifications",
      ],
    },
  ]

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Web App"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Here's a showcase of my recent projects that demonstrate my expertise in full-stack development, from
              concept to deployment. Each project represents unique challenges and innovative solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 mr-4">
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by:</span>
            </div>
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className={`hover-scale transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 animate-pulse-glow"
                    : "hover-glow"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200} direction={index % 2 === 0 ? "left" : "right"}>
              <Card
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover-glow group"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <Button size="sm" variant="secondary" className="animate-scale-in">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="animate-scale-in"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800 animate-slide-in-left">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Production" ? "default" : "secondary"}
                      className={`animate-slide-in-right ${
                        project.status === "Production"
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-yellow-600 hover:bg-yellow-700"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      <Eye className="h-3 w-3" />
                      {project.views}
                    </div>
                    <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {hoveredProject === index ? project.longDescription : project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600 animate-pulse" />
                      <span className="text-gray-600 dark:text-gray-400">{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600 animate-pulse" />
                      <span className="text-gray-600 dark:text-gray-400">{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-1 animate-fade-in"
                          style={{ animationDelay: `${featureIndex * 0.1}s` }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {project.features.length > 4 && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 animate-fade-in-delay">
                        +{project.features.length - 4} more features
                      </p>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover-scale transition-all duration-200 animate-fade-in"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 hover-scale" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 hover-scale" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Project Statistics */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: 15, suffix: "+", label: "Projects Completed", color: "text-blue-600 dark:text-blue-400" },
              { number: 10, suffix: "+", label: "Technologies Used", color: "text-purple-600 dark:text-purple-400" },
              { number: 3, suffix: "+", label: "Years Experience", color: "text-green-600 dark:text-green-400" },
              { number: 100, suffix: "%", label: "Client Satisfaction", color: "text-orange-600 dark:text-orange-400" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="scale">
                <Card className="text-center hover-lift hover-glow">
                  <CardContent className="pt-6">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* GitHub CTA */}
        <ScrollReveal>
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 hover-glow">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Want to see more of my work?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto animate-fade-in-delay">
              Check out my GitHub profile for more projects, contributions to open source, and code samples that
              demonstrate my development skills and coding standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="hover-scale animate-slide-up" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View All Projects on GitHub
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover-scale animate-slide-up animate-pulse-glow"
                style={{ animationDelay: "0.2s" }}
                asChild
              >
                <a href="/contact">Let's Work Together</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
