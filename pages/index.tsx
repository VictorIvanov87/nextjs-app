import Head from "next/head";
import { getFeaturedEvents } from "./../dummy-data";
import EventList from "@/components/events/EventList.component";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Events App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EventList events={featuredEvents}></EventList>
      </main>
    </>
  );
}
