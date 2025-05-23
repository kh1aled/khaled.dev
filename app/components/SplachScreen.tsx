// app/components/SplachScreen.tsx
'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from "@/app/assets/icons/khaled.png"

const SplachScreen = ({ setIsloading }: { setIsloading: (v: boolean) => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [setIsloading])

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white'>
      <Image
        className='w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 mb-4 animate-bounce'
        src={logo}
        alt='khaled hamdy fullstack web developer'
      />
    </div>
  )
}

export default SplachScreen
