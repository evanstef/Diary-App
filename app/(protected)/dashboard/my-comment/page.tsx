import CommentDashboardList from '@/app/_components/CommentDashboardList'
import DeleteButtonComment from '@/app/_components/DeleteButtonComment'
import Wrapper from '@/app/_components/Wrapper'
import { getUserData } from '@/utils/clerk'
import { Comments, supabase } from '@/utils/supabase'
import Image from 'next/image'
import React from 'react'

const CommentPage = async () => {
  const {email} = await getUserData()
  const {data} = await supabase.from('diary-evan').select('comments')
  const comments : any = data?.filter((item:any)=> {
    if(item.comments && item.comments.length > 0) {
      return item.comments.some((comment : any) => comment.email === email)
    }
    return false
  }) 

  const commentsByEmails : Array<Comments> = comments.map((item:any) => item.comments).flat().filter((comment : Comments) => comment.email === email)
  
  
  
  return (
    <Wrapper title={commentsByEmails.length > 0 ? 'All Your Comment' : 'Data Comment Not Found'}>
      <div className='flex flex-col gap-4'>
        <div className='divider'></div>
        {commentsByEmails.map((comment) => {
            return (

                <CommentDashboardList comment_id={comment.comment_id} content={comment.content} avatar={comment.avatar} username={comment.username} email={comment.email} />
                
                )
            })}
        <div className='divider'></div>
      </div>
    </Wrapper>
    
  )
}

export default CommentPage