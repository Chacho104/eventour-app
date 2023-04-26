import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section>
      <div className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/event-banner2.jpeg"
            fill
            alt="First event banner"
          />
        </div>
        <div className={classes.content}>
          <h1>Where event goers and event creators meet, faster</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
