"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Diary } from '@/utils/supabase'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {motion} from 'framer-motion'
import deleteDiary from '@/action/deleteDiary'

const CardDiary = ({diary_id, avatar, content, username, email, i} : Diary) => {
  const [open,setOpen] = useState(false)
  const pathName = usePathname()

  function handle () {
    setOpen(!open)
  }

  function handleDelete(diary_id : any) {
    deleteDiary(diary_id)
    setOpen(!open)
  }

  

  return (
        <motion.div initial={{opacity: 0,y:200}} animate={{opacity: 1, y:0}} transition={{duration: 1, delay:0.3 * i}} className='card card-body card-bordered rounded-xl overflow-x-hidden bg-base-300 cursor-pointer hover:scale-105 hover:bg-gray-500 hover:shadow-xl duration-300 h-60'>
            <div className='flex items-center gap-4 border-b-2 pb-2'>
               <h1>From<span className='ml-6'>:</span></h1>
               <Image src={avatar as string} alt={avatar as string} width={50} height={50} className='rounded-full' />
               <p className='line-clamp-1'>{username || email}</p>
            </div>
            <h1 className='text-center text-lg font-bold'>Diary</h1>
            <div className='text-sm overflow-y-auto max-h-14'>
              {content}
            </div>
            {pathName === '/dashboard/my-diary' &&  
            <div className='absolute top-0 right-0 mr-2 mt-2'>
                <button className='btn btn-warning' onClick={() => handle()}>
                 Delete
                </button>
                <div className={`modal border border-red-600 modal-middle ${open ? 'modal-open' : ''} w-[500px] h-32 mx-auto my-auto card card-body`}>
                    <h1 className='font-bold text-xl'>Are You Sure Want To Delete This Diary ? </h1>
                    <div className='space-x-2'>
                        <button className='btn btn-active' onClick={() => handle()}>No</button>
                        <button className='btn btn-warning' onClick={() => handleDelete(diary_id)}>Yes</button>
                    </div>
                </div>
            </div>         
            } 
            <Link className='absolute bottom-0 mb-2 right-0 mr-5 bg-slate-500 rounded-lg px-3  font-bold hover:bg-slate-400 hover:text-slate-900 duration-300 ease-in-out' href={`/diary/${diary_id}`}>Comment</Link>
        </motion.div>
      
  )
}

export default CardDiary