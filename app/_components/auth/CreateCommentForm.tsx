"use client"

import { createCommentAction } from '@/action/createCommentAction'
import React, { RefObject, useRef } from 'react'

type ParamsProps = {
    diary_id : number
}

const CreateCommentForm = ({diary_id} : ParamsProps) => {
    const formRef :RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)

    const resetForm = ():void => { 
        setTimeout(() => {
            formRef.current?.reset()
        }, 1000)
     }

  return (
    <form ref={formRef} onSubmit={resetForm} action={createCommentAction} className='flex flex-col gap-4 mx-auto'>
        <textarea className='h-52 p-4 text-lg border-primary textarea' placeholder='Enter Your Comment Here...' name='content'></textarea>
        <input type="hidden" value={diary_id} name='diary_id'/>
        <button type='submit' className='btn btn-primary max-w-md w-full mx-auto'>Comment Now</button>
    </form>
  )
}

export default CreateCommentForm