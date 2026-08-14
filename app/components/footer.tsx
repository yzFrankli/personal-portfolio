
export default function Footer() {
  return (
    <aside className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
      <div className="max-w-xl mx-4 pt-20 lg:mx-auto h-[30vh] w-screen ">
        <div className="flex flex-row justify-between text-center">
        <div>
          <img className="h-10 w-10 object-contain" src="/assets/email.png"/>
          <p>Email</p>
        </div>

        <div>
          <img className="h-10 w-10 object-contain" src="/assets/linkedin.png"/>
          <p>Linkedin</p>
        </div>
        
        <div>
          <img className="h-10 w-10 object-contain" src="/assets/github.png"/>
          <p>Github</p>
        </div>

      </div>
      <h1 className="text-center pt-10">Copyright © yzfrankli.vercel.app 2026</h1>
      </div>
      
    </aside>
    
  ) 
}
