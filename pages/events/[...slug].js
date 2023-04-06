import Footer from "@/components/layout/footer/footer";
import MainNav from "@/components/layout/main-nav";
import { Fragment } from "react";

function FilteredEventsPage() {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div>
          <h1>This is the Filtered Events Page</h1>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default FilteredEventsPage;
