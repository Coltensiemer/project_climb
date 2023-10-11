import Link from "next/link";
import React, { useEffect, useState } from "react";
import { supabaseLocal } from "supabaseClient";

export default function EventList() {
  const [events, setEvents] = useState<any[]>([]);

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
        {events.map((event: any, index: number) => (
          <li key={index}>{event.resultsURL}</li>
        ))}
      </ul>
    </>
  );
}
