'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes, always show error
      setError('This is a demo version. Authentication system coming soon!')
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20 min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-secondary/10 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">
            Welcome to <span className="text-accent">Muscle Mafia</span>
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full btn-accent ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link href="/signup" className="text-accent hover:text-accent/90">
                Sign up
              </Link>
            </p>
            <Link
              href="/forgot-password"
              className="text-gray-400 hover:text-gray-300 text-sm block mt-2"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 