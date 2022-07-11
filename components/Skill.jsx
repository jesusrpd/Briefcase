export default function Skill ({porcent, leng, color}) {
  return (
    <div className="flex items-center justify-start">
      <div className={`w-full bg-gradient-to-br from-${color} to-dark rounded-lg p-1 mr-1`}>
        <span className="text-white font-medium">{leng}</span>
      </div>
      <p className="text-white">{porcent}%</p>
    </div>
  )
}