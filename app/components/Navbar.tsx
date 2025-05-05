'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-accent">MUSCLE</span>{' '}
              <span className="text-white">MAFIA</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/classes">Classes</NavLink>
            <NavLink href="/trainers">Trainers</NavLink>
            <NavLink href="/memberships">Memberships</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="/about">About</MobileNavLink>
              <MobileNavLink href="/classes">Classes</MobileNavLink>
              <MobileNavLink href="/trainers">Trainers</MobileNavLink>
              <MobileNavLink href="/memberships">Memberships</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-white hover:text-accent"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-accent transition-colors duration-300"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-accent transition-colors duration-300"
    >
      {children}
    </Link>
  )
} 