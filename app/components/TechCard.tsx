export default function TechCard({ imgPath, name }: { imgPath: string, name: string }) {
  return (
    <div className="p-8">
      <div className="h-35 mb-4">
        <img className="h-30 w-20 object-cover" src={imgPath}/>
      </div>
      <p className="text-center font-semibold">{name}</p>
    </div>
  )
}