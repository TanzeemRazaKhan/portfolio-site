"use client"

import { useState, useEffect } from "react"
import { X, Heart, Share2, Download, Filter, Search, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Sample gallery data - replace with your actual images
const galleryItems = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    title: "Mountain Landscape",
    category: "Nature",
    description: "Beautiful mountain scenery captured during sunrise",
    likes: 42,
    tags: ["landscape", "mountains", "sunrise"],
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=400",
    title: "City Architecture",
    category: "Architecture",
    description: "Modern building design in downtown area",
    likes: 28,
    tags: ["architecture", "city", "modern"],
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=400",
    title: "Portrait Photography",
    category: "Portrait",
    description: "Professional portrait session",
    likes: 65,
    tags: ["portrait", "people", "professional"],
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    title: "Ocean Waves",
    category: "Nature",
    description: "Peaceful ocean waves at sunset",
    likes: 38,
    tags: ["ocean", "waves", "sunset"],
  },
  {
    id: 5,
    src: "/placeholder.svg?height=500&width=400",
    title: "Street Art",
    category: "Art",
    description: "Colorful street art in urban setting",
    likes: 51,
    tags: ["art", "street", "colorful"],
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    title: "Food Photography",
    category: "Food",
    description: "Delicious gourmet meal presentation",
    likes: 33,
    tags: ["food", "gourmet", "photography"],
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=400",
    title: "Wildlife",
    category: "Nature",
    description: "Majestic wildlife in natural habitat",
    likes: 47,
    tags: ["wildlife", "animals", "nature"],
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=400",
    title: "Abstract Design",
    category: "Art",
    description: "Creative abstract composition",
    likes: 29,
    tags: ["abstract", "design", "creative"],
  },
]

const categories = ["All", "Nature", "Architecture", "Portrait", "Art", "Food"]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [likedImages, setLikedImages] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleLike = (id: number) => {
    setLikedImages((prev) => (prev.includes(id) ? prev.filter((imageId) => imageId !== id) : [...prev, id]))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4 animate-spin" />
            <p className="text-gray-600 dark:text-gray-400">Loading gallery...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Photo Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my collection of photography and creative works. Each image tells a unique story.
          </p>
        </div>

        {/* Search and Filter */}
        <div
          className={`mb-8 space-y-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="transition-all duration-200 hover:scale-105"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0 bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(item.id)
                    }}
                  >
                    <Heart
                      className={`h-4 w-4 transition-colors duration-200 ${likedImages.includes(item.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </Button>
                </div>

                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-blue-500/80 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </Badge>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Heart className="h-4 w-4" />
                    {item.likes + (likedImages.includes(item.id) ? 1 : 0)}
                  </div>
                  <div className="flex gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 animate-fadeIn">
            <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No photos found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <img
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>

                <div className="w-full md:w-80 p-6 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedImage.title}</h2>
                    <Badge className="mb-3">{selectedImage.category}</Badge>
                    <p className="text-gray-600 dark:text-gray-400">{selectedImage.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleLike(selectedImage.id)}
                        className="flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <Heart
                          className={`h-4 w-4 ${likedImages.includes(selectedImage.id) ? "fill-red-500 text-red-500" : ""}`}
                        />
                        {selectedImage.likes + (likedImages.includes(selectedImage.id) ? 1 : 0)}
                      </Button>
                      <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
