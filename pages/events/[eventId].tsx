import React from "react";
import EventSummary from "@/components/event-detail/EventSummary.component";
import EventContent from "@/components/event-detail/EventContent.component";
import EventLogistics from "@/components/event-detail/EventLogistics.component";
import {
  getAllEvents,
  getEventById,
} from "./../../helpers/api-util";

const EventDetailsPage = ({ event }: any) => {
  if (!event) {
    return <p>No Event Found</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const id = context.params.eventId;
  const event = await getEventById(id);

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();

  const paths = await allEvents.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default EventDetailsPage;
