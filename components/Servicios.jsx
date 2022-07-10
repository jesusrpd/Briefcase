import Servicio from "./Servicio";

export default function Service () {
  return(
    <div className="w-100 h-screen">
      <h2 className="text-white text-center mb-4 text-2xl">Service</h2>
        <div className="flex flex-col">
          <Servicio/>
          <Servicio/>
          <Servicio/>
          <Servicio/>
        </div>
    </div>
  )
}