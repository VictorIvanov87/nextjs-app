import classes from "./newsletter-registration.module.css";
import { useRef } from "react";

function NewsletterRegistration() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function registrationHandler(event: any) {
    event.preventDefault();

    const inputValue = inputRef.current?.value;
    if (inputValue && inputValue.length > 3) {
      const res = await fetch("/api/newsletter", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email: inputValue }),
      });
      const data = await res.json();
      console.log(data);
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={inputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
