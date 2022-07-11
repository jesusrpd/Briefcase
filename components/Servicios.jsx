import Servicio from "./Servicio";

export default function Service () {
  return(
    <div className="w-100 min-h-screen">
      <h2 className="text-white text-center mb-4 text-2xl">Service</h2>
        <div className="">
          <Servicio title="Web develop" desc="Desarrollo, planificación y desarrollo web para tu negocio, tienda etc." img="/SVG/code.svg"/>
          <Servicio title="Web design" desc="Diseño agradable y adaptable para todos los dispositivos." img="/SVG/design.svg"/>
          <Servicio title="SEO" desc="Posicionamiento organico e inorganico de tu sitio o plataforma." img="/SVG/seo.svg"/>
          <Servicio title="Web hosting" desc="Configuración y alojamiento en el servidor de tu sitio y creación de correos." img="/SVG/hosting.svg"/>
        </div>
    </div>
  )
}