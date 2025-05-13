import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/60 z-10" />
          <Image
            src="/images/hero2.jpg"
            alt="Muscular bodybuilder in gym"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-accent">Transform Your Body.</span>{' '}
            <span className="text-white"> Elevate Your Mind.</span>
            <span className="text-white"> Join the Elite.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform Your Body. Elevate Your Mind.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/membership" className="btn-accent">
              Join Now
            </Link>
            <Link href="/classes" className="btn-primary">
              View Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-accent">Muscle Mafia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-accent">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: "State-of-the-Art Equipment",
    description: "Train with the latest and most advanced fitness equipment in our fully-equipped facility."
  },
  {
    title: "Expert Trainers",
    description: "Our certified trainers are here to guide you through your fitness journey with personalized attention."
  },
  {
    title: "Flexible Programs",
    description: "Choose from a variety of programs designed to meet your specific fitness goals and schedule."
  }
] 