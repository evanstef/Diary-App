"use server" 

import { getUserData } from "@/utils/clerk"
import { Comments, supabase } from "@/utils/supabase"
import { redirect } from "next/navigation"
import React from 'react'

export const deleteComment = async (comment_id : string, diary_id? : string) => {
    const user = await getUserData()
    const {data, error} = await supabase.from("diary-evan").select('comments').eq("id", diary_id).single()
    console.log(data);
    
    console.log(comment_id);
    

    // let message = "Successfully Deleted"
    data?.comments.map((comment : Comments) => {
        if (comment.email !== user.email) {
            return {error : 'Deleted'}
            }  
        }
    )

    // if(message) {
    //     return {message}
    // }
    
    const newDataComment = data?.comments.filter((comment : Comments) => comment.comment_id !== comment_id)
    console.log(newDataComment);
    

    await supabase.from("diary-evan")
        .update({comments : newDataComment})
        .eq("id", diary_id)
    
   
    redirect(`/diary/${diary_id}`)
}



