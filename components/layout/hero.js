import Button from "../ui/button";
import classes from "./hero.module.css";
import Link from "next/link";
function Hero() {
  return (
    <section>
      <div className={classes.hero}>
        <h1>
          Where event goers and event creators meet faster, for greater fun
        </h1>
        <Button link="/events">Browse all events</Button>
      </div>
    </section>
  );
}

export default Hero;
