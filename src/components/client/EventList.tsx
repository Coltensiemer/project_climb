'use client'

import React, { useEffect, useState } from "react";
import { supabaseLocal } from "supabaseClient";

interface Events { 
  id: number,
  event: string,
  resultsURL: string
}

export default function EventList() {
  const [events, setEvents] = useState<Events[]>([]);


  /// Update to fetch on server 
  // remove state, pass down as props to this client
  // use logic! 

  const handleEventList = async () => {
    try {
      const { data, error } = await supabaseLocal
        .from("USAClimbingEvents")
        .select();
      if (!data) return console.log("no data");
      if (data) {
        const first20 = data.slice(0, 20);
        setEvents(first20)
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    handleEventList();
  }, []);

  return (
    <>
      <p>Hello World</p>
      <ul>
        {events.map((event: Events, index: number) => (
          <li key={index}>{event.resultsURL}</li>
        ))}
      </ul>
    </>
  );
}
