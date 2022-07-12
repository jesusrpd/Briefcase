import Image from 'next/image';

export default function FormContact () {
  return (
    <div className="w-full pt-6 pb-20">
      <h2 className="text-white text-2xl font-bold text-center mb-4">Form contact</h2>
      <div className='w-4/5 m-auto'>
        <div className='relative my-6'>
          <input type="text" className='w-full bg-dark border-b-4 border-white pb-2 pl-2 text-white placeholder:text-white' placeholder='Name'/>
          <div className='absolute bottom-3 right-3'>
            <Image
              src="/SVG/user.svg"
              width={16}
              height={16}
              alt="icon user input"
            />
          </div>
        </div>
        <div className='relative my-6'>
          <input type="text" className='w-full bg-dark border-b-4 border-white pb-2 pl-2 text-white placeholder:text-white' placeholder='Gmail'/>
          <div className='absolute bottom-3 right-3'>
            <Image
              src="/SVG/gmail.svg"
              width={16}
              height={16}
              alt="icon gmail input"
            />
          </div>
        </div>
        <div className='relative my-6'>
          <textarea cols="30" rows="10" className='text-white bg-dark border-4 w-full px-4 py-7 border-white rounded-md placeholder:text-white' placeholder='Comment (Optional)'></textarea>
          <div className='absolute top-3 right-3'>
            <Image
              src="/SVG/comment.svg"
              width={16}
              height={16}
              alt="icon comment input"
            />
          </div>
        </div>
        <button className='bg-green text-dark w-max py-1 px-4 rounded-lg hover:bg-dark hover:text-green border-2 hover:border-green'>Send</button>
      </div>
    </div>
  )
}