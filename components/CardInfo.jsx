import Image from 'next/image';

export default function ({title, icon, color, children}) {
  return (
    <div className={`bg-gradient-to-br from-${color} to-dark w-64 h-44 rounded m-auto flex flex-col justify-center items-center my-4`}>
      <Image
        src={icon}
        width={36}
        height={36}
        alt="icon home"
        className=' my-2'
      />
      <h3 className='text-white font-bold text-2xl my-2'>{title}</h3>
      {children}
    </div>
  )
}