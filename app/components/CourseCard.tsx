export default function CourseCard({ courseName }: { courseName: string }) {
  return (
    <div className="border border-black-1 rounded-lg">
      <h1 className="px-2">{courseName}</h1>
    </div>
  )
}