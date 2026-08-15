export default function TechCard({ imgPath, name }: { imgPath: string, name: string }) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 md:p-5">
      <div className="flex h-16 items-center justify-center">
        <img className="max-h-14 w-auto object-contain" src={imgPath} alt={name}/>
      </div>
      <p className="text-center text-sm font-semibold leading-snug">{name}</p>
    </div>
  )
}