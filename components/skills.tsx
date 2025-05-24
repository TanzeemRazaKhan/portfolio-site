"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Angular", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "ASP.NET Core", level: 92 },
        { name: "C#", level: 90 },
        { name: "Web API", level: 88 },
        { name: "Entity Framework", level: 85 },
        { name: "SQL Server", level: 87 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Azure", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Postman", level: 85 },
        { name: "Visual Studio", level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a breakdown of my technical skills and proficiency levels across different technologies and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Tech Stack</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {[
              { name: "Angular", color: "text-red-600" },
              { name: "React", color: "text-blue-500" },
              { name: "C#", color: "text-purple-600" },
              { name: "TypeScript", color: "text-blue-600" },
              { name: "SQL", color: "text-orange-500" },
              { name: "Azure", color: "text-blue-400" },
              { name: "Git", color: "text-orange-600" },
              { name: "VS Code", color: "text-blue-500" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div
                  className={`w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-2 group-hover:shadow-lg transition-shadow duration-300 ${tech.color}`}
                >
                  <span className="text-2xl font-bold">{tech.name.charAt(0)}</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
