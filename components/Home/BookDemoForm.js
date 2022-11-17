import React, { useState } from "react";

import styles from "./Home.module.css";

function BookDemoForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  function bookDemo(e) {
    e.preventDefault();
    console.log("name", name);
    console.log("companyName", company);
    console.log("emailId", email);
  }

  return (
    <div id="book-demo-form" className={`inner_wrapper mt-4 mb-4`}>
      <div className="center_align">
        <h1 className="heading1">Book a demo</h1>
        <p className="description1">lorem ipsum and supporting text</p>
      </div>
      <div className={styles.form_wrapper}>
        <form className={styles.form} name="bookDemoForm" onSubmit={bookDemo}>
          <div className={styles.formGroup}>
            <p className={styles.input_header}>Full Name</p>
            <input
              type="text"
              className={styles.formControl}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className={styles.formGroup}>
            <p className={styles.input_header}>Company Name</p>
            <input
              type="text"
              className={styles.formControl}
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company name"
            />
          </div>
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
          <button className="book_demo_btn mt-4" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookDemoForm;
