import Hero from "@/components/layout/hero";
import MainNav from "@/components/layout/main-nav";
import { getFeaturedEvents } from "@/dummy-data";
import { Fragment } from "react";
import EventList from "@/components/events/event-list";
import Process from "@/components/layout/process";
import Footer from "@/components/layout/footer/footer";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment>
      <MainNav />
      <main>
        <Hero />
        <Process />
        <section>
          <h1>Upcoming Events</h1>
          <EventList events={featuredEvents} />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
