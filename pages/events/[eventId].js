import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Button from "@/components/ui/button";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <section className="event-details">
      <EventSummary
        image={event.image}
        category={event.category}
        title={event.title}
      />
      <EventLogistics
        date={event.date}
        location={event.location}
        time={event.time}
        contact={event.contact}
        price={event.price}
      />
      <EventContent description={event.description} />
      <Button>Get your ticket</Button>
    </section>
  );
}

export default EventDetailPage;
