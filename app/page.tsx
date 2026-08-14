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
        <img className="float-left w-80 pr-4" src={'/img/frank.jpeg'}/>
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
      <br/>
      {/* Tech */}
      <section id="tech" className="homepage">
        <h2>Tech</h2>
        <div className="flex flex-row flex-wrap justify-items-center">
          <TechCard imgPath={"/assets/java.png"} name={"Java"}/>
          <TechCard imgPath={"/assets/c.png"} name={"C"}/>
          <TechCard imgPath={"/assets/c++.png"} name={"C++"}/>
          <TechCard imgPath={"/assets/sql.png"} name={"SQL"}/>
          <TechCard imgPath={"/assets/python.png"} name={"Python"}/>
          <TechCard imgPath={"/assets/react.png"} name={"React"}/>
          <TechCard imgPath={"/assets/nodejs.png"} name={"Node.js"}/>
          <TechCard imgPath={"/assets/tailwind.png"} name={"Tailwind CSS"}/>
          <TechCard imgPath={"/assets/supabase.png"} name={"Supabase"}/>
          <TechCard imgPath={"/assets/git.png"} name={"Git"}/>
          <TechCard imgPath={"/assets/vercel.png"} name={"Vercel"}/>
          <TechCard imgPath={"/assets/flutter.svg"} name={"Flutter"}/>
          <TechCard imgPath={"/assets/riverpod.png"} name={"Riverpod"}/>
        </div>
      </section>

       {/* Coursework */}
      <section id="coursework" className="homepage">
        <h2>Course work</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-items-center">
          <CourseCard courseName={"programming language and algorithms"}/>
          <CourseCard courseName={"game design"}/>
          <CourseCard courseName={"data structure and analysis"}/>
          <CourseCard courseName={"data structure and analysis"}/>
          <CourseCard courseName={"data structure and analysis"}/>
          <CourseCard courseName={"data structure and analysis"}/>
          <CourseCard courseName={"data structure and analysis"}/>
          <CourseCard courseName={"data structure and analysis"}/>
          <CourseCard courseName={"data structure and analysis"}/>
        </div>
        
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="homepage">
        <h2>Portfolio</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-items-center gap-y-4 justify-items-center">

        {/* <projCard */}
          <ProjCard imgPath={"/img/medi2.png"} name={"Meditatr"}/>
          <ProjCard imgPath={"/img/taskboard.png"} name={"Taskboard"}/>
          <ProjCard imgPath={"/img/portfolio.jpeg"} name={"Portfolio"}/>
          <ProjCard imgPath={"/img/spaceshooters.png"} name={"Space Shooters"}/>
          <ProjCard imgPath={"/img/jumbocode.png"} name={"Dillar academy (JumboCode)"}/>
          <ProjCard imgPath={"/img/encryptedim.png"} name={"End-to-end encrypted instant messaging"}/>


        </div>
        
      </section>

      {/* Contact */}
      <section id="contact" className="homepage">
        <h2>Contact</h2>
        <form>
          <label>Name</label><br/>
          <input className="w-xl mb-8"/><br/>
          <label>Value</label><br/>
          <input className="w-xl mb-4"/><br/>
          <input type="button" className="border border-black-1 bg-black text-white p-2"value="submit"></input><br/>
        </form>
      </section>
    </div>
  )
}
