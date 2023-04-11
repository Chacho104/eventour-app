import classes from "./error-alert.module.css";
function ErrorAlert(props) {
  return (
    <section className={classes["error-alert"]}>
      <div className={classes["error-message"]}>{props.children}</div>
    </section>
  );
}

export default ErrorAlert;
