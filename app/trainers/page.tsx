'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TrainerType {
  id: number
  name: string
  specialization: string
  experience: string
  description: string
  image: string
  certifications: string[]
  schedule: {
    day: string
    hours: string
  }[]
}

const trainers: TrainerType[] = [
  {
    id: 1,
    name: 'Muhammad Junaid',
    specialization: 'Bodybuilding & Crossfit',
    experience: '8+ years',
    description: 'Expert in powerlifting techniques and high-intensity training. Specializes in Crssfit and athletic performance.',
    image: '/images/Junaid_Rajpoot.PNG',
    certifications: [
      'Sports Nutrition Specialist',
      'Elite Powerlifting Coach',
      'HIIT Training Expert'
    ],
    schedule: [
      { day: 'Monday - Thursday', hours: '6:00 PM - 12:00 AM' },
      { day: 'Saturday & Sunday', hours: '7:00 PM - 12:00 AM' }
    ]
  },
  {
    id: 2,
    name: 'Humyun Mughal',
    specialization: 'Bodybuilding & Weight Loss',
    experience: '30+ years',
    description: 'Professional bodybuilding coach with expertise in muscle development, Weight loss and nutritional planning.',
    image: '/images/HUmyun-mugl.png',
    certifications: [
      'Professional Bodybuilding Coach',
      'Advanced Strength Training Expert',
      'Mr.Gujranwala 1997'
    ],
    schedule: [
      { day: 'Monday - Friday', hours: '7:00 PM - 12:00 AM' },
      { day: 'Saturday', hours: '7:00 PM - 11:00 PM' }
    ]
  }
]

export default function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerType | null>(null)

  return (
    <div className="pt-20 min-h-screen bg-primary">
      <div className="container-custom py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Meet Our <span className="text-accent">Expert Trainers</span>
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Train with the best in the industry. Our expert trainers are here to help you achieve your fitness goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-secondary/10 rounded-lg overflow-hidden hover:bg-secondary/20 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-accent font-semibold mb-4">{trainer.specialization}</p>
                <p className="text-gray-300 mb-4">{trainer.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Certifications</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      {trainer.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Schedule</h4>
                    <ul className="text-gray-400">
                      {trainer.schedule.map((time, index) => (
                        <li key={index}>
                          <span className="font-medium">{time.day}:</span> {time.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTrainer(trainer)}
                  className="mt-6 w-full btn-accent"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-primary max-w-md w-full rounded-lg p-6 relative">
            <button
              onClick={() => setSelectedTrainer(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Book Session with {selectedTrainer.name}</h2>
            <p className="text-gray-300 mb-4">
              Schedule a personal training session with our expert trainer.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Preferred Time
                </label>
                <select
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
              <button type="submit" className="w-full btn-accent">
                Schedule Session
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 