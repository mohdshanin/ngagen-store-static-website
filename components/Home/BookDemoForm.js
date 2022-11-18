import React, { useState } from "react";
import axios from "axios";

import Dialog from "components/Common/Dialog";
import setCookie from "hooks/setCookie";
import getCookie from "hooks/getCookie";
import removeCookie from "hooks/removeCookie";
import styles from "./Home.module.css";

function BookDemoForm() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  removeCookie("name");
  setCookie("age", 21);
  setTimeout(() => {
    console.log("getCookie", getCookie("age"));
  }, 1000);

  function toggleOpen() {
    setOpen((prevState) => !prevState);
  }

  async function bookDemo(e) {
    e.preventDefault();
    setOpen(true);
    try {
      const res = await axios.post("/api/leads", {
        email: email,
      });
      if (res.data.success) {
        console.log("res.data", res.data);
        // setMessage(
        //   <h4 className={styles.message}>
        //     <p style={{ display: "inline", color: "green" }}>
        //       Thanks for signing up.{" "}
        //     </p>
        //     We will send you latest news, updates and announcements.
        //   </h4>
        // );
        setEmail("");
      }
    } catch ({ response }) {
      console.log("response", response);
      if (!response.data.success) {
        setMessage(
          <p className={styles.errMessage}>{response.statusText || ""}</p>
        );
        setEmail("");
      }
    }
  }

  return (
    <div id="book-demo-form" className={`inner_wrapper mt-3 mb-3`}>
      <div className="center_align">
        <h1 className="heading2">Book a demo</h1>
        <p className="description1 m-0">lorem ipsum and supporting text</p>
      </div>
      <div className={styles.form_wrapper}>
        <form
          name="bookDemoForm"
          method="post"
          className={styles.form}
          onSubmit={bookDemo}
        >
          <div className={styles.formGroup}>
            <p className={styles.input_header}>Work Email</p>
            <input
              type="email"
              className={styles.formControl}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
          </div>
          {message}
          <button className="book_demo_btn mt-3" type="submit">
            Confirm
          </button>
        </form>
        {open && (
          <Dialog open={open} handleClose={(event) => toggleOpen(event)}>
            <div className={styles.success_dialog}>Hi</div>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default BookDemoForm;
