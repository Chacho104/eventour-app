import Link from "next/link";
import classes from "./event-item.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

function EventItem(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const { image, title, date, category, slug } = props;
  const formattedDate = new Date(date);
  const eventDay = formattedDate.getDate();
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
  const eventMonth = month[formattedDate.getMonth()];

  const exploreLink = `/events/${slug}`;
  return (
    <li
      ref={ref}
      className={`${classes.event} ${isInView ? classes.reveal : ""}`}
    >
      <Link href={exploreLink}>
        <Image src={"/" + image} alt={title} width={304} height={256} />
        <div className={classes.date}>
          <p>{eventDay}</p>
          <p>{eventMonth}</p>
        </div>
        <div className="details">
          <h3>{category}</h3>
          <h2>{title}</h2>
          <span>320 Participants</span>
        </div>
      </Link>
    </li>
  );
}

export default EventItem;
