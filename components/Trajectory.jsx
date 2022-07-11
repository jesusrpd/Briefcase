import MapTrajectory from "./MapTrajectory";

export default function Trajectory () {
  return(
    <div className="w-full min-h-screen">
      <h2 className="text-white text-2xl font-bold text-center mb-4 pt-4">Trajectory</h2>
      <p className="text-white text-center w-11/12 m-auto">Since I was 16 years old I started programming with js, since then I have developed my knowledge focused on the development and design of web interfaces</p>
      <MapTrajectory/>
    </div>
  )
}