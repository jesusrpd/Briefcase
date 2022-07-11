import Image from "next/image";

export default function Service ({title, img, desc}) {
  return(
    <div className="w-72 h-72 m-auto rounded bg-gradient-to-br from-red to-dark flex flex-col items-center justify-center my-4">
      <Image
        src={img}
        width={48}
        height={48}
        alt="icon card"
        className=" my-4"
      />
      <h3 className="text-white font-bold text-2xl my-4">{title}</h3>
      <p className="text-center text-white my-4">{desc}</p>
    </div>
  )
}