import { getAllEvents } from "@/dummy-data";
import React from "react";
import EventList from "@/components/events/EventList.component";

const EventsPage = () => {
  const allEvents = getAllEvents();
  return (
    <div>
      <EventList events={allEvents}></EventList>
    </div>
  );
};

export default EventsPage;
