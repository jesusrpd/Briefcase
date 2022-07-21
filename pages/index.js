import Briefcase from '../components/Briefcase';
import Contactme from '../components/Contactme';
import FormContact from '../components/FormContact';
import Header from '../components/Header';
import Service from '../components/Servicios';
import Skills from '../components/Skills';
import Trajectory from '../components/Trajectory';
import { useEffect } from 'react';
import Nav from '../components/Nav';

export default function Home () {

  useEffect(() => {
    const toggleButton = document.getElementById('button-menu')
    const navWrapper = document.getElementById('nav')

    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('close')
      navWrapper.classList.toggle('show')
    })

    navWrapper.addEventListener('click', e => {
      if (e.target.id === "nav") {
        navWrapper.classList.remove("show")
        navWrapper.classList.remove("close")
      }
    })
  },[])

  return (
    <div className='bg-dark'>
      <Header/>
      <Briefcase/>
      <Service/>
      <Trajectory/>
      <Skills/>
      <Contactme/>
      <FormContact/>
      <Nav/>
    </div>
  )
}