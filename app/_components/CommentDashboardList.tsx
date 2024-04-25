"use client"

import React from 'react'
import Image from 'next/image'
import { Comments } from '@/utils/supabase'
import DeleteButtonComment from './DeleteButtonComment'
import { deleteComment } from '@/action/deleteComment'


const CommentDashboardList = ({comment_id, avatar, content, username, email} : Comments) => {
  return (
    <div key={comment_id} className='ml-4 bg-base-300 card card-body card-bordered mb-4 rounded-lg'>
        <Image className='rounded-full bg-red-500' src={avatar as string} alt={avatar as string} width={50} height={50} />
        <p>Comment : {content}</p>
        <p className='italic'>From : {username || email}</p>
    </div>
  )
}

export default CommentDashboardList