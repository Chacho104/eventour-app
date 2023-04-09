import classes from "./event-summary.module.css";
function EventSummary(props) {
  const { image, category, title } = props;
  return (
    <section>
      <div className={classes.image}>
        <img src={"/" + image} alt={title} />
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
