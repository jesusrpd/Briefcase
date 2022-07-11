import CardInfo from './CardInfo';
import Image from 'next/image'

export default function Contactme () {
  return (
    <div className="w-full min-h-screen">
      <h2 className="text-white text-2xl font-bold text-center mb-4">Contact me</h2>
      <CardInfo color="green" icon="/SVG/home.svg" title="Home">
        <p className='text-white text-lg my-2'>México, CDMX</p>
      </CardInfo>
      <CardInfo color="red" icon="/SVG/phone.svg" title="Phone">
        <p className='text-white text-lg my-2'>(+52) 5537046181</p>
      </CardInfo>
      <CardInfo color="green" icon="/SVG/mail.svg" title="Gmail">
        <p className='text-white text-lg my-2'>jesusrodrigo881@gmail.com</p>
      </CardInfo>
      <CardInfo color="red" icon="/SVG/hashtag.svg" title="Social media">
        <div className='flex justify-evenly w-full'>
          <Image
            src="/SVG/linkedin.svg"
            width={18}
            height={18}
            alt="icon linkedin"
          />
          <Image
            src="/SVG/github.svg"
            width={18}
            height={18}
            alt="icon github"
          />
          <Image
            src="/SVG/instagram.svg"
            width={18}
            height={18}
            alt="icon instagram"
          />
          <Image
            src="/SVG/facebook.svg"
            width={18}
            height={18}
            alt="icon facebook"
          />
        </div>
      </CardInfo>
    </div>
  )
}