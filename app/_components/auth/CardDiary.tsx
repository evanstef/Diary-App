"use client"

import React from 'react'
import Image from 'next/image'
import { Diary } from '@/utils/supabase'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {motion} from 'framer-motion'
import deleteDiary from '@/action/deleteDiary'

const CardDiary = ({diary_id, avatar, content, username, email, i} : Diary) => {
  const pathName = usePathname()

  

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
            <div className='absolute top-0 right-0 mt-2 mr-2'>
             {/* The button to open modal */}
              <label htmlFor="my_modal_7" className="btn hover:btn-active">Delete</label>
              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Are you sure want to delete this diary !!</h3>
                  <p className="py-4">Click Outside To Exit or Cancel</p>
                  <button onClick={() => deleteDiary(diary_id)} className='bg-orange-600 px-3 py-1 rounded-lg hover:bg-orange-400 font-semibold hover:text-slate-900 duration-300 text-white md:ml-[400px]'>Yes</button>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
              </div>
            </div>          
            } 
            <Link className='absolute bottom-0 mb-2 right-0 mr-5 bg-slate-500 rounded-lg px-3  font-bold hover:bg-slate-400 hover:text-slate-900 duration-300 ease-in-out' href={`/diary/${diary_id}`}>Comment</Link>
        </motion.div>
      
  )
}

export default CardDiary