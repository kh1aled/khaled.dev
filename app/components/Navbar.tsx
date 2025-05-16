'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dev_kh from '@/public/favicon.png'
import TransitionLink from './utils/TransitionLink'
import './styles/Navbar.css'
import { useRef } from 'react'

const NAV_LINKS = [
  { id : 1 , href: '/', label: 'Home' },
  { id : 2 ,href: '/about', label: 'About' },
  { id : 3 ,href: '/contact', label: 'Contact' },
  { id : 4,href: '/projects', label: 'Projects' },
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
      {/* Navigation */}
      <nav className='flex text-lg gap-7 font-medium navbar myNav active w-full'>
        <button className='navbar-toggler' type='button' onClick={handleshow}>
          {/* <i className="fa-solid fa-angle-down"></i> */}
          <div id='nav-icon' className='text-sky-500' ref={nav_toggler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        {/* Logo */}
        <Link href='/' className='bg-black-500 w-12 aspect-square rounded-xl flex items-center justify-center'>
          <Image src={dev_kh} width={30} height={30} alt='khaled.dev' priority />
        </Link>
        <div ref={collapse} className='navbar-collapse ' id='navbarSupportedContent'>
          <ul className='navbar-nav mt-2 mt-lg-0'>
            {NAV_LINKS.map(({ href, label, id }) => (
              <li className='nav-item' key={id}>
                <TransitionLink
                  key={href}
                  href={href}
                  className={`nav-link ${route === href ? 'text-black' : ''}`}
                  aria-current={route === href ? 'page' : undefined}
                >
                  {label}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
        {/* {NAV_LINKS.map(({ href, label }) => (
          <TransitionLink
            key={href}
            href={href}
            className={`navbar-link ${route === href ? 'text-black' : ''}`}
            aria-current={route === href ? 'page' : undefined}
          >
            {label}
          </TransitionLink>
        ))} */}
      </nav>
    </header>
  )
}

export default Navbar
