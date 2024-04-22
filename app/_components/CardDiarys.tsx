import React from 'react'
import CardDiary from './auth/CardDiary'
import { supabase } from '@/utils/supabase'

const CardDiarys = async () => {
    const {data, error} = await supabase.from('diary-evan').select().order('created_at', {ascending: false});

    console.log(data);
    
    
    if (error) return <p className='text-center'>Please Reload The Page...</p>;
    
    return  (
        <div className='grid md:grid-cols-3 gap-4'>
            {data?.map((item,i) => {
            return (
            <CardDiary 
            i={i}
            diary_id={item.id}
            key={item.id} 
            content={item.content} 
            avatar={item.avatar} 
            username={item.username} 
            email={item.email} />
            )
             })}
        </div>
        ) 
    }

export default CardDiarys