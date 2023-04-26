import Link from "next/link";
import classes from "./useful-links.module.css";
function UsefulLinks() {
  return (
    <section className={classes.links}>
      <div className={classes["link-group"]}>
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/login">Log In</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className={classes["link-group"]}>
        <h2>Legal</h2>
        <ul>
          <li>
            <Link href="/">Terms of use</Link>
          </li>
          <li>
            <Link href="/">Privacy</Link>
          </li>
          <li>
            <Link href="/">Accessibilty</Link>
          </li>
          <li>
            <Link href="/">Copyright</Link>
          </li>
        </ul>
      </div>
      <div className={classes["link-group"]}>
        <h2>Customer care</h2>
        <ul>
          <li>
            <Link href="/">Enquiries</Link>
          </li>
          <li>
            <Link href="/">Reviews</Link>
          </li>
          <li>
            <Link href="/">Refunds</Link>
          </li>
          <li>
            <Link href="/">Complaints</Link>
          </li>
        </ul>
      </div>
      <div className={classes["link-group"]}>
        <h2>Partners</h2>
        <ul>
          <li>
            <Link href="/">C-solutions</Link>
          </li>
          <li>
            <Link href="/">Ticketmaster</Link>
          </li>
          <li>
            <Link href="/">Eventify</Link>
          </li>
          <li>
            <Link href="/">Live-it</Link>
          </li>
        </ul>
      </div>
      <div className={classes["link-group"]}>
        <h2>Resources</h2>
        <ul>
          <li>
            <Link href="/">Gallery</Link>
          </li>
          <li>
            <Link href="/">Blogs</Link>
          </li>
          <li>
            <Link href="/">Creators</Link>
          </li>
          <li>
            <Link href="/">Careers</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UsefulLinks;
