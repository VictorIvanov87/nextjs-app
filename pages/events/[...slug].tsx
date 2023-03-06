import React from "react";
import { getFilteredEvents } from "./../../dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList.component";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

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
      return <>No events found!</>;
    }
  } else {
    return <>No events found!</>;
  }
};

export default FilteredEventsPage;
