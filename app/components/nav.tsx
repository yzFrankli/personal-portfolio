'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#coursework', label: 'Course Work' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('nav-collapsed')
    if (stored === 'true') {
      setIsCollapsed(true)
    }
  }, [])

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => {
      const next = !prev
      localStorage.setItem('nav-collapsed', String(next))
      return next
    })
  }

  const showCollapsed = mounted && isCollapsed

  return (
    <aside
      className={`sticky top-0 z-40 w-full bg-black text-white transition-[width] duration-300 ease-in-out lg:min-h-screen lg:shrink-0 lg:h-screen ${
        showCollapsed ? 'lg:w-14' : 'lg:w-60'
      }`}
    >
      <nav id="nav" className="h-full">
        <div className="flex flex-row justify-start gap-5 p-4 lg:h-full lg:flex-col lg:items-start lg:gap-4 lg:p-4">
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label={showCollapsed ? 'Expand navigation' : 'Collapse navigation'}
            aria-expanded={!showCollapsed}
            aria-controls="nav-links"
            className={`hidden shrink-0 rounded p-2 transition-opacity hover:opacity-60 lg:flex lg:items-center lg:justify-center ${
              showCollapsed ? 'lg:w-full' : ''
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-5 w-5 transition-transform duration-300 ${
                showCollapsed ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            id="nav-links"
            className={`flex flex-row justify-center gap-5 lg:w-full lg:flex-col lg:items-start lg:gap-4 ${
              showCollapsed ? 'lg:hidden' : ''
            }`}
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition-opacity hover:opacity-60"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
