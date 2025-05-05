'use client'

import { useState } from 'react'

interface PricingPlan {
  id: number
  name: string
  price: number
  duration: string
  features: string[]
  isPopular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Basic Monthly',
    price: 4000,
    duration: '1 Month',
    features: [
      'Full Gym Access',
      'Locker Room Access',
      'Basic Equipment Usage',
      'Free Fitness Consultation',
      'Access to Group Classes'
    ]
  },
  {
    id: 2,
    name: 'Monthly + Cardio',
    price: 4500,
    duration: '1 Month',
    features: [
      'All Basic Features',
      'Cardio Equipment Access',
      'Treadmills & Ellipticals',
      'Stationary Bikes',
      'Heart Rate Monitoring'
    ],
    isPopular: true
  },
  {
    id: 3,
    name: 'Quarterly',
    price: 10500,
    duration: '3 Months',
    features: [
      'All Basic Features',
      'Cardio Equipment Access',
      'Personalized Workout Plan',
      'Progress Tracking',
      'Priority Booking'
    ]
  },
  {
    id: 4,
    name: 'Half Yearly',
    price: 19800,
    duration: '6 Months',
    features: [
      'All Quarterly Features',
      'Nutrition Consultation',
      'Body Composition Analysis',
      'Monthly Progress Review',
      'Special Event Access'
    ]
  },
  {
    id: 5,
    name: 'Annual',
    price: 36000,
    duration: '12 Months',
    features: [
      'All Half Yearly Features',
      'VIP Locker Access',
      'Guest Passes (2/month)',
      'Quarterly Photo Session',
      'Premium Support'
    ]
  }
]

export default function MembershipsPage() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null)

  return (
    <div className="pt-20 min-h-screen bg-primary">
      <div className="container-custom py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Membership <span className="text-accent">Plans</span>
        </h1>
        <p className="text-gray-300 text-center mb-4 max-w-2xl mx-auto">
          Choose the perfect membership plan for your fitness journey
        </p>
        <p className="text-accent text-center mb-12">
          One-time registration fee of Rs. 2,000 applies to all memberships
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-secondary/10 rounded-lg overflow-hidden hover:bg-secondary/20 transition-all duration-300 ${
                plan.isPopular ? 'border-2 border-accent' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">Rs. {plan.price.toLocaleString()}</span>
                  <span className="text-gray-400">/{plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-accent mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-accent text-primary hover:bg-accent/90'
                      : 'bg-secondary/20 hover:bg-secondary/30'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Membership Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-primary max-w-md w-full rounded-lg p-6 relative">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Join {selectedPlan.name} Plan</h2>
            <p className="text-gray-300 mb-4">
              Complete your membership registration for {selectedPlan.duration}.
            </p>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Membership Fee:</span>
                <span>Rs. {selectedPlan.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Registration Fee:</span>
                <span>Rs. 2,000</span>
              </div>
              <div className="flex justify-between font-bold text-accent pt-2 border-t border-gray-700">
                <span>Total Amount:</span>
                <span>Rs. {(selectedPlan.price + 2000).toLocaleString()}</span>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
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
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <button type="submit" className="w-full btn-accent">
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 