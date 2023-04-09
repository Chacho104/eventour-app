import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month, category, cost) {
    const fullPath = `/events/${year}/${month}/${category}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <section>
        <h1>All Upcoming Events</h1>
        <EventList events={events} />
      </section>
    </Fragment>
  );
}

export default AllEventsPage;
