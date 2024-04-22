import { createClient} from '@supabase/supabase-js'
import { UUID } from 'crypto';

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.SUPABASE_SECRET_KEY as string)


export interface Diary {
    i? : any;
    diary_id?: number; 
    content : string;
    email : string | undefined;
    username? : string | null;
    avatar : string | undefined;
    created_at? : string;
    comments? : Array<Comments>
}
export interface Comments extends Diary {
    comment_id : UUID;
}


