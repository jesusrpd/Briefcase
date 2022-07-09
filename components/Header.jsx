import Image from 'next/image';

export default function Header () {
  return (
    <div>
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
    </div>
  )
}