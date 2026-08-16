import CourseCard from './CourseCard'

interface projItems { 
  imgPath: string;
  name: string;
  tech: Array<string>;
  links: Array<string>
  icons: Record<string, string> // Record<link, icon-link>

}

export default function ProjCard({ imgPath, name, tech, links, icons }: projItems) {
  return (

    <div className="project h-auto rounded-xl flex flex-col">
      <div className="flip-container">
        <div className="flipper">

          <div className="front">
            <img
              className="front-image rounded-xl"
              src={imgPath}
              alt="Project preview"
            />
          </div>

          <div className="back bg-gray-500 relative justify-center">
            <div className="project-icons absolute">
              {Object.entries(links).map(([key, value], index) => (
                <a
                key={index}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  src={icons[value]}
                  className="icon"
                  alt="GitHub"
                />
                </a>
              ))}

              {/* <a
                href="https://your-project.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/link.png"
                  className="icon"
                  alt="Live Demo"
                />
              </a> */}
            </div>
          </div>

        </div>
      </div>

      
      
      <div className="px-4 pt-4 pb-3 space-y-3">
        <h1 className="text-2xl font-semibold text-left">{name}</h1>
        <div className="flex flex-row flex-wrap gap-2">
          {Object.entries(tech).map(([key, value], index) => (
              <CourseCard key={index} courseName={value}/>
          ))}
        </div>
        <p className="leading-relaxed">
          some description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
          some description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
          some description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
          some description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
          some description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
          </p>
      </div>
    </div>
  )
}

