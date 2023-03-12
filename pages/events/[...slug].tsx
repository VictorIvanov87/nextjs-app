import React from "react";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList.component";
import Button from "@/components/UI/Button.component";
import { getFilteredEvents } from "@/helpers/api-util";

const FilteredEventsPage = ({ hasError, events }: any) => {
  const router = useRouter();

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

  if (hasError) {
    return noData();
  } else {
    return <EventList events={events}></EventList>;
  }
};

export const getServerSideProps = async (context: any) => {
  const filterData = context.params.slug;
  const year = filterData[0];
  const month = filterData[1];
  const events = await getFilteredEvents({
    year: Number(year),
    month: Number(month),
  });

  if (events && events.length > 0) {
    return { props: { events } };
  } else {
    return { props: { hasError: true } };
  }
};

export default FilteredEventsPage;
