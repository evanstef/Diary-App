"use client"
import { deleteComment } from '@/action/deleteComment'
import React, { useActionState, useEffect, useState } from 'react'
import { useRouter } from 'next/router'


type ParamsProps = {
    comment_id : string
    diary_id : string
}


const DeleteButtonComment = ({comment_id, diary_id} : ParamsProps) => {
    const [open, setOpen] = useState(false)
    
    
    function handleClick ({comment_id, diary_id} : ParamsProps ) {
        deleteComment(comment_id, diary_id)
                         
        setOpen(!open)
    }

    function handle () {
        setOpen(!open)
    }



    
    
  return (
    <div className='absolute bottom-0 right-0 mr-2 mb-2'>
        <button onClick={() => handle()}>
        <svg className='bg-slate-400 rounded-lg hover:bg-slate-700 hover:fill-slate-200 duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 32 32">
        <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
        </svg>
        </button>
        <div className={`w-[350px] h-36 modal border border-red-600 modal-middle ${open ? 'modal-open' : ''}  md:w-[500px] md:h-32 mx-auto my-auto card card-body`}>
            <h1 className='font-bold text-center text-lg md:text-xl'>Are You Sure Want To Delete This Comment ? </h1>
            <div className='space-x-2'>
                <button className='btn btn-active' onClick={() => handle()}>No</button>
                <button className='btn btn-warning' onClick={() => handleClick({comment_id, diary_id})}>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteButtonComment