import React from "react";
import { getFilteredEvents } from "./../../dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList.component";
import Button from "@/components/UI/Button.component";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  const noData = () => {
    return (
      <div>
        <h2>No events found!</h2>
        <Button onClickCallback={() => router.push("/events")}>
          See all events
        </Button>
      </div>
    );
  };

  if (filterData) {
    const year = filterData[0];

    const month = filterData[1];
    const events = getFilteredEvents({
      year: Number(year),
      month: Number(month),
    });

    if (events && events.length > 0) {
      return <EventList events={events}></EventList>;
    } else {
      return noData();
    }
  } else {
    return noData();
  }
};

export default FilteredEventsPage;
