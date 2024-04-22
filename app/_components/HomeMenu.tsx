"use client"
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import contoh from '../../public/contoh.png'

const HomeMenu = () => {
  return (
    <div className="flex items-center justify-center gap-16 mt-10">
          <motion.div initial={{opacity: 0,y:-200}} animate={{opacity: 1, y:0}} transition={{duration: 1}} className="text-xl">Welcome👋 To The Diary App, In here you can create your diary and share to everyone else. you can share your experience,love story, or maybe your career in here and also you can comment their diary to give a response for them but before that you must login first to create a diary, Have fun !!</motion.div>
        <motion.div initial={{opacity: 0,y:200}} animate={{opacity: 1, y:0}} transition={{duration: 1}}>
            <Image className="border-[5px] w-[2000px] h-[250px] border-slate-600 shadow-xl rounded-xl" src={contoh} alt="not found" />
        </motion.div>
    </div>
  )
}

export default HomeMenu