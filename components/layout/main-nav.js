import Link from "next/link";
import classes from "./main-nav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <Link href="/">Eventour</Link>
        </div>
        <ul className={classes["nav-items"]}>
          <li>
            <Link href="/events">All Events</Link>
          </li>
          <li className={classes.login}>
            <Link href="/login">Log In</Link>
          </li>
          <li className={classes.signup}>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
