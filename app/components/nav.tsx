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
    <aside className="-ml-[8px] tracking-tight w-full max-w-[20rem] bg-black ">
      <div className="lg:sticky top-0 z-50">
        <nav
          className=""
          id="nav"
        >
          <div className="p-8 w-30 flex flex-col gap-4 text-white">
            <a href="#">home</a>
            <a href="#about">about</a>
            <a href="#tech">tech</a>
            <a href="#coursework">course work</a>
            <a href="#portfolio">portfolio</a>
            <a href="#contact">contact</a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
