import React from "react";

import Banners from "components/Home/Banners";
import Section from "components/Home/Section";
import Features from "components/Home/Features";
import ConnectWalletCard from "components/Home/ConnectWalletCard";
import Steps from "components/Home/Steps";
import NftCards from "components/Home/NftCards";
import ComingSoon from "components/Home/ComingSoon";
import BookDemoForm from "components/Home/BookDemoForm";

function Home() {
  return (
    <>
      <Banners />
      <Section />
      <Features />
      <ConnectWalletCard />
      <Steps />
      <NftCards />
      <ComingSoon />
      <BookDemoForm />
    </>
  );
}

export default Home;
