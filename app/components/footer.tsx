
export default function Footer() {
  return (
    <aside className="bg-neutral-primary-soft rounded-base shadow-xs border border-default mx-4 mb-4 mt-8">
      <div className="max-w-2xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-row justify-center gap-12 md:gap-16">
        <a href="mailto:yzfrankli@gmail.com" className="flex flex-col items-center gap-2">
          <img className="h-10 w-10 object-contain" src="/assets/email.png" alt="Email"/>
          <p>Email</p>
        </a>

        <a href="https://www.linkedin.com/in/yzfrank-li/" className="flex flex-col items-center gap-2">
          <img className="h-10 w-10 object-contain" src="/assets/linkedin.png" alt="LinkedIn"/>
          <p>Linkedin</p>
        </a>
        
        <a href="https://github.com/yzFrankli" className="flex flex-col items-center gap-2">
          <img className="h-10 w-10 object-contain" src="/assets/github.png" alt="GitHub"/>
          <p>Github</p>
        </a>

      </div>
      <h1 className="text-center pt-8 text-sm text-neutral-600">Copyright © yzfrankli.vercel.app 2026</h1>
      </div>
      
    </aside>
    
  ) 
}
