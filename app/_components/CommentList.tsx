
import { supabase } from '@/utils/supabase'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'

type ParamsProps = {
    diary_id : string
}

const CommentList = async ({diary_id} : ParamsProps) => {
    const user = await currentUser()
    console.log(user);
    
    const {data, error} = await supabase.from('diary-evan').select('comments').eq("id", diary_id).single()

    
    if(error) return <p>Please Reload The Page...</p>
    if(!data?.comments?.length) return null;

  return  (
    <div className='flex flex-col gap-4'>
        <div className='divider'></div>
        {data?.comments?.map((comment : any) => {
            return (
                <div className='ml-4 bg-base-200 card card-body card-bordered mb-4 rounded-lg'>
                    <Image className='rounded-full bg-red-500' src={comment.avatar} alt={comment.avatar} width={50} height={50} />
                    <p>Comment : {comment.content}</p>
                    <p className='italic'>From : {comment.username || comment.email}</p>
                </div>
            )
            })}
        <div className='divider'></div>
    </div>
  )
}

export default CommentList