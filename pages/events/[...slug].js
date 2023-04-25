import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";

const fetcher = (url) => fetch("/api/events").then((res) => res.json());

function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();

  const filterData = router.query.slug;

  const { data, error } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      const events = data.events;
      setLoadedEvents(events);
    }
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered events</title>
      <meta name="description" content="A list of filtered events." />
    </Head>
  );

  if (!loadedEvents) {
    return (
      <div className="center">
        {pageHeadData}
        <span>Loading events...</span>
      </div>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const filteredCategory = filterData[2];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const selectedMonthName = month[numMonth - 1];

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All ${filteredCategory} events in ${selectedMonthName}, ${numYear}`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2023 ||
    numMonth < 1 ||
    numMonth > 12 ||
    typeof filteredCategory !== "string" ||
    error
  ) {
    return (
      <ErrorAlert>
        {pageHeadData}
        <p className="center">Invalid filter. Please adjust your values!</p>
        <Button link="/events">Show all events</Button>
      </ErrorAlert>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    const eventCategory = event.category;
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1 &&
      eventCategory === filteredCategory
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        {pageHeadData}
        <p className="center">No events found for the chosen filter!</p>
        <Button link="/events">Show all events</Button>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      {pageHeadData}
      <section>
        <h1>{`All ${filteredCategory} events in ${selectedMonthName}, ${numYear}`}</h1>
        <EventList events={filteredEvents} />
      </section>
    </Fragment>
  );
}

export default FilteredEventsPage;
