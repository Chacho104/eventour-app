import { Fragment } from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";
function EventList(props) {
  const { events } = props;
  return (
    <Fragment>
      <ul className={classes.events}>
        {events.map((event) => (
          <EventItem
            key={event._id}
            id={event._id}
            category={event.category}
            title={event.title}
            date={event.date}
            image={event.image}
            slug={event.slug}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default EventList;
