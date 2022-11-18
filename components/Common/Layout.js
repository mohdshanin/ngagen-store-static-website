import React from "react";

import Header from "components/Common/Header";
import Footer from "components/Common/Footer";

export default function Layout({ children }) {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
}
