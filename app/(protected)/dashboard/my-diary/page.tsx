import CardDiary from '@/app/_components/auth/CardDiary'
import Wrapper from '@/app/_components/Wrapper'

import { getUserData } from '@/utils/clerk'
import { supabase } from '@/utils/supabase'
import React from 'react'

export const revalidate = 0


const MyDiary = async () => {
  const {email} = await getUserData()

  const {data, error} = await supabase.from('diary-evan').select().order('created_at', {ascending : false}).eq('email', email)

  if (error) return <p>Please Reload The Page...</p>

  
  return (
    <Wrapper title='My Diary'>
      <div className='grid md:grid-cols-3 gap-4'>
        {data?.length ? 
        (data?.map((diary : any, i) => (
          <CardDiary 
          i={i}
          key={diary.id} 
          diary_id={diary.id} 
          avatar={diary.avatar} 
          content={diary.content} 
          username={diary.username} 
          email={diary.email} 
          />
        ))) : <p className='text-xl md:text-4xl font-bold'>No Data Found</p>}
        
      </div>
    </Wrapper>
  )
}

export default MyDiary