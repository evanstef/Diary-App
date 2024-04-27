"use server"

import { redirect } from "next/navigation"
import { getUserData } from "@/utils/clerk"
import { Diary, supabase } from "@/utils/supabase"
import { revalidatePath } from "next/cache"

export const create = async (values : FormData) => {
    const content = values.get('content') as string
    const {avatar, email, username} = await getUserData()
    const data : Diary = {content, email, avatar, username}
    
    await supabase.from("diary-evan").insert(data)
    
    revalidatePath('/dashboard/my-diary', 'page')
}