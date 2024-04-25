
import { Comments, supabase } from '@/utils/supabase'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'
import DeleteButtonComment from './DeleteButtonComment'
import { getUserData } from '@/utils/clerk'


type ParamsProps = {
    diary_id : string
}

const CommentList = async ({diary_id} : ParamsProps) => {
    const user = await getUserData()
    const {data, error} = await supabase.from('diary-evan').select('comments').eq("id", diary_id).single()
    
    console.log(data);
    
    if(error) return <p>Please Reload The Page...</p>
    if(!data?.comments?.length) return null;


  return  (
    <div className='flex flex-col gap-4'>
        <div className='divider'></div>
        {data?.comments?.map((comment : Comments) => {
            return (
                <div key={comment.comment_id} className='ml-4 bg-base-200 card card-body card-bordered mb-4 rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <Image className='rounded-full bg-red-500' src={comment.avatar as string} alt={comment.avatar as string} width={50} height={50} />
                        <p className='italic'>{comment.username || comment.email}</p>    
                    </div>
                    <p>{comment.content}</p>
                    {comment.email === user.email && <DeleteButtonComment comment_id={comment.comment_id} diary_id={diary_id}/>}
                </div>
                )
            })}
        <div className='divider'></div>
    </div>
  )
}

export default CommentList