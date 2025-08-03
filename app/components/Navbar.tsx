'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import dev_kh from '@/app/assets/icons/khaledLogo.png'
import './styles/Navbar.css'
import { useRef, useState } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const NAV_LINKS = [
  { id: 1, href: 'home', label: 'Home' },
  { id: 2, href: 'about', label: 'About' },
  { id: 4, href: 'projects', label: 'Projects' },
  { id: 3, href: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const route = usePathname()
  const collapse = useRef(null)
  const nav_toggler = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleshow = () => {
    collapse.current.classList.toggle('navbar-collapse-show')
    nav_toggler.current.classList.toggle('open')
    setIsOpen((prev) => !prev);
  }

  const handleClick = ()=>{
    const audio = new Audio('/audios/swoosh.mp3')
    audio.play();
    if(isOpen) handleshow();
  }

  return (
    <section className='header flex items-center justify-between p-4 z-20'>
      <nav className='flex text-lg gap-7 font-medium navbar myNav active w-full'>
        {/* Toggler */}
        <button className='navbar-toggler' type='button' onClick={handleshow}>
          <div id='nav-icon' className='text-white' ref={nav_toggler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Logo image scrolls to top */}
        <ScrollLink
          className='w-24 aspect-square rounded-xl flex items-center justify-center cursor-pointer'
          to='home'
          smooth={true}
          duration={500}
        >
          <Image src={dev_kh} alt='Khaled Hamdy' width={50} height={50} className='object-cover' />
        </ScrollLink>

        <div ref={collapse} className='navbar-collapse flex justify-between items-center' id='navbarSupportedContent'>
          <div className={`absolute inset-0 pointer-events-none ${isOpen ?  'visible': 'hidden'}`}>
            <div className='absolute top-1/2 left-1/2 w-[36.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'>
              <div className='absolute top-1/2 left-1/2 w-[26rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
              <div className='absolute top-1/2 left-1/2 w-[18rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
            </div>
            <div className='absolute top-0 left-5 w-0.25 h-full bg-n-6'></div>
            <div className='absolute top-0 right-5 w-0.25 h-full bg-n-6'></div>
            <div className='absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full'></div>
            <div className='absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full'></div>
            <div className='absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full'></div>
          </div>
          <ul className='navbar-nav mt-2 mt-lg-0 flex flex-col lg:flex-row gap-4'>
            {NAV_LINKS.map(({ href, label, id }) => (
              <li className='nav-item' key={id}>
                <ScrollLink
                  to={href}
                  smooth={true}
                  duration={500}
                  className={`nav-link cursor-pointer ${isOpen ? 'text-[2rem] hover:text-[var(--color-blue)] transition-colors duration-150' : 'text-md'} ${
                    route === `/${href}` ? 'text-white font-bold drop-shadow' : `text-white `
                  }`}
                  onClick={handleClick}
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className='flex justify-center space-x-4 mt-2'>
            <a href='http://wa.me/+201159107545' className='text-md' target='_blank'>
              <i className='fa-brands fa-whatsapp text-white'></i>
            </a>
            <a href='http://github.com/kh1aled' className='text-md' target='_blank'>
              <i className='fa-brands fa-github text-white'></i>
            </a>
            <a href='https://www.linkedin.com/in/khaled-hamdy-0595752a1/' className='text-md' target='_blank'>
              <i className='fa-brands fa-linkedin-in text-white'></i>
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=61554110842664&sk=photos'
              className='text-md'
              target='_blank'
            >
              <i className='fa-brands fa-facebook-f text-white'></i>
            </a>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
