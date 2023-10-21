'use client'

import React, { useEffect, useState } from "react";


export interface EventsType { 
  id: number,
  event: string,
  resultsURL: string
}

export default function EventList(data: any) {
  const [events, setEvents] = useState<EventsType[]>([data]);



  return (
    <>
      <p>Hello World</p>
      <ul>
        {events.map((event: EventsType, index: number) => (
          <li key={index}>{event.resultsURL}</li>
        ))}
      </ul>
    </>
  );
}
