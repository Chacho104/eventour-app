import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "@/components/helpers/api-util";
import Head from "next/head";
import Comments from "@/components/input/comments";
import { Fragment } from "react";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
        <Button link="/events">Show all events</Button>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary category={event.category} title={event.title} />
      <EventLogistics
        title={event.title}
        date={event.date}
        location={event.location}
        time={event.time}
        contact={event.contact}
        price={event.price}
        image={event.image}
      />
      <EventContent description={event.description} />
      <Comments eventId={event.id} />
      <Button>Get your ticket</Button>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  // Instead of pre-rendering all events, we could just pre-render the featured events.
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailPage;
