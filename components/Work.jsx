import Image from "next/image";

export default function Work () {
  return(
    <div className="bg-work bg-no-repeat w-72 h-72 text-center m-auto relative">
          <h2 className="text-white text-5xl font-bold absolute top-10 left-10">Title</h2>
          <div className="pointer absolute bottom-8 left-28">
            <Image
              src="/SVG/arrow.svg"
              alt="arrow"
              width={14}
              height={9}
            />
            <p className="text-white font-bold">More...</p>
          </div>
        </div>
  )
}