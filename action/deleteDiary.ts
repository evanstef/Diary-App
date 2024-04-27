"use server";

import { supabase } from "@/utils/supabase";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'


export default async function deleteDiary(diary_id : number | undefined) {
    const { error } = await supabase
        .from("diary-evan")
        .delete()
        .eq("id", diary_id)

        console.log(diary_id);
        
        if(error) return null

        revalidatePath('/dashboard/my-diary')
}