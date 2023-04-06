import Link from "next/link";
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import classes from "./social-media.module.css";

function SocialMediaLinks() {
  return (
    <section className={classes["social-links"]}>
      <ul className={classes.items}>
        <li>
          <Link href="/">
            <GrFacebook />
          </Link>
        </li>
        <li>
          <Link href="/">
            <GrInstagram />
          </Link>
        </li>
        <li>
          <Link href="/">
            <GrTwitter />
          </Link>
        </li>
        <li>
          <Link href="/">
            <GrLinkedin />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default SocialMediaLinks;
