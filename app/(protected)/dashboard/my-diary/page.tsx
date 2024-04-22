import CardDiary from '@/app/_components/auth/CardDiary'
import Wrapper from '@/app/_components/Wrapper'
import { getUserData } from '@/utils/clerk'
import { supabase } from '@/utils/supabase'
import React from 'react'


const MyDiary = async () => {
  const {email} = await getUserData()

  const {data, error} = await supabase.from('diary-evan').select().order('created_at', {ascending : false}).eq('email', email)

  if (error) return null

  console.log(data);
  

  return (
    <Wrapper title='My Diary'>
      <div className='grid md:grid-cols-3 gap-4'>
        {data?.map((diary : any, i) => (
          <CardDiary 
          i={i}
          key={diary.id} 
          diary_id={diary.id} 
          avatar={diary.avatar} 
          content={diary.content} 
          username={diary.username} 
          email={diary.email} 
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default MyDiary