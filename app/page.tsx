import { createClient } from "@/lib/supabase/server";

export default async function Home() {

  const supabase = await createClient()
  const { data: rooms } = await supabase.from('rooms').select('*')
  console.log(rooms)


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      
    </div>
  );
}
