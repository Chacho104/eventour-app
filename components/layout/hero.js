import classes from "./hero.module.css";
import Button from "../ui/button";

function Hero() {
  return (
    <section>
      <div className={classes.hero}>
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <h1>Where event goers and event creators meet, faster</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
