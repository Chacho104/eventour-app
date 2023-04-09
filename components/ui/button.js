import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <div className={classes["btn-div"]}>
        <Link href={props.link} className={classes.btn}>
          {props.children}
        </Link>
      </div>
    );
  }
  return (
    <div className={classes["btn-div"]}>
      <button onClick={props.onClick} className={classes.btn}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
