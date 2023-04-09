import Hero from "@/components/layout/hero";
import { getFeaturedEvents } from "@/dummy-data";
import { Fragment } from "react";
import EventList from "@/components/events/event-list";
import Process from "@/components/layout/process";
import Button from "@/components/ui/button";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment>
      <Hero />
      <Process />
      <section>
        <h1>Top Upcoming Events</h1>
        <EventList events={featuredEvents} />
        <Button link="/events">Browse more events</Button>
      </section>
    </Fragment>
  );
}

export default HomePage;
