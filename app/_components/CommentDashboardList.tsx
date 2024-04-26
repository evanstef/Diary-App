"use client"

import React from 'react'
import Image from 'next/image'
import { Comments } from '@/utils/supabase'
import DeleteButtonComment from './DeleteButtonComment'
import { deleteComment } from '@/action/deleteComment'
import { motion } from 'framer-motion'


const CommentDashboardList = ({comment_id, avatar, content, username, email,i} : Comments) => {
  return (
    <motion.div initial={i % 2 === 0 ? {x:400, opacity:0} : {x:-400,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5,delay:0.4 * i}} key={comment_id} className='ml-4 bg-base-300 card card-body card-bordered mb-4 rounded-lg'>
        <Image className='rounded-full bg-red-500' src={avatar as string} alt={avatar as string} width={50} height={50} />
        <p>Comment : {content}</p>
        <p className='italic'>From : {username || email}</p>
    </motion.div>
  )
}

export default CommentDashboardList