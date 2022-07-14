import Skill from './Skill'

export default function Skills () {
  return (
    <div className="w-full min-h-screen">
      <h2 className="text-white text-2xl font-bold text-center mb-4">Skills</h2>
      <div className="w-11/12 m-auto">
        <Skill color="orange" leng="HTML5" porcent="100" width="100"/>
        <Skill color="grey" leng="HTML5" porcent="100" width="100"/>
      </div>
    </div>
  )
}