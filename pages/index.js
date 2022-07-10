import { useState } from 'react';
import Briefcase from '../components/Briefcase';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Home () {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <div className='bg-dark'>
      <Header/>
      <Briefcase/>
      <Menu menuShow={menuShow} setMenuShow={() => setMenuShow(!menuShow)}/>
      {
        menuShow ? 
        (
          <div className='w-full h-screen flex items-center justify-center fixed top-0 bg-dark z-10'>
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