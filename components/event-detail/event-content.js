import classes from "./event-content.module.css";

function EventContent(props) {
  const { description } = props;
  return (
    <section className={classes["event-content"]}>
      <p>{description}</p>
    </section>
  );
}

export default EventContent;
