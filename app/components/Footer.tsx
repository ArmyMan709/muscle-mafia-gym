'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">MUSCLE</span>{' '}
              <span className="text-white">MAFIA</span>
            </h3>
            <p className="text-gray-400">
              Transform your body and mind at the most elite fitness facility in town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-400 hover:text-accent">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-gray-400 hover:text-accent">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-400 hover:text-accent">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phase 1, CC-188 comercial Area</li>
              <li>City Housing, Gujranwala</li>
              <li>Phone: 055-2063732, </li>
              <li>0315-7773462</li>
              <li>Email: info@musclemafia.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Thursday: </li>
              <li>6am - 10am & 6pm - 12am</li>
              <li>Saturday & Sunday: </li>
              <li>6am - 10am & 6pm - 12am</li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Muscle Mafia Gym. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <SocialLink href="https://facebook.com" label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://instagram.com" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com" label="Twitter">
                <TwitterIcon />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-accent transition-colors duration-300"
      aria-label={label}
    >
      {children}
    </a>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.96,4.96,0,0,0,2.16-2.72,9.9,9.9,0,0,1-3.12,1.19,4.92,4.92,0,0,0-8.39,4.49A14,14,0,0,1,1.64,3.16,4.92,4.92,0,0,0,3.2,9.72,4.86,4.86,0,0,1,1,9.13v.06a4.93,4.93,0,0,0,3.95,4.83,4.86,4.86,0,0,1-2.22.08,4.93,4.93,0,0,0,4.6,3.42A9.87,9.87,0,0,1,0,19.54a13.94,13.94,0,0,0,7.55,2.21,13.9,13.9,0,0,0,14-13.95c0-.21,0-.42,0-.63A10,10,0,0,0,24,4.59l-.05-.02Z" />
    </svg>
  )
} 