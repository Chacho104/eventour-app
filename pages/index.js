import Hero from "@/components/layout/hero";
import { getFeaturedEvents } from "@/components/helpers/api-util";
import { Fragment } from "react";
import EventList from "@/components/events/event-list";
import Process from "@/components/layout/process";
import Button from "@/components/ui/button";
import Head from "next/head";

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
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
