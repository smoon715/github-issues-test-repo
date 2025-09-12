'use client'

import { useState } from 'react'
import { Search, Filter, Plus, Github, Calendar, User, Tag, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react'

interface Issue {
  id: number
  title: string
  description: string
  status: 'open' | 'closed' | 'in-progress'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  assignee: string
  labels: string[]
  createdAt: string
  updatedAt: string
  author: string
  comments: number
}

const testIssues: Issue[] = [
  {
    id: 1,
    title: 'Implement user authentication system',
    description: 'Add JWT-based authentication with login, register, and password reset functionality',
    status: 'open',
    priority: 'high',
    assignee: 'john-doe',
    labels: ['feature', 'auth', 'backend'],
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:45:00Z',
    author: 'jane-smith',
    comments: 5,
  },
  {
    id: 2,
    title: 'Fix responsive design on mobile devices',
    description: 'Mobile layout is broken on screens smaller than 768px. Need to fix navigation and card layouts.',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'alice-wilson',
    labels: ['bug', 'frontend', 'responsive'],
    createdAt: '2024-01-18T09:15:00Z',
    updatedAt: '2024-01-22T16:20:00Z',
    author: 'bob-johnson',
    comments: 3,
  },
  {
    id: 3,
    title: 'Add dark mode support',
    description: 'Implement dark/light theme toggle with system preference detection',
    status: 'open',
    priority: 'low',
    assignee: 'unassigned',
    labels: ['enhancement', 'ui', 'frontend'],
    createdAt: '2024-01-20T11:00:00Z',
    updatedAt: '2024-01-20T11:00:00Z',
    author: 'charlie-brown',
    comments: 1,
  },
  {
    id: 4,
    title: 'Database connection timeout error',
    description: 'Users are experiencing connection timeouts when loading large datasets. Need to optimize queries.',
    status: 'closed',
    priority: 'urgent',
    assignee: 'david-lee',
    labels: ['bug', 'database', 'performance'],
    createdAt: '2024-01-10T08:45:00Z',
    updatedAt: '2024-01-19T12:30:00Z',
    author: 'eve-davis',
    comments: 8,
  },
  {
    id: 5,
    title: 'Create API documentation',
    description: 'Generate comprehensive API documentation using OpenAPI/Swagger',
    status: 'open',
    priority: 'medium',
    assignee: 'frank-miller',
    labels: ['documentation', 'api'],
    createdAt: '2024-01-22T13:20:00Z',
    updatedAt: '2024-01-22T13:20:00Z',
    author: 'grace-taylor',
    comments: 0,
  },
]

const statusConfig = {
  open: { icon: AlertCircle, color: 'text-green-600 bg-green-100', label: 'Open' },
  'in-progress': { icon: Clock, color: 'text-blue-600 bg-blue-100', label: 'In Progress' },
  closed: { icon: CheckCircle, color: 'text-gray-600 bg-gray-100', label: 'Closed' },
}

const priorityConfig = {
  low: { color: 'text-gray-600 bg-gray-100', label: 'Low' },
  medium: { color: 'text-yellow-600 bg-yellow-100', label: 'Medium' },
  high: { color: 'text-orange-600 bg-orange-100', label: 'High' },
  urgent: { color: 'text-red-600 bg-red-100', label: 'Urgent' },
}

export default function IssuesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')

  const filteredIssues = testIssues.filter((issue) => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || issue.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || issue.priority === priorityFilter
    
    return matchesSearch && matchesStatus && matchesPriority
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Issues Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage and track project issues and bugs</p>
            </div>
            <button className="btn-primary inline-flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              New Issue
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="card">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Open Issues</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {testIssues.filter(i => i.status === 'open').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {testIssues.filter(i => i.status === 'in-progress').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Closed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {testIssues.filter(i => i.status === 'closed').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Urgent</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {testIssues.filter(i => i.priority === 'urgent').length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="card">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search issues..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Priority</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.map((issue) => {
            const StatusIcon = statusConfig[issue.status].icon
            const statusColor = statusConfig[issue.status].color
            const priorityColor = priorityConfig[issue.priority].color

            return (
              <div key={issue.id} className="card hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <StatusIcon className={`h-5 w-5 ${statusColor.split(' ')[0]}`} />
                      <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColor}`}>
                        {priorityConfig[issue.priority].label}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{issue.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {issue.assignee === 'unassigned' ? 'Unassigned' : issue.assignee}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(issue.createdAt)}
                      </div>
                      <div className="flex items-center">
                        <Github className="h-4 w-4 mr-1" />
                        {issue.comments} comments
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {issue.labels.map((label) => (
                        <span
                          key={label}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filteredIssues.length === 0 && (
          <div className="text-center py-12">
            <Github className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No issues found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
