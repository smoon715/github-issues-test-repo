import { Code, Github, Linkedin, Mail, MapPin, Calendar, Award, BookOpen } from 'lucide-react'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools & DevOps', items: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'] },
  { category: 'Design', items: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Prototyping'] }
]

const experience = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    achievements: [
      'Led a team of 5 developers in building a scalable e-commerce platform',
      'Improved application performance by 40% through code optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2021 - 2022',
    description: 'Developed full-stack web applications from concept to deployment. Worked closely with product managers and designers to deliver user-centric solutions.',
    achievements: [
      'Built a real-time chat application serving 10,000+ users',
      'Created reusable component library used across 5+ projects',
      'Reduced bug reports by 50% through comprehensive testing'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'WebAgency Inc',
    period: '2020 - 2021',
    description: 'Focused on creating responsive and accessible user interfaces using modern frontend technologies.',
    achievements: [
      'Developed 15+ client websites with 100% mobile responsiveness',
      'Improved page load speeds by 35% through optimization',
      'Achieved 95+ Lighthouse scores for all projects'
    ]
  }
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    year: '2016 - 2020',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and web development.'
  },
  {
    degree: 'Full-Stack Web Development Bootcamp',
    school: 'CodeAcademy',
    year: '2020',
    description: 'Intensive 6-month program covering modern web development technologies and best practices.'
  }
]

const certifications = [
  'AWS Certified Developer Associate',
  'Google Cloud Professional Developer',
  'Certified Scrum Master (CSM)',
  'Microsoft Azure Fundamentals'
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="h-16 w-16 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 3 years of experience building modern web applications.
            I love creating user-friendly solutions that solve real-world problems.
          </p>
        </div>

        {/* Personal Info */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary-600 mr-3" />
              <span className="text-gray-600">San Francisco, CA</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary-600 mr-3" />
              <span className="text-gray-600">contact@example.com</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary-600 mr-3" />
              <span className="text-gray-600">Available for work</span>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 text-primary-600 mr-3" />
              <a href="https://github.com" className="text-primary-600 hover:text-primary-700">github.com/username</a>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              I started my journey in web development during my computer science studies, where I discovered my passion for creating digital solutions that make a difference. What began as curiosity about how websites work has evolved into a career focused on building scalable, user-friendly applications.
            </p>
            <p className="mb-4">
              Over the years, I've had the opportunity to work with diverse teams and technologies, from small startups to large enterprises. Each project has taught me something new and helped me grow as a developer. I'm particularly passionate about clean code, user experience, and staying up-to-date with the latest technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and always strive to improve my skills and help others grow.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary-200 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <span className="text-primary-600 font-medium">{job.period}</span>
                </div>
                <p className="text-primary-600 font-medium mb-3">{job.company}</p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <Award className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start">
                <BookOpen className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-primary-600 font-medium">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Award className="h-5 w-5 text-primary-600 mr-3" />
                <span className="text-gray-900 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="card text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@example.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
