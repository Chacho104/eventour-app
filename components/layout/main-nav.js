import Link from "next/link";
import classes from "./main-nav.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Fragment, useState } from "react";
import DropDown from "./drop-down";

function MainNav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function closeDropMenu() {
    setToggleMenu(false);
  }
  function showDropMenu() {
    setToggleMenu(true);
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <Link href="/">Eventour</Link>
          </div>
          <ul className={classes["nav-items"]}>
            <li>
              <Link href="/">Home</Link>
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
        </nav>
      </header>
      <header className={classes["alt-header"]}>
        <nav className={classes["alt-navbar"]}>
          <span className={classes.logo}>
            <Link href="/">Eventour</Link>
          </span>
          <span className={classes.menu}>
            {toggleMenu ? (
              <span className={classes['toggle-links']}>
                <RiCloseLine onClick={closeDropMenu} />
              </span>
            ) : (
              <span className={classes['toggle-links']}>
                <RiMenu3Line onClick={showDropMenu} />
              </span>
            )}
            {toggleMenu && <DropDown onClick={closeDropMenu} />}
          </span>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainNav;
