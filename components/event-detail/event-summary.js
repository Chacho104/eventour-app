import classes from "./event-summary.module.css";
import Image from "next/image";

function EventSummary(props) {
  const { image, category, title } = props;
  return (
    <section>
      <div className={classes.image}>
        <Image
          src={"/" + image}
          alt={title}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 304px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="details">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <span>320 Participants</span>
      </div>
    </section>
  );
}

export default EventSummary;
