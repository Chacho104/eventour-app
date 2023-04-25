import { useContext, useRef } from "react";
import Button from "../ui/button";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "@/store/notification-context";

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationContext);

  const emailInputRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) =>
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter.",
          status: "success",
        })
      )
      .catch((error) =>
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        })
      );
  }

  return (
    <section className={classes.newsletter}>
      <p>Register for newsletter to stay updated!</p>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <div>
            <input
              ref={emailInputRef}
              type="email"
              id="email"
              placeholder="Email address"
              aria-label="Your email"
            />
          </div>
          <Button>Register</Button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
