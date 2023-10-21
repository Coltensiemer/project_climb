

import EventList from "~/components/client/EventList";
import { supabaseclient } from "supabaseClient";




export default async function Home() {

const { data, error } = await supabaseclient
.from("USAClimbingEvents")
.select().throwOnError()


  return (
    <>
      <div>
        <p className="bg-red-500">Hi</p>
        </div>
     <EventList data={data}/> 
    </>
  );
}

