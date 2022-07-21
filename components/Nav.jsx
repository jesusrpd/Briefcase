import Image from 'next/image';

export default function Nav () {
  return(
    <nav className='px-4 py-2 bg-dark flex justify-between items-center fixed bottom-0 w-full'>
        <a id='header' className='z-20'>
          <Image
            src="/SVG/logo.svg"
            width={49}
            height={49}
            alt="logotipo loandingpage"
          />
        </a>
        <div id='nav' className='main-nav bg-dark'>
          <ul className='nav-links text-center flex flex-col justify-center items-center h-full'>
            <span className='text-white font-bold text-2xl mb-9 underline'>MENÚ</span>
            <li className='link-item text-white my-4 text-2xl font-bold'>Home</li>
            <li className='link-item text-white my-4 text-2xl font-bold'>Briefcase</li>
            <li className='link-item text-white my-4 text-2xl font-bold'>Service</li>
            <li className='link-item text-white my-4 text-2xl font-bold'>Trajectory</li>
            <li className='link-item text-white my-4 text-2xl font-bold'>Skills</li>
            <li className='link-item text-white my-4 text-2xl font-bold'>Contact me</li>
          </ul>
        </div>
        <button id='button-menu' className='button-menu'>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
  )
}