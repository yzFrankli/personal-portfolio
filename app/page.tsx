// import { BlogPosts } from 'app/components/posts'
import React from 'react';
import ProjCard from './components/ProjCard';
import CourseCard from './components/CourseCard'
import TechCard from './components/TechCard';


export default function Page() {

  const gitImg = "/assets/github.png"
  const webImg = "/assets/website.png"
  const gameImg = "/assets/game.png"
  const figmaImg = "/assets/figma.png"

  return (
    <div>
      {/* Landing */}
      <section className="h-svh flex items-center justify-center relative overflow-hidden px-6">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-7xl md:text-9xl font-bold leading-none z-10 text-center">
          Frank
          <br />
          Li
          </h1>
          <a className="border border-black rounded-xl px-4 py-2 mt-8 md:mt-12" href={"#about"}>↓ Explore more</a>
        </div>

        <div className="absolute bottom-8 left-6 md:bottom-10 md:left-10 w-24 h-px bg-black" />

        <div className="absolute top-8 right-6 md:top-10 md:right-10 text-sm tracking-wide">
          PERSONAL PORTFOLIO
        </div>
      </section>
      
      {/* about */}
      <div className="site-content">
        <section className="antialiased" id="about">
          <h2 className="section-heading">About</h2>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            <img className="w-full max-w-xs md:max-w-sm shrink-0" src={'/img/frank.jpeg'} alt="Frank Li" />
            <p className="text-lg md:text-xl leading-relaxed text-neutral-800">
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
              I build with language models the way most people build with frameworks —
              hands-on, from prompt architecture to production. Currently looking
              for internships where I can work on real AI problems.
            </p>
          </div>
        </section>

        {/* techstack */}
        <section id="tech">
          <h2 className="section-heading">Tech</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6 md:gap-x-4 md:gap-y-8">
            <TechCard imgPath={"/assets/java.png"} name={"Java"} />
            <TechCard imgPath={"/assets/c.png"} name={"C"} />
            <TechCard imgPath={"/assets/c++.png"} name={"C++"} />
            <TechCard imgPath={"/assets/sql.png"} name={"SQL"} />
            <TechCard imgPath={"/assets/python.png"} name={"Python"} />
            <TechCard imgPath={"/assets/react.png"} name={"React"} />
            <TechCard imgPath={"/assets/nodejs.png"} name={"Node.js"} />
            <TechCard imgPath={"/assets/tailwind.png"} name={"Tailwind CSS"} />
            <TechCard imgPath={"/assets/supabase.png"} name={"Supabase"} />
            <TechCard imgPath={"/assets/git.png"} name={"Git"} />
            <TechCard imgPath={"/assets/vercel.png"} name={"Vercel"} />
            <TechCard imgPath={"/assets/flutter.svg"} name={"Flutter"} />
            <TechCard imgPath={"/assets/riverpod.png"} name={"Riverpod"} />
          </div>
        </section>

        
        {/* coursework */}
        <section id="coursework">
          <h2 className="section-heading">Course work</h2>
          <div className="flex flex-row flex-wrap gap-3">
            <CourseCard courseName={"programming language and algorithms"} />
            <CourseCard courseName={"game design"} />
            <CourseCard courseName={"data structure and analysis"} />
            <CourseCard courseName={"data structure and analysis"} />
            <CourseCard courseName={"data structure and analysis"} />
            <CourseCard courseName={"data structure and analysis"} />
            <CourseCard courseName={"data structure and analysis"} />
            <CourseCard courseName={"data structure and analysis"} />
            <CourseCard courseName={"data structure and analysis"} />
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <h2 className="section-heading">Portfolio</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-12 justify-items-center xl:justify-items-start">
            <ProjCard 
              imgPath={"/img/medi2.png"} 
              name={"Meditatr"} 
              tech={["Flutter", "Dart", "Swift", "Supabase", "Riverpod"]} 
              links={[
                "https://github.com/yzFrankli/meditatr",
              ]} 
              icons={{ 
                "https://github.com/yzFrankli/meditatr" : gitImg
                }}/>
            <ProjCard 
              imgPath={"/img/taskboard.png"} 
              name={"Taskboard"} 
              tech={["React", "Vercel", "Supabase", "TailwindCSS", "Typescript"]} 
              links={[
                "https://github.com/yzFrankli/taskboard",
                "https://taskboard-beryl-xi.vercel.app/"
              ]} 
              icons={{
                "https://github.com/yzFrankli/taskboard": gitImg,
                "https://taskboard-beryl-xi.vercel.app/" : webImg
              }}/>
            <ProjCard 
              imgPath={"/img/portfolio.jpeg"} 
              name={"Portfolio"} 
              tech={["React", "Vercel", "TailwindCSS", "Typescript"]} 
              links={[
                "https://github.com/yzFrankli/taskboard",
                "https://yzfrankli.vercel.app"
              ]}
              icons={{
                "https://github.com/yzFrankli/taskboard": gitImg,
                "https://yzfrankli.vercel.app" : webImg
                }}/>
            <ProjCard 
              imgPath={"/img/spaceshooters.png"} 
              name={"Space Shooters"} 
              tech={["Unity", "C#"]} 
              links={[
                "https://github.com/yzFrankli/taskboard", 
                "https://spaceshootersg1.itch.io/space-shooters",
                "https://spaceshooterwin.wixsite.com/space-shooter"
              ]}
              icons={{
                "https://github.com/yzFrankli/taskboard": gitImg,
                "https://spaceshootersg1.itch.io/space-shooters": gameImg,
                "https://spaceshooterwin.wixsite.com/space-shooter" : webImg
                }}/>
            <ProjCard 
              imgPath={"/img/jumbocode.png"} 
              name={"Dillar academy (JumboCode)"} 
              tech={["React", "Vercel", "MongoDB", "i18next", "TailwindCSS"]} 
              links={[
                "https://github.com/yzFrankli/taskboard",
                "https://www.dillaracademy.org/"
              ]}
              icons={{
                "https://github.com/yzFrankli/taskboard": gitImg,
                "https://www.dillaracademy.org/" : webImg
                }}/>
            <ProjCard 
              imgPath={"/img/encryptedim.png"} 
              name={"End-to-end encrypted instant messaging"} 
              tech={["Python"]} 
              links={["https://github.com/yzFrankli/taskboard"]}
              icons={{"https://github.com/yzFrankli/taskboard": gitImg}}/>
            <ProjCard 
              imgPath={"/img/spusic.png"} 
              name={"Spusic web game"} 
              tech={["HTML", "CSS", "Java Script"]} 
              links={["https://github.com/yzFrankli/cs20finalproject/blob/main/spusic.html"]}
              icons={{"https://github.com/yzFrankli/cs20finalproject/blob/main/spusic.html": gitImg}}/>
            <ProjCard 
              imgPath={"/img/producthon.png"} 
              name={"Producthon"} 
              tech={["Figma"]} 
              links={["https://www.figma.com/proto/TBHHhR0F6687q6bG904JFP/Disability-Map?node-id=68-396&t=ZpVM9us4dsBgKI0r-1&starting-point-node-id=68%3A396"]}
              icons={{"https://www.figma.com/proto/TBHHhR0F6687q6bG904JFP/Disability-Map?node-id=68-396&t=ZpVM9us4dsBgKI0r-1&starting-point-node-id=68%3A396": figmaImg}}/>
          </div>
        </section>
        
        {/* contact */}
        <section id="contact">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
            <div className="flex-1 max-w-md space-y-4">
              <h2 className="section-heading !mb-0">Send a message</h2>
              <p className="text-lg md:text-xl text-red-800 leading-relaxed">Want to send me a message? Fill out the following form to quickly and easily send me a message directly in browser.</p>
            </div>

            <form
              action="https://formspree.io/f/xljrlkkn"
              method="POST"
              className="flex-1 border border-black-1 bg-red-300 rounded-xl p-6 md:p-8 space-y-5 w-full max-w-xl"
            >
              <div className="space-y-2">
                <label>Name</label>
                <input type="text" name="text" className="w-full" required />
              </div>

              <div className="space-y-2">
                <label>Email</label>
                <input type="email" className="w-full" required />
              </div>

              <div className="space-y-2">
                <label>Message</label>
                <textarea name="message" className="w-full min-h-32" required />
              </div>

              <button type="submit" className="border border-black-1 bg-black text-white px-4 py-2 rounded-xl mt-2" value="Submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
