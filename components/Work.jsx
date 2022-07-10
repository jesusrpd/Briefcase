import Image from "next/image";
import { useState } from "react";

export default function Work () {

  const [info, setInfo] = useState(false);

  return(
    <div className="bg-work bg-no-repeat bg-cover w-72 h-72 text-center m-auto relative rounded my-4 md:w-80 md:h-80">
          <h2 className="text-white text-5xl font-bold absolute top-10 left-10">Title</h2>
          <div className="pointer absolute bottom-8 left-28" onClick={() => setInfo(!info)}>
            <Image
              src="/SVG/arrow.svg"
              alt="arrow"
              width={14}
              height={9}
            />
            <p className="text-white font-bold">More...</p>
          </div>
          {
            info ?(
              <div className="w-full h-full bg-gradient-to-br from-green to-dark absolute rounded d-flex flex-col items-center">
            <h2 className="text-white text-5xl font-bold my-2">Title</h2>
            <p className="text-white w-11/12 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo fermentum tortor, pellentesque tellus phasellus fermentum cursus sed condimentum.</p>
            <button className='bg-white text-dark w-max py-1 px-4 rounded-lg my-2 hover:bg-dark hover:text-white border-none'>Visit work</button>
            <div onClick={() => setInfo(!info)}>
              <Image
                src="/SVG/arrow.svg"
                alt="arrow"
                width={14}
                height={9}
                className="rotate-180"
              />
              <p className="text-white font-bold">Less...</p>
            </div>
          </div>
            ): null
          }
        </div>
  )
}