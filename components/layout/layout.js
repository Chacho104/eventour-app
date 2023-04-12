import { Fragment, useContext } from "react";
import Notification from "../ui/notification";
import MainNav from "./main-nav";
import Footer from "./footer/footer";
import NotificationContext from "@/store/notification-context";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <MainNav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
