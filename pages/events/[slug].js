import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import Head from "next/head";
import Comments from "@/components/input/comments";
import { Fragment } from "react";
import { connectDatabase, getAllDocuments } from "@/components/helpers/db-util";

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
      {event.map((event) => (
        <EventSummary
          key={event._id}
          eventId={event._id}
          category={event.category}
          title={event.title}
        />
      ))}
      {event.map((event) => (
        <EventLogistics
          key={event._id}
          eventId={event._id}
          title={event.title}
          date={event.date}
          location={event.location}
          time={event.time}
          contact={event.contact}
          price={event.price}
          image={event.image}
        />
      ))}
      {event.map((event) => (
        <EventContent
          key={event._id}
          eventId={event._id}
          description={event.description}
        />
      ))}
      {event.map((event) => (
        <Comments key={event._id} eventId={event._id} />
      ))}
      <Button>Get your ticket</Button>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const client = await connectDatabase();

  if (!client) {
    throw new Error({ message: "Connecting to the database failed!" });
  }

  const res = await getAllDocuments(
    client,
    "events",
    "all-events",
    {},
    {
      slug: slug,
    }
  );

  if (!res) {
    throw new Error({ message: "Getting events from the database failed!" });
  }

  const event = JSON.parse(JSON.stringify(res));

  client.close();

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const client = await connectDatabase();

  if (!client) {
    throw new Error({ message: "Connecting to the database failed!" });
  }

  const res = await getAllDocuments(
    client,
    "events",
    "all-events",
    {},
    { isFeatured: true }
  );

  if (!res) {
    throw new Error({ message: "Getting events from the database failed!" });
  }

  const events = JSON.parse(JSON.stringify(res));

  client.close();

  const paths = events.map((event) => ({ params: { slug: event.slug } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailPage;
