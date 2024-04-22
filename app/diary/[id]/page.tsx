
import CardDiary from '@/app/_components/auth/CardDiary'
import CreateCommentForm from '@/app/_components/auth/CreateCommentForm'
import CommentList from '@/app/_components/CommentList'
import Wrapper from '@/app/_components/Wrapper'
import { supabase } from '@/utils/supabase'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'

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
  
  const posted_at = new Date(data.created_at).toLocaleDateString();
  
  return (
    <Wrapper title='Detail Diary'>
      <div className='flex justify-center gap-11 items-center mb-10'>
          <Image className='rounded-lg' src={data.avatar} alt={data.avatar} width={300} height={300} />
        <div className='text-xl'>
          <p>Tanggal  : posted at {posted_at}</p>
          <p>Name     : <i>~ {data.username || data.email}</i></p>
          <p>Content  : {data.content}</p>
        </div>
      </div>
      <CommentList diary_id={data.id}/> 
      {user?.username || user?.emailAddresses[0].emailAddress ? <CreateCommentForm diary_id={data.id} /> : <h1 className='text-center font-bold text-5xl'>Please Sign In To Comment</h1>}
    </Wrapper>
    
  )
}

export default page