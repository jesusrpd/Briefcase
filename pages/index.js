import Image from 'next/image';
import { useState } from 'react';

export default function Home () {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <div className='bg-dark'>
      <div className='absolute lg:hidden'>
        <Image
          src="/SVG/miscelanea-1-mobile.svg"
          width={115}
          height={195}
          alt="miscelanea mobile"
        />
      </div>
      <div className='absolute hidden lg:block'>
        <Image
          src="/SVG/miscelanea-1-desktop.svg"
          width={85}
          height={165}
          alt="miscelanea mobile"
        />
      </div>
      <div className='w-screen h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex items-end md:items-center justify-center mb-2 relative lg:order-2'>
          <div className='absolute hidden md:block'>
            <Image
              src="/SVG/rombo.svg"
              alt='rombo miscelanea'
              width={363}
              height={363}
            />
          </div>
          <Image
            src="/images/perfil.png"
            alt='photo perfil'
            width={190}
            height={190}
            className="rounded-full"
          />
        </div>
        <div className='flex flex-col text-center items-center mb-10 lg:justify-center lg:order-1 lg:pr-16'>
          <h3 className='text-green my-2'>Hello I'm</h3>
          <h1 className='text-white mt-2'>Jesús Rodrigo</h1>
          <h2 className='text-white mb-2 mt-1 lg:m-0'>Desarrollador web full stack</h2>
          <p className='text-white my-2 md:w-4/5 lg:w-2/4'>Freelance, developer, student and self-taught passionate about web development and design.</p>
          <button className='bg-green text-dark w-max py-1 px-4 rounded-lg my-2 hover:bg-dark hover:text-green border-2 hover:border-green'>Download CV</button>
        </div>
      </div>
      {/* MENU MOBILE */}
      <div className='h-16 w-full flex items-center justify-between px-5 fixed bottom-0 left-0 z-10'>
        <Image
          src="/SVG/logo.svg"
          alt='logo JR'
          width={49}
          height={49}
        />
        {
          menuShow ? 
          (
            <Image
              onClick={() => setMenuShow(false)}
              src="/SVG/close.svg"
              alt='icon hamburguer'
              width={22}
              height={22}
            />
          ): (
            <Image
              onClick={() => setMenuShow(true)}
              src="/SVG/hamburguer.svg"
              alt='icon hamburguer'
              width={25}
              height={19}
            />
          )
        }
        
      </div>
      {
        menuShow ? 
        (
          <div className='w-full h-screen flex items-center justify-center absolute top-0 bg-dark'>
            <ul className='text-center text-white font-black pb-10'>
              <li className='my-6'><h3>Home</h3></li>
              <li className='my-6'><h3>Briefcase</h3></li>
              <li className='my-6'><h3>Service</h3></li>
              <li className='my-6'><h3>Trayectory</h3></li>
              <li className='my-6'><h3>Skills</h3></li>
              <li className='my-6'><h3>Contact</h3></li>
            </ul>
          </div>
        ): null
      }
    </div>
  )
}