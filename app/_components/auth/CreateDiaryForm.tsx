import { create } from '@/action/createDiaryAction'
import React from 'react'

const CreateDiaryForm = () => {
    

  return (
    <form action={create} className='flex flex-col gap-4 max-w-xl mx-auto'>
        <textarea className='h-52 p-4 text-lg border-primary textarea' placeholder='Enter your diary' name='content'></textarea>
        <button type='submit' className='btn btn-primary'>Create Now</button>
    </form>
  )
}

export default CreateDiaryForm