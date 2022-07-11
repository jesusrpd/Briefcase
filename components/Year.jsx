export default function Year ({color, year}) {
  return(
    <div className={`w-6 h-36 bg-gradient-to-br from-${color} to-dark rounded-full relative flex items-center justify-center m-auto`}>
      <div className="w-5 h-5 rounded-full bg-white m-auto absolute top-1"></div>
      <div className="w-5 h-5 rounded-full bg-white m-auto absolute bottom-1"></div>
      <p className="text-white -rotate-90 font-bold">{year}</p>
    </div>
  )
}