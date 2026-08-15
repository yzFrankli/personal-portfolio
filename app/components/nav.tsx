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
    <aside className="-ml-[8px] tracking-tight w-full max-w-[15rem] bg-black ">
      <div className="lg:sticky top-0 z-50">
        <nav
          className=""
          id="nav"
        >
          <div className="p-8 w-30 flex flex-col gap-4 text-white">
            <a href="#">
              <h1>home</h1>
            </a>
            <a href="#about">
              <h1>about</h1>
            </a>
            <a href="#tech">
              <h1>tech</h1>
            </a>
            <a href="#coursework">
              <h1>course work</h1>
            </a>
            <a href="#portfolio">
              <h1>portfolio</h1>
            </a>
            <a href="#contact">
              <h1>contact</h1>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
