// import { BlogPosts } from 'app/components/posts'
import React from 'react';

export default function Page() {
  return (
    <div>
      {/* Landing */}
      <section className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto grid grid-col-1 gap-y-20">
        <h1 className="text-7xl font-bold">
          Frank 
          <br></br>
          Li
        </h1>
        <p className="pt-8 w-md">
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
      <section>
        <h1 className="max-w-xl mx-4 mt-8 lg:mx-auto font-bold">Tech</h1>
        <div className="grid grid-cols-5 justify-items-center">
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
      <section>
        <h1 className="max-w-xl mx-4 mt-8 lg:mx-auto font-bold">Course work</h1>
      </section>

      {/* Portfolio */}
      <section>
        <h1 className="max-w-xl mx-4 mt-8 lg:mx-auto font-bold">Portfolio</h1>
      </section>

      {/* Contact */}
      <section>
        <h1 className="max-w-xl mx-4 mt-8 lg:mx-auto font-bold">Contact</h1>
      </section>
    </div>
  )
}
