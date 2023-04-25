import NewsletterRegistration from "../input/newsletter-registration";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section>
      <div className={classes.hero}>
        <h1>Where event goers and event creators meet, faster</h1>
        <NewsletterRegistration />
      </div>
    </section>
  );
}

export default Hero;
