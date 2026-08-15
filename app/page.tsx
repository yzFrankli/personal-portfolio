// import { BlogPosts } from 'app/components/posts'
import React from 'react';
import ProjCard from './components/ProjCard';
import CourseCard from './components/CourseCard'
import TechCard from './components/TechCard';


export default function Page() {
  return (
    <div>
      {/* Landing */}

      <section className="h-[60vh]">
        <h1 className="text-7xl font-bold pt-40 antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
          Frank
          <br></br>
          Li
        </h1>
      </section>

      <section className="antialiased homepage" id="about">
        <h2>About</h2>
        <img className="float-left w-80 pr-4" src={'/img/frank.jpeg'} />
        <p className="w-max-xl text-xl">
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
      </section>
      <br />
      {/* Tech */}
      <section id="tech" className="homepage">
        <h2>Tech</h2>
        <div className="flex flex-row flex-wrap justify-items-center">
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

      {/* Coursework */}
      <section id="coursework" className="homepage">
        <h2>Course work</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-items-center">
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
      <section id="portfolio" className="homepage">
        <h2>Portfolio</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-items-center gap-y-4 justify-items-center">

          {/* <projCard */}
          <ProjCard imgPath={"/img/medi2.png"} name={"Meditatr"} tech={["react", "vercel"]} gitUrl={"https://github.com/yzFrankli/taskboard"}/>
          <ProjCard imgPath={"/img/taskboard.png"} name={"Taskboard"} tech={["react", "vercel"]} gitUrl={"https://github.com/yzFrankli/taskboard"}/>
          <ProjCard imgPath={"/img/portfolio.jpeg"} name={"Portfolio"} tech={["react", "vercel"]} gitUrl={"https://github.com/yzFrankli/taskboard"}/>
          <ProjCard imgPath={"/img/spaceshooters.png"} name={"Space Shooters"} tech={["react", "vercel"]} gitUrl={"https://github.com/yzFrankli/taskboard"}/>
          <ProjCard imgPath={"/img/jumbocode.png"} name={"Dillar academy (JumboCode)"} tech={["react", "vercel"]} gitUrl={"https://github.com/yzFrankli/taskboard"}/>
          <ProjCard imgPath={"/img/encryptedim.png"} name={"End-to-end encrypted instant messaging"} tech={["react", "vercel"]} gitUrl={"https://github.com/yzFrankli/taskboard"}/>


        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="homepage">
        <div className="flex flex-row gap-8 flex-wrap">
          <div className="w-lg">
            <h2 className="">Send a message</h2>
            <p className="text-xl text-red-800">Want to send me a message? Fill out the following form to quickly and easily send me a message directly in browser.</p>
          </div>

          <form
            action="https://formspree.io/f/xljrlkkn"
            method="POST"
            className="border border-black-1 bg-red-300 rounded-xl mr-10 p-8"
          >
            <label>Name</label><br />
            <input type="text" name="text" className="w-xl mb-8" required /><br />

            <label>Email</label><br />
            <input type="email" className="w-xl mb-8" required /><br />

            <label>Message</label><br />
            <textarea name="message" className="w-xl mb-4" required /><br />
            <button type="submit" className="border border-black-1 bg-black text-white p-2 rounded-xl" value="Submit" >Submit</button><br />
          </form>
        </div>

      </section>
    </div>
  )
}
