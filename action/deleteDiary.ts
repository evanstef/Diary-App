"use server";

import { supabase } from "@/utils/supabase";
import { redirect } from "next/navigation";

export default async function deleteDiary(diary_id : number | undefined) {
    const { error } = await supabase
        .from("diary-evan")
        .delete()
        .eq("id", diary_id)

        redirect("/dashboard/my-diary")
}