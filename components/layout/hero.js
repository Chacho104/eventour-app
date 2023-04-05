import classes from "./hero.module.css";
import Link from "next/link";
function Hero() {
  return (
    <section>
      <div className={classes.hero}>
        <h1>
          Where event goers and event creators meet faster, for greater fun
        </h1>
        <Link href="/events" className="nav-link">Browse all events</Link>
      </div>
    </section>
  );
}

export default Hero;
