export default function CourseCard({ courseName }: { courseName: string }) {
  return (
    <div className="border border-black-1 rounded-lg px-3 py-1.5 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
      <h1 className="text-sm leading-snug">{courseName}</h1>
    </div>
  )
}