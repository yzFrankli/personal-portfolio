import CourseCard from './CourseCard'

export default function ProjCard({ imgPath, name }: { imgPath:string, name:string }) {
  return (
    <div className="project h-auto justify-items-start rounded-xl">
      <img className="projImg rounded-xl m-2" src={imgPath}/>
      <h1 className="text-2xl font-semibold p-4">{name}</h1>
      <div className="flex flex-row gap-3 mx-3 mb-2">
        <CourseCard courseName={"Dart"}/>
        <CourseCard courseName={"Supabase"}/>
        <CourseCard courseName={"Vercel"}/>
        <CourseCard courseName={"Riverpod"}/>
      </div>
      
      <p className="pl-4">some description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
    </div>
  )
}

