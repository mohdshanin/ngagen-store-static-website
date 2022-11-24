import React, { useState, useEffect } from "react";
import axios from "axios";

import Dialog from "components/Common/Dialog";
import HeartIcon from "components/Common/Icons/Heart";
import styles from "./Home.module.css";

function BookDemoForm() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function toggleOpen() {
    setOpen((prevState) => !prevState);
  }

  async function bookDemo(e) {
    e.preventDefault();
    const isEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!isEmail) {
      return setErrorMessage(
        <p className="description2" style={{ color: "red" }}>
          Please enter a valid e-mail address.
        </p>
      );
    }
    try {
      const res = await axios.post("/api/leads", {
        email: email,
      });
      if (res.data.alreadyRegistered) {
        setErrorMessage(
          <p className="description2">Demo already booked for this email</p>
        );
      } else {
        setOpen(true);
        setEmail("");
      }
    } catch ({ response }) {
      if (!response.data.success) {
        setErrorMessage(
          <p className="description2" style={{ color: "red" }}>
            {response.statusText || ""}
          </p>
        );
        setEmail("");
      }
    }
  }

  return (
    <section id="book-demo-form" className="inner_wrapper mt-3 mb-3">
      <header className="center_align">
        <h1 className="heading2">Book a demo</h1>
      </header>
      <div className={styles.form_wrapper}>
        <form
          name="bookDemoForm"
          method="post"
          className={styles.form}
          onSubmit={bookDemo}
        >
          <div className={styles.formGroup}>
            <p className={styles.input_header}>Email Address</p>
            <div>
              <input
                type="email"
                className={styles.formControl}
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
                placeholder={"Enter email address"}
              />
            </div>
          </div>
          {errorMessage}
          <button
            type="submit"
            disabled={!email}
            className={`book_demo_btn mt-3 ${email ? "" : "disabled_button"}`}
          >
            Confirm
          </button>
        </form>
        {open && (
          <Dialog open={open} handleClose={(event) => toggleOpen(event)}>
            <div className={styles.success_dialog}>
              <h2 className="heading2">Demo Booked</h2>
              <HeartIcon className="mt-2 mb-2" width="auto" height={100} />
              <h2 className="heading2">Thank you for your interest!</h2>
              <h3 className="heading3">We will contact you shortly</h3>
            </div>
          </Dialog>
        )}
      </div>
    </section>
  );
}

export default BookDemoForm;
