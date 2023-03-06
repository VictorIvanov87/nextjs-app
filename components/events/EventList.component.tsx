import React from "react";
import EventItem from "./EventItem.component";

import classes from "./EventList.module.css";

interface EventListProps {
  events: Array<any>;
}

const EventList = ({ events }: EventListProps) => {
  return (
    <ul className={classes.list}>
      {events.length > 0 &&
        events.map((event) => <EventItem key={event.id} event={event} />)}
    </ul>
  );
};

export default EventList;
