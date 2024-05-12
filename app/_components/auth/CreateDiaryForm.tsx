"use client"

import { create } from '@/action/createDiaryAction'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'

const CreateDiaryForm = () => {
  const [content, setContent] = useState('')
  const [warning,setWarning] = useState(false)
  const router = useRouter()
  
 
  const onSubmit = () => {
    if(content === '') {
      setWarning(true)
    } else {
      router.push('/dashboard/my-diary')
      setWarning(false)
    }
  }

  
  


  return (
    <form action={create} className='flex flex-col gap-4 max-w-xl mx-auto'>
        <textarea onChange={(e) => setContent(e.target.value)} className='h-52 p-4 text-lg border-primary textarea' placeholder='Enter your diary' name='content'></textarea>
        {warning && <div className='text-red-600 text-xl'>Diary Tidak boleh kosong</div> }
        <button onClick={() => onSubmit()} className='btn btn-primary'>Create Now</button>
    </form>
  )
}

export default CreateDiaryForm