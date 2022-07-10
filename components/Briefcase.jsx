import Work from "./Work";

export default function Briefcase () {
  return (
    <div className="min-h-screen w-full">
      <h2 className="text-white text-2xl font-bold text-center mb-4">Briefcase</h2>
      <div className="grid grid-rows-3 md:grid-cols-2 md:grid-rows-2">
        <Work/>
        <Work/>
        <Work/>
      </div>
    </div>
  )
}