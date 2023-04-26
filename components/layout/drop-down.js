import Link from "next/link";
import classes from "./drop-down.module.css";

function DropDown(props) {
  return (
    <nav className={classes["drop-down"]}>
      <ul>
        <li>
          <Link href="/" onClick={props.onClick}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={props.onClick}>
            About
          </Link>
        </li>
        <li>
          <Link href="/events" onClick={props.onClick}>
            Events
          </Link>
        </li>
        <li>
          <Link href="/login" onClick={props.onClick}>
            Log In
          </Link>
        </li>
        <li>
          <Link href="/signup" onClick={props.onClick}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default DropDown;
