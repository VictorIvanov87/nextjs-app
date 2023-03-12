import React from "react";
import EventList from "@/components/events/EventList.component";
import { getAllEvents } from "@/helpers/api-util";

const EventsPage = ({events}: any) => {
  return (
    <div>
      <EventList events={events}></EventList>
    </div>
  );
};

export const getStaticProps = async () => {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 1800,
  };
};

export default EventsPage;
