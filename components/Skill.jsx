export default function Skill ({porcent, leng, color}) {
  return (
    <div className="flex items-center justify-start">
      <div className={`bg-gradient-to-br from-${color} to-dark rounded w-11/12 py-1 px-4`}>
        <span className="text-white font-medium">{leng}</span>
      </div>
      <p className="text-white">{porcent}%</p>
    </div>
  )
}