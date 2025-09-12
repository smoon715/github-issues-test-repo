import Link from 'next/link'
import { ArrowRight, Github, ExternalLink, Star, Calendar, Code } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.',
    longDescription: 'This comprehensive e-commerce platform was built from scratch using React for the frontend and Node.js with Express for the backend. The application includes a complete user management system, product catalog with search and filtering, shopping cart functionality, and integrated payment processing using Stripe. The admin dashboard allows for easy product and order management.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    stars: 42,
    forks: 8,
    createdAt: '2024-01-15',
    status: 'completed',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Admin dashboard for management',
      'Order tracking and history',
      'Email notifications',
      'Responsive design'
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and project organization capabilities.',
    longDescription: 'Built with Next.js and TypeScript, this task management application provides a modern interface for team collaboration. Features include real-time updates using Socket.io, drag-and-drop task organization, team management, and project tracking. The application uses Prisma as an ORM and PostgreSQL for data persistence.',
    image: '/api/placeholder/600/400',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/example/task-manager',
    liveUrl: 'https://taskmanager-demo.com',
    stars: 28,
    forks: 5,
    createdAt: '2024-01-10',
    status: 'completed',
    features: [
      'Real-time collaboration',
      'Drag-and-drop task organization',
      'Team and project management',
      'Task assignment and due dates',
      'Progress tracking and analytics',
      'File attachments',
      'Comment system',
      'Mobile responsive design'
    ]
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive charts, and detailed weather information.',
    longDescription: 'This Vue.js application provides a comprehensive weather dashboard with location-based forecasts, interactive charts showing temperature trends, and detailed weather information. The app integrates with the OpenWeather API and includes features like location search, weather alerts, and customizable dashboard layouts.',
    image: '/api/placeholder/600/400',
    tech: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Vuex', 'SCSS'],
    githubUrl: 'https://github.com/example/weather-dashboard',
    liveUrl: 'https://weather-demo.com',
    stars: 15,
    forks: 3,
    createdAt: '2024-01-05',
    status: 'completed',
    features: [
      'Location-based weather forecasts',
      'Interactive temperature charts',
      'Weather alerts and notifications',
      '7-day forecast with hourly details',
      'Location search and favorites',
      'Customizable dashboard layout',
      'Weather maps integration',
      'PWA support for mobile'
    ]
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'A headless CMS for managing blog content with a modern admin interface and API-first architecture.',
    longDescription: 'This headless CMS was built using Strapi and provides a powerful admin interface for content management. The system includes a custom frontend built with Next.js, markdown support, image optimization, and SEO features. The API-first architecture allows for easy integration with any frontend framework.',
    image: '/api/placeholder/600/400',
    tech: ['Strapi', 'Next.js', 'GraphQL', 'MongoDB', 'Cloudinary', 'Vercel'],
    githubUrl: 'https://github.com/example/blog-cms',
    liveUrl: 'https://blog-cms-demo.com',
    stars: 22,
    forks: 4,
    createdAt: '2024-01-01',
    status: 'completed',
    features: [
      'Headless CMS architecture',
      'GraphQL API',
      'Markdown editor with preview',
      'Image optimization and CDN',
      'SEO optimization',
      'Multi-author support',
      'Content scheduling',
      'RSS feed generation'
    ]
  },
  {
    id: 5,
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with rooms, private messaging, and file sharing capabilities.',
    longDescription: 'Built with Socket.io and React, this chat application provides real-time messaging with support for multiple chat rooms, private messaging, file sharing, and user presence indicators. The application includes features like message history, emoji reactions, and user typing indicators.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Multer', 'JWT'],
    githubUrl: 'https://github.com/example/chat-app',
    liveUrl: 'https://chat-demo.com',
    stars: 18,
    forks: 6,
    createdAt: '2023-12-20',
    status: 'completed',
    features: [
      'Real-time messaging',
      'Multiple chat rooms',
      'Private messaging',
      'File sharing support',
      'User presence indicators',
      'Message history',
      'Emoji reactions',
      'Typing indicators'
    ]
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    longDescription: 'This portfolio website showcases my work and skills with a clean, modern design. Built with Next.js and Tailwind CSS, it includes features like dark mode, smooth animations, and a contact form. The site is fully responsive and optimized for performance.',
    image: '/api/placeholder/600/400',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    stars: 12,
    forks: 2,
    createdAt: '2023-12-15',
    status: 'completed',
    features: [
      'Responsive design',
      'Dark mode support',
      'Smooth animations',
      'Contact form',
      'Project showcase',
      'Blog integration',
      'SEO optimized',
      'Fast loading'
    ]
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of web applications and projects I've built using modern technologies.
            Each project represents a different challenge and learning opportunity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <Code className="h-16 w-16 text-gray-400" />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Star className="h-4 w-4 mr-1" />
                    {project.stars}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {project.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
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

              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(project.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long'
                  })}
                </div>
                <div className="flex items-center">
                  <Github className="h-4 w-4 mr-1" />
                  {project.forks} forks
                </div>
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@example.com"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link href="/issues" className="btn-secondary inline-flex items-center justify-center">
                <Github className="mr-2 h-4 w-4" />
                View Issues Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
