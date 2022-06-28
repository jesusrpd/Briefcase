import '../styles/global.css';
import Image from 'next/image';

export default function App () {
  return (
    <div className='bg-dark'>
      <div className='absolute'>
        <Image
          src="/SVG/miscelanea-1-mobile.svg"
          width={115}
          height={195}
          alt="miscelanea mobile"
        />
      </div>
      <div className='w-screen h-screen grid grid-cols-1'>
        <div className='flex items-end justify-center mb-2'>
          <Image
            src="/images/perfil.png"
            alt='photo perfil'
            width={190}
            height={190}
            className="rounded-full"
          />
        </div>
        <div className='flex flex-col text-center items-center'>
          <h3 className='text-green my-2'>Hello I'm</h3>
          <h1 className='text-white mt-2'>Jesús Rodrigo</h1>
          <h2 className='text-white mb-2 mt-1'>Desarrollador web full stack</h2>
          <p className='text-white my-2'>Freelance, developer, student and self-taught passionate about web development and design.</p>
          <button className='bg-green text-dark w-max p-2 rounded my-2'>Download CV</button>
        </div>
      </div>
    </div>
  )
}