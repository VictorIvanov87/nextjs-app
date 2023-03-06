import React from "react";
import EventItem from "./EventItem.component";

interface EventListProps {
  events: Array<any>;
}

const EventList = ({ events }: EventListProps) => {
  return (
    <ul>
      {events.length > 0 &&
        events.map((event) => <EventItem key={event.id} event={event} />)}
    </ul>
  );
};

export default EventList;
