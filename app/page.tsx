// import { BlogPosts } from 'app/components/posts'
import React from 'react';

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
          
      <section className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto" id="about">
        <h1 className="font-bold">About</h1>
        <p className="w-md">
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

      {/* Tech */}
      <section id="tech" className="max-w-xl mx-4 mt-8 lg:mx-auto">
        <h1 className=" font-bold">Tech</h1>
        <div className="grid grid-cols-4 gap-y-4 justify-items-center">
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/java.png"/>
            <p className="text-center">Java</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/c.svg"/>
            <p className="text-center">C</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/c++.png"/>
            <p className="text-center">c++</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/sql.png"/>
            <p className="text-center">SQL</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/python.png"/>
            <p className="text-center">Python</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/react.png"/>
            <p className="text-center">React</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/nodejs.png"/>
            <p className="text-center">Node.js</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/tailwind.png"/>
            <p className="text-center">Tailwind CSS</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/supabase.png"/>
            <p className="text-center">Supabase</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/git.png"/>
            <p className="text-center">Git</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/vercel.png"/>
            <p className="text-center">Vercel</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/flutter.svg"/>
            <p className="text-center">Flutter</p>
          </div>
          <div>
            <img className="h-30 w-20 object-contain" src="/assets/riverpod.png"/>
            <p className="text-center">RiverPod</p>
          </div>
        </div>
      </section>

       {/* Coursework */}
      <section id="coursework" className="max-w-xl mx-4 mt-8 pt-8 lg:mx-auto">
        <h1 className="font-bold">Course work</h1>
        <div className="grid grid-cols-4 gap-y-4 justify-items-center">
          <div className="border border-black-1">
            <img src="/assets/flutter.svg"/>
            <p>Algorithms</p>
          </div>
          <div className="border border-black-1">
            <img src="/assets/flutter.svg"/>
            <p>Algorithms</p>
          </div>
        </div>
        
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="max-w-xl mx-4 mt-8 lg:mx-auto">
        <h1 className="font-bold">Portfolio</h1>
        <div className="grid grid-cols-4 gap-y-4 justify-items-center">
          <p>meditator</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-xl mx-4 mt-8 lg:mx-auto ">
        <h1 className="font-bold">Contact</h1>
        <form>
          <label>Name</label><br/>
          <input/><br/>
          <label>Value</label><br/>
          <input/><br/>
          <input type="submit" value="submit"></input><br/>
        </form>
      </section>
    </div>
  )
}
