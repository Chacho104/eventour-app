import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import { connectDatabase, getAllDocuments } from "@/components/helpers/db-util";

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
  const client = await connectDatabase();

  if (!client) {
    throw new Error({ message: "Connecting to the database failed!" });
  }

  const res = await getAllDocuments(client, "events", "all-events", {
    date: 1,
  });

  if (!res) {
    throw new Error({ message: "Getting events from the database failed!" });
  }

  const events = JSON.parse(JSON.stringify(res));

  client.close();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
