import Link from "next/link";
import classes from "./useful-links.module.css";
function UsefulLinks() {
  return (
    <section className={classes.links}>
      <div className={classes['link-group']}>
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/events">All Events</Link>
          </li>
          <li>
            <Link href="/login">Log In</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className={classes['link-group']}>
        <h2>Legal</h2>
        <ul>
          <li>
            <Link href="/">Terms of use</Link>
          </li>
          <li>
            <Link href="/">Privacy</Link>
          </li>
          <li>
            <Link href="/">Copyright</Link>
          </li>
          <li>
            <Link href="/">Accessibilty</Link>
          </li>
          <li>
            <Link href="/">Non-Discrimination</Link>
          </li>
        </ul>
      </div>
      <div className={classes['link-group']}>
        <h2>Help and Contact</h2>
        <ul>
          <li>
            <Link href="/">Customer care</Link>
          </li>
          <li>
            <Link href="/">Refunds policy</Link>
          </li>
          <li>
            <Link href="/">Complaints</Link>
          </li>
        </ul>
      </div>
      <div className={classes['link-group']}>
        <h2>Partners</h2>
        <ul>
          <li>
            <Link href="/">Chachosolutionzz</Link>
          </li>
          <li>
            <Link href="/">Ticketmaster</Link>
          </li>
          <li>
            <Link href="/">Eventify</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UsefulLinks;
