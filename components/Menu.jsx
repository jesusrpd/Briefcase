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
        {
          menuShow ? 
          (
            <Image
              onClick={setMenuShow}
              src="/SVG/close.svg"
              alt='icon hamburguer'
              width={22}
              height={22}
            />
          ): (
            <Image
              onClick={setMenuShow}
              src="/SVG/hamburguer.svg"
              alt='icon hamburguer'
              width={25}
              height={19}
            />
          )
        }
      </div>
  )
}