"use client"

import React from 'react'
import arrow from '../../public/icons8-chevron-up-96.png'
import Image from 'next/image'

const BackTop = () => {
  return (
    <button onClick={() => {
      window.scrollTo({ top: 0});
  }} className='bg-slate-100 p-1 hover:invert hover:bg-slate-400 duration-300 ease-in-out fixed bottom-0 mb-4 mr-6 right-0 md:mr-36 md:mb-11 rounded-lg'>
        <Image className='animate-bounce' src={arrow} alt="backtop" width={40} height={40} />
    </button>
  )
}

export default BackTop