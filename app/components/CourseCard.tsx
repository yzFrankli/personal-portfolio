export default function CourseCard({ courseName }: { courseName: string }) {
  return (
    <div className="border border-black-1 rounded-lg px-3 py-1.5">
      <h1 className="text-sm leading-snug">{courseName}</h1>
    </div>
  )
}