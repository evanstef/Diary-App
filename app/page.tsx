
import { supabase } from "@/utils/supabase";
import CardDiarys from "./_components/CardDiarys";
import Wrapper from "./_components/Wrapper";
import HomeMenu from "./_components/HomeMenu";

export const revalidate = 0

export default async function Home () {
  const {data} = await supabase.from("diary-evan").select()
    
  return (
      <Wrapper title="The Diary App">
        <HomeMenu />
        <div className="divider mt-5"></div>
          <h1 className="text-center font-bold text-xl my-10">All Users Diary</h1>
          {data?.length ? <CardDiarys /> : <h1 className="text-center text-xl font-bold md:text-4xl">No Diary Data Found Please Sign In To Create Diary</h1>} 
      </Wrapper>

  );
}
