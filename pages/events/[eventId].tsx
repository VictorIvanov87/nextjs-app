import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";
import EventSummary from "@/components/event-detail/EventSummary.component";
import EventContent from "@/components/event-detail/EventContent.component";
import EventLogistics from "@/components/event-detail/EventLogistics.component";

const EventDetailsPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.eventId);

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

export default EventDetailsPage;
