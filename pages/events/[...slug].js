import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  console.log(filterData)

  if (!filterData) {
    return <p className="center">Loading events...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const filteredCategory = filterData[2];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2023 ||
    numMonth < 1 ||
    numMonth > 12 ||
    !filteredCategory
  ) {
    return <p className="center">Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
    category: filteredCategory,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found for the chosen filter!</p>;
  }

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

  return (
    <Fragment>
      <section>
        <h1>{`All ${filteredCategory} events for ${selectedMonthName}, ${numYear}`}</h1>
        <EventList events={filteredEvents} />
      </section>
    </Fragment>
  );
}

export default FilteredEventsPage;
