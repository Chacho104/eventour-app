import Hero from "@/components/layout/hero";
import { Fragment } from "react";
import EventList from "@/components/events/event-list";
import Process from "@/components/layout/process";
import Button from "@/components/ui/button";
import Head from "next/head";
import { connectDatabase, getAllDocuments } from "@/components/helpers/db-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Eventour</title>
        <meta
          name="description"
          content="Find a lot of events that will spice up your life!"
        />
      </Head>
      <Hero />
      <Process />
      <section>
        <h1>Top Upcoming Events</h1>
        <EventList events={props.events} />
        <Button link="/events">Browse more events</Button>
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await connectDatabase();

  if (!client) {
    throw new Error({ message: "Connecting to the database failed!" });
  }

  const res = await getAllDocuments(
    client,
    "events",
    "all-events",
    {
      date: 1,
    },
    { isFeatured: true }
  );

  if (!res) {
    throw new Error({ message: "Getting events from the database failed!" });
  }

  const featuredEvents = JSON.parse(JSON.stringify(res));

  client.close();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
