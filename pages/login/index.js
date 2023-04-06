import Footer from "@/components/layout/footer/footer";
import MainNav from "@/components/layout/main-nav";
import { Fragment } from "react";

function LoginPage() {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div>
          <h1>This is the Login Page</h1>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default LoginPage;