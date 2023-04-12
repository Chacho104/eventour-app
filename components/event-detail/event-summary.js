import classes from "./event-summary.module.css";

function EventSummary(props) {
  const { category, title } = props;
  return (
    <section>
      <div className={classes.title}>
        <h1>{title}</h1>
        <h2>{category} event</h2>
      </div>
    </section>
  );
}

export default EventSummary;
