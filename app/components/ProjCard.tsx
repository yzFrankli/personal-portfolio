import CourseCard from './CourseCard'

export default function ProjCard({ imgPath, name, tech, gitUrl }: { imgPath: string, name: string, tech: Array<string>, gitUrl: string}) {
  return (

    <div className="project h-auto rounded-xl border hover:border-red-50">
      <div className="flip-container">
        <div className="flipper">

          <div className="front">
            <img
              className="front-image rounded-xl"
              src={imgPath}
              alt="Project preview"
            />
          </div>

          <div className="back bg-gray-100 relative justify-center">
            <div className="project-icons absolute">
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/github.png"
                  className="icon"
                  alt="GitHub"
                />
              </a>

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

      
      
      <h1 className="text-2xl font-semibold p-4 text-left">{name}</h1>
      <div className="flex flex-row gap-3 mx-3    mb-2">
        {Object.entries(tech).map(([key, value], index) => (
            <CourseCard key={index} courseName={value}/>
        ))}
      </div>
      
      <p className="pl-4">some description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
    </div>
  )
}

