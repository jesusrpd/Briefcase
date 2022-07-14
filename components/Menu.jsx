import Image from 'next/image';

export default function Menu ({menuShow, setMenuShow}) {
  return (
    <div className='h-12 w-screen flex items-center justify-between px-5 fixed bottom-0 left-0 z-20 bg-dark'>
        <Image
          src="/SVG/logo.svg"
          alt='logo JR'
          width={40}
          height={40}
        />
        <input type="checkbox" id="btn-menu" onClick={() => setMenuShow(!menuShow)}/>
        <label htmlFor="btn-menu" className="lbl-menu">
          <span id="spn1"></span>
          <span id="spn2"></span>
          <span id="spn3"></span>
        </label>
      </div>
  )
}