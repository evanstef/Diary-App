
import CardDiary from '@/app/_components/auth/CardDiary'
import CreateCommentForm from '@/app/_components/auth/CreateCommentForm'
import CommentList from '@/app/_components/CommentList'
import Wrapper from '@/app/_components/Wrapper'
import { supabase } from '@/utils/supabase'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import GetPastTime from '@/app/_components/GetPastTime'

type ParamsProps = {
    params : {
        id : number
    }
}

const page = async ({params} : ParamsProps) => {
  const user = await currentUser()
  
  
  const {data, error} = await supabase.from('diary-evan').select().eq('id', params.id).single()
  if(error) {
    return <p>Please Reload The Page...</p>
  }
  
  
  return (
    <Wrapper title='Detail Diary'>
      <div className='flex flex-col md:flex-row justify-center gap-11 items-center mb-10'>
          <Image className='rounded-lg w-32 h-32 md:w-72 md:h-72' src={data.avatar} alt={data.avatar} width={300} height={300} />
        <div className='md:text-xl'>
          <div className='flex gap-2'>
            <p className='font-bold text-lg'>DiPosting : </p>
            <GetPastTime past_time={data.created_at} />
          </div>
          <p><span className='font-bold text-lg'>Name</span>     : <i>~ {data.username || data.email}</i></p>
          <p><span className='font-bold text-lg'>Content</span>  : {data.content}</p>
        </div>
      </div>
      <CommentList diary_id={data.id}/> 
      {user?.username || user?.emailAddresses[0].emailAddress ? <CreateCommentForm diary_id={data.id} /> : <h1 className='text-center font-bold text-5xl'>Please Sign In To Comment</h1>}
    </Wrapper>
    
  )
}

export default page