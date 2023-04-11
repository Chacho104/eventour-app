import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/components/helpers/api-util";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();

  function findEventsHandler(year, month, category) {
    const fullPath = `/events/${year}/${month}/${category}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of events that will spice up your life!"
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <section>
        <h1>All Upcoming Events</h1>
        <EventList events={events} />
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
