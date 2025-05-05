'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ClassType {
  id: number
  name: string
  trainer: string
  time: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  image: string
}

const classes: ClassType[] = [
  {
    id: 1,
    name: 'Power Lifting',
    trainer: 'Muhammad Junaid',
    time: '6:00 AM',
    duration: '90 min',
    level: 'Advanced',
    description: 'Build strength and power with professional powerlifting techniques.',
    image: '/muscle-mafia-gym/images/powerlift2.jpg'
  },
  {
    id: 2,
    name: 'Bodybuilding',
    trainer: 'Humyunh Mughal',
    time: '8:00 AM',
    duration: '60 min',
    level: 'Intermediate',
    description: 'Sculpt your dream physique with our comprehensive bodybuilding program.',
    image: '/muscle-mafia-gym/images/bodybuil1.jpg'
  },
  {
    id: 3,
    name: 'HIIT Training',
    trainer: 'Muhammad Junaid',
    time: '5:00 PM',
    duration: '45 min',
    level: 'Intermediate',
    description: 'High-intensity interval training for maximum fat burn and conditioning.',
    image: '/muscle-mafia-gym/images/hiit1.jpg'
  },
  {
    id: 4,
    name: 'Strength & Conditioning',
    trainer: 'Humyunh Mughal',
    time: '7:00 PM',
    duration: '75 min',
    level: 'Beginner',
    description: 'Build foundational strength and improve overall conditioning.',
    image: '/muscle-mafia-gym/images/strenght1.jpg'
  }
]

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null)

  return (
    <div className="pt-20 min-h-screen bg-primary">
      <div className="container-custom py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="text-accent">Classes</span>
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Transform your body and mind with our diverse range of fitness classes led by expert trainers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-secondary/10 rounded-lg overflow-hidden hover:bg-secondary/20 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={classItem.image}
                  alt={classItem.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                <p className="text-gray-300 mb-4">{classItem.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>🎯 Level: {classItem.level}</p>
                  <p>👨‍🏫 Trainer: {classItem.trainer}</p>
                  <p>⏰ Time: {classItem.time}</p>
                  <p>⌛ Duration: {classItem.duration}</p>
                </div>
                <button
                  onClick={() => setSelectedClass(classItem)}
                  className="mt-4 w-full btn-accent"
                >
                  Book Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-primary max-w-md w-full rounded-lg p-6 relative">
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Book {selectedClass.name}</h2>
            <p className="text-gray-300 mb-4">
              Join {selectedClass.trainer} for this {selectedClass.duration} {selectedClass.level} class.
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
              <button type="submit" className="w-full btn-accent">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 