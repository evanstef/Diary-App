"use server"

import { redirect } from "next/navigation"
import { getUserData } from "@/utils/clerk"
import { Diary, supabase } from "@/utils/supabase"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const create = async (values : FormData) => {
    const content = values.get('content') as string
    const {avatar, email, username} = await getUserData()
    const data : Diary = {content, email, avatar, username}

    if(!content){
        return false
    } else {
        
        await supabase.from("diary-evan").insert(data)    
    }  

    redirect('/dashboard/my-diary')
}