import Hero from "@/components/layout/hero";
import { getFeaturedEvents } from "@/dummy-data";
import { Fragment } from "react";
import EventList from "@/components/events/event-list";
import Process from "@/components/layout/process";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment>
      <Hero />
      <Process />
      <section>
        <h1>Upcoming Events</h1>
        <EventList events={featuredEvents} />
      </section>
    </Fragment>
  );
}

export default HomePage;
