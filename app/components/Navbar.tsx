'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import dev_kh from '@/app/assets/icons/khaled.png'
import './styles/Navbar.css'
import { useRef } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const NAV_LINKS = [
  { id: 1, href: 'home', label: 'Home' },
  { id: 2, href: 'about', label: 'About' },
  { id: 3, href: 'contact', label: 'Contact' },
  { id: 4, href: 'projects', label: 'Projects' },
]

const Navbar = () => {
  const route = usePathname()
  const collapse = useRef(null)
  const nav_toggler = useRef(null)

  const handleshow = () => {
    collapse.current.classList.toggle('navbar-collapse-show')
    nav_toggler.current.classList.toggle('open')
  }

  return (
    <header className='header flex items-center justify-between p-4 z-20'>
      <nav className='flex text-lg gap-7 font-medium navbar myNav active w-full'>
        {/* Toggler */}
        <button className='navbar-toggler' type='button' onClick={handleshow}>
          <div id='nav-icon' className='text-sky-500' ref={nav_toggler}>
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
          <Image src={dev_kh} alt='Khaled Hamdy' width={100} height={100} className='rounded-full object-cover' />
        </ScrollLink>

        <div ref={collapse} className='navbar-collapse flex justify-between items-center' id='navbarSupportedContent'>
          <ul className='navbar-nav mt-2 mt-lg-0 flex flex-col lg:flex-row gap-4'>
            {NAV_LINKS.map(({ href, label, id }) => (
              <li className='nav-item duration-150 hover:-translate-y-1 ease-out' key={id}>
                <ScrollLink
                  to={href}
                  smooth={true}
                  duration={500}
                  className={`nav-link cursor-pointer ${
                    route === `/${href}` ? 'text-white font-bold drop-shadow' : 'text-white'
                  }`}
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
    </header>
  )
}

export default Navbar
