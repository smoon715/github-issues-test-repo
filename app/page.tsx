'use client'

import Link from 'next/link'
import { ArrowRight, Code, Github, Zap, Users, Star, ExternalLink, Filter, Eye, User } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'fullstack',
      githubUrl: 'https://github.com/example/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      stars: 42,
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features. Built with modern React patterns and WebSocket integration.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      category: 'frontend',
      githubUrl: 'https://github.com/example/task-manager',
      liveUrl: 'https://taskmanager-demo.vercel.app',
      stars: 28,
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive charts. Responsive design with dark mode support.',
      tech: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      category: 'frontend',
      githubUrl: 'https://github.com/example/weather-dashboard',
      liveUrl: 'https://weather-demo.vercel.app',
      stars: 15,
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 4,
      title: 'REST API Server',
      description: 'Scalable REST API built with Express.js and MongoDB. Includes authentication, rate limiting, and comprehensive documentation.',
      tech: ['Express.js', 'MongoDB', 'JWT', 'Swagger'],
      category: 'backend',
      githubUrl: 'https://github.com/example/rest-api',
      liveUrl: 'https://api-demo.herokuapp.com/docs',
      stars: 33,
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'React Native mobile application for banking services with biometric authentication and real-time notifications.',
      tech: ['React Native', 'Redux', 'Firebase', 'Expo'],
      category: 'mobile',
      githubUrl: 'https://github.com/example/mobile-banking',
      liveUrl: 'https://expo.dev/@example/mobile-banking',
      stars: 67,
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization platform with D3.js and custom chart components. Supports multiple data formats and export options.',
      tech: ['D3.js', 'React', 'Python', 'Pandas'],
      category: 'data',
      githubUrl: 'https://github.com/example/data-viz',
      liveUrl: 'https://dataviz-demo.vercel.app',
      stars: 21,
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 7,
      title: 'DevOps Pipeline',
      description: 'Complete CI/CD pipeline setup with Docker, Kubernetes, and automated testing. Includes monitoring and deployment strategies.',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      category: 'devops',
      githubUrl: 'https://github.com/example/devops-pipeline',
      liveUrl: 'https://pipeline-docs.example.com',
      stars: 89,
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 8,
      title: 'Machine Learning Model',
      description: 'Predictive analytics model for customer behavior analysis. Built with Python, scikit-learn, and deployed with Flask.',
      tech: ['Python', 'scikit-learn', 'Flask', 'TensorFlow'],
      category: 'data',
      githubUrl: 'https://github.com/example/ml-model',
      liveUrl: 'https://ml-demo.herokuapp.com',
      stars: 45,
      image: '/api/placeholder/400/250',
      featured: false,
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'data', label: 'Data Science' },
    { id: 'devops', label: 'DevOps' },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="min-h-screen">
      {/* Gallery Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Creative Developer & Problem Solver
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Crafting digital experiences through code. Explore my portfolio of projects spanning web development, mobile apps, and data science.
            </p>
          </div>

          {/* Featured Projects Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Code className="h-12 w-12 text-primary-600" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                    <div className="flex space-x-4 justify-center">
                      <a
                        href={project.githubUrl}
                        className="text-white hover:text-primary-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="text-white hover:text-primary-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive showcase of my work across different technologies and domains.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">{project.title}</h3>
                    <div className="flex items-center text-gray-500 text-xs ml-2">
                      <Star className="h-3 w-3 mr-1" />
                      {project.stars}
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in collaborating? I&apos;m always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary inline-flex items-center">
              <User className="mr-2 h-4 w-4" />
              About Me
            </Link>
            <a
              href="mailto:contact@example.com"
              className="btn-secondary inline-flex items-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
