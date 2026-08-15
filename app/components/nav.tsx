import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  // '/blog': {
  //   name: 'blog',
  // },
  // 'https://vercel.com/templates/next.js/portfolio-starter-kit': {
  //   name: 'deploy',
  // },
}

export function Navbar() {
  return (
    <aside className="w-full bg-black text-white lg:min-h-screen lg:w-60 lg:shrink-0 sticky top-0 lg:h-screen z-40">
      <nav id="nav">
        <div className="flex flex-row justify-center gap-5 p-4 lg:flex-col lg:items-start lg:gap-4 lg:p-8">

          <a href="#" className="transition-opacity hover:opacity-60">
            Home
          </a>

          <a href="#about" className="transition-opacity hover:opacity-60">
            About
          </a>

          <a href="#tech" className="transition-opacity hover:opacity-60">
            Tech Stack
          </a>

          <a href="#coursework" className="transition-opacity hover:opacity-60">
            Course Work
          </a>

          <a href="#portfolio" className="transition-opacity hover:opacity-60">
            Portfolio
          </a>

          <a href="#contact" className="transition-opacity hover:opacity-60">
            Contact
          </a>

        </div>
      </nav>
    </aside>
  )
}