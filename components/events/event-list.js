import { Fragment } from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";
import Link from "next/link";
function EventList(props) {
  const { events } = props;
  return (
    <Fragment>
      <ul className={classes.events}>
        {events.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            category={event.category}
            title={event.title}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
      <div className={classes.action}>
        <Link href="/events" className="nav-link">
          Browse more events
        </Link>
      </div>
    </Fragment>
  );
}

export default EventList;
