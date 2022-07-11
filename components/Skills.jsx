import Skill from './Skill'

export default function Skills () {
  return (
    <div className="w-full min-h-screen">
      <h2 className="text-white text-2xl font-bold text-center mb-4">Skills</h2>
      <div className="w-11/12 m-auto">
        <Skill leng="HTML5" porcent="100" color="orange" width="100"/>
        <Skill leng="CSS3" porcent="95" color="blue" width="95"/>
        <Skill leng="JS" porcent="95" color="yellow" width="95"/>
        <Skill leng="Bootstrap" porcent="90" color="purple" width="95"/>
      </div>
    </div>
  )
}