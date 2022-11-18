import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Dialog from "components/Common/Dialog";
import HeartIcon from "components/Common/Icons/Heart";
import setCookie from "hooks/setCookie";
import styles from "./Home.module.css";

function BookDemoForm() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [isDemoBooked, setIsDemoBooked] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function toggleOpen() {
    setOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (Cookies.get("email")) return setIsDemoBooked(Cookies.get("email"));
    return setIsDemoBooked("");
  }, [Cookies.get("email")]);

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
        setCookie("email", email);
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
    <div id="book-demo-form" className="inner_wrapper mt-3 mb-3">
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
            <div title={isDemoBooked ? "You already booked demo" : ""}>
              <input
                type="text"
                className={styles.formControl}
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
                placeholder={isDemoBooked || "Enter email address"}
                disabled={isDemoBooked}
              />
            </div>
          </div>
          {errorMessage}
          <button
            type="submit"
            disabled={!email || isDemoBooked}
            className={`book_demo_btn mt-3 ${email ? "" : "disabled_button"}`}
            title={isDemoBooked ? "You already booked demo" : ""}
          >
            Confirm
          </button>
        </form>
        {open && (
          <Dialog open={open} handleClose={(event) => toggleOpen(event)}>
            <div className={styles.success_dialog}>
              <h2 className="heading2">Demo Booked</h2>
              <p className="description1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <HeartIcon className="mt-2 mb-2" width="auto" height={100} />
              <h2 className="heading2">Thank you for your interest!</h2>
              <h3 className="heading3">We will contact you shortly</h3>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default BookDemoForm;
