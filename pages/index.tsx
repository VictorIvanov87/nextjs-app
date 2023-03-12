import Head from "next/head";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "@/components/events/EventList.component";
import EventsSearch from "@/components/events/EventsSearch.component";

const Home = ({ events }: any) => {
  const router = useRouter();

  const handleEventsSearch = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Events App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EventsSearch onSearch={handleEventsSearch} />
        <EventList events={events}></EventList>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};

export default Home;
