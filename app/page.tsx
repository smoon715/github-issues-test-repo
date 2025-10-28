import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code, Github, Star, ExternalLink } from 'lucide-react'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/example/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      stars: 42,
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Payment processing with Stripe',
        'Admin dashboard for management',
        'Order tracking and history'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team features, and project organization capabilities.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/example/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      stars: 28,
      features: [
        'Real-time collaboration',
        'Drag-and-drop task organization',
        'Team and project management',
        'Task assignment and due dates',
        'Progress tracking and analytics',
        'File attachments'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive charts, and detailed weather information.',
      image: '/api/placeholder/600/400',
      tech: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Vuex', 'SCSS'],
      githubUrl: 'https://github.com/example/weather-dashboard',
      liveUrl: 'https://weather-demo.com',
      stars: 15,
      features: [
        'Location-based weather forecasts',
        'Interactive temperature charts',
        'Weather alerts and notifications',
        '7-day forecast with hourly details',
        'Location search and favorites',
        'Customizable dashboard layout'
      ]
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with rooms, private messaging, and file sharing capabilities.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Multer', 'JWT'],
      githubUrl: 'https://github.com/example/chat-app',
      liveUrl: 'https://chat-demo.com',
      stars: 18,
      features: [
        'Real-time messaging',
        'Multiple chat rooms',
        'Private messaging',
        'File sharing support',
        'User presence indicators',
        'Message history'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Creative Developer
              <span className="block text-primary-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Showcasing innovative web applications and creative solutions built with modern technologies.
              Explore my work featuring React, Next.js, Vue.js, and full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="btn-primary inline-flex items-center">
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A visual showcase of my latest work, featuring innovative web applications and creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stars}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-primary-600 font-medium">
                        +{project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center inline-flex items-center justify-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center inline-flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/projects" className="btn-primary text-lg px-8 py-3">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? I&apos;d love to hear about your ideas and discuss how we can bring them to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
