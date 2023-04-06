import Footer from "@/components/layout/footer/footer";
import MainNav from "@/components/layout/main-nav";
import { Fragment } from "react";

function EventDetailPage() {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div>
          <h1>This is the Event Detail Page</h1>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default EventDetailPage;
