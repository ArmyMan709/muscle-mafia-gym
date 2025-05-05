'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20 min-h-screen bg-primary">
      <div className="container-custom py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Contact <span className="text-accent">Us</span>
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-secondary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                <p className="text-gray-300">Phone: 055-2063732, 0315-7773462</p>
                <p className="text-gray-300">Email: info@musclemafia.com</p>
              </div>
              
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/10 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
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
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="training">Personal Training</option>
                  <option value="classes">Class Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full btn-accent ${formStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="text-green-400 text-center mt-4">
                  Thank you for your message! We'll get back to you soon.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-400 text-center mt-4">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 