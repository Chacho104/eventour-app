import FeaturedEvents from "@/components/events/featured-events";
import Hero from "@/components/layout/hero";
import MainNav from "@/components/layout/main-nav";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <MainNav />
      <main>
        <Hero />
        <FeaturedEvents />
      </main>
    </Fragment>
  );
}

export default HomePage;