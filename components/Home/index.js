import React, { useState, useEffect } from "react";

import styles from "./Home.module.css";

function Home() {
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
    <div>
      <div className={styles.banner_wrapper}>
        <img
          src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-8.webp`}
          alt="banner1"
          width="100%"
          className={styles.banner1}
        />
        <div className={`${styles.banner_shadow} shadow-background`} />
        <div className={styles.banner_text}>
          <h1 className={styles.heading1}>
            NFT-Powered <br />
            Marketing platform for Brands
          </h1>
          <p className={styles.description}>
            Drive engagement, personalization & loyalty in Web3
          </p>
        </div>
      </div>
      <div className={styles.banner_wrapper}>
        <img
          src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-7.png`}
          alt="banner2"
          width="100%"
          className={styles.banner2}
        />
        <div className={styles.banner_text}>
          <h1 className={styles.heading1}>Embed NFTs on your website</h1>
          <p className={styles.description}>
            Create, Sell, Award NFTs to customers, creators & connoisseurs
            <br /> No coding required, Go live in days with our ready-to-use
            SaaS
          </p>
        </div>
      </div>
      <div className={styles.section_wrapper}>
        <div className={styles.section_item}>
          <h1 className={styles.title_wrapper}>Custom Store</h1>
          <p className={styles.description_wrapper}>
            Customize the user experience to seamlessly embed NFTs on your
            existting website
          </p>
        </div>
        <div className={styles.section_item}>
          <h1 className={styles.title_wrapper}>Token Gated Commerce</h1>
          <p className={styles.description_wrapper}>
            Offer exclusive experiences to your NFT holders across digital and
            physical channels
          </p>
        </div>
        <div className={styles.section_item}>
          <h1 className={styles.title_wrapper}>Personalization SDK</h1>
          <p className={styles.description_wrapper}>
            Personalize offers and experience based on what NFTs a user holds
          </p>
        </div>
      </div>
      <div className={styles.inner_wrapper}>
        <div className={styles.center_align}>
          <h1 className={styles.heading1}>What makes us unique?</h1>
          <p className={styles.description}>
            Web3 architecture that powers a Web2 User Experience
          </p>
        </div>
        <div className={styles.article_step}>
          <div className={styles.img_wrapper}>
            <img
              src="/torus_wallet.svg"
              alt="torus_wallet"
              width="auto"
              height="35px"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-5.gif`}
              alt="torus_wallet"
              width="52px"
              height="52px"
            />
          </div>
          <div>
            <h2 className={styles.heading2}>Easy Sign-Up</h2>
            <h3 className={styles.title_wrapper}>
              Simplest user experience for you and your customers.
            </h3>
            <p className={styles.description_wrapper}>
              Sign up with your email address.
              <br /> 1-click wallet set-up
            </p>
          </div>
        </div>
        <div className={styles.article_step}>
          <div className={`${styles.img_wrapper} flex-row px-4`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-3.gif`}
              alt="torus_wallet"
              width="100px"
              height="100px"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-1.gif`}
              alt="torus_wallet"
              width="52px"
              height="52px"
            />
          </div>
          <div>
            <h2 className={styles.heading2}>
              User Experience that everyone understands
            </h2>
            <h3 className={styles.title_wrapper}>
              Seamless User Experience for crypto-natives and the other 99%
            </h3>
            <p className={styles.description_wrapper}>
              Pay with Credit, Debit Cards.
              <br /> E-commerce like user experience that customers are used to
            </p>
          </div>
        </div>
        <div className={styles.article_step}>
          <div className={`${styles.img_wrapper} flex-row`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-6.gif`}
              alt="torus_wallet"
              width="100px"
              height="100px"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-2.gif`}
              alt="torus_wallet"
              width="52px"
              height="52px"
              className={styles.article_topimg}
            />
          </div>
          <div className="pl-3">
            <h2 className={styles.heading2}>Built in Global eKYC</h2>
            <h3 className={styles.title_wrapper}>
              Online or in person, By sociaal email, SMS or scannable QR Code
            </h3>
            <p className={styles.description_wrapper}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={styles.article_step}>
          <div className={`${styles.img_wrapper} flex-row`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-4.gif`}
              alt="torus_wallet"
              width="120px"
              height="120px"
            />
          </div>
          <div>
            <h2 className={styles.heading2}>Self Use for your Team</h2>
            <h3 className={styles.title_wrapper}>
              Online or in person, By social email, SMS or scannable QR Code
            </h3>
            <p className={styles.description_wrapper}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.demo_card}>
        <div>
          <h1 className={styles.heading1}>NFTs for D2C engagement</h1>
          <h3 className={styles.title_wrapper}>
            Even if you sell via partners, retailers, e-commerce platforms
          </h3>
          <p className={styles.description_wrapper}>
            Web3 gives control of customer data to the customer. With 3rd party
            cookies on the way out, NFTs provide a solution for personalization,
            engagement & loyalty.
          </p>
          <p className={styles.description_wrapper}>
            With ngageN, Brands can incentivize customers to share this data.
            55% of customers are willing to share personal data to be part of a
            brand’s community
          </p>
        </div>
        <div className={styles.demo_img_wrapper}>
          <img
            src="/connect_wallet.png"
            alt="torus_wallet"
            width="312px"
            height="221px"
          />
          <button type="button" className={styles.demo_btn}>
            Book a demo
          </button>
        </div>
      </div>
      <div className={styles.inner_wrapper}>
        <div className={styles.center_align}>
          <h1 className={styles.heading1}>
            Deploy Innovative Marketing Campaings
          </h1>
          <p className={styles.description}>Engage your Brand’s Community</p>
        </div>
        <div className={styles.step_wrapper}>
          <div className={`${styles.img_wrapper}`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-12.png`}
              alt="torus_wallet"
              width="200px"
              height="180px"
            />
          </div>
          <div className={styles.step_right}>
            <div className={styles.dot} />
            <h2 className={`${styles.heading2} m-0 p-0`}>
              Create micro-influencers with Golden Tickets
            </h2>
            <h3 className={styles.title_wrapper}>
              Generate word-of-mouth marketing by
            </h3>
            <p className={styles.step_count}>
              <img
                src="/limited.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Limited Edition Products
            </p>
            <p className={styles.step_count}>
              <img
                src="/phygital.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Phygital NFTs
            </p>
            <p className={styles.step_count}>
              <img
                src="/donate.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Donating proceeds to causes they care about
            </p>
          </div>
        </div>
        <div className={styles.step_wrapper}>
          <div className={`${styles.img_wrapper}`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-9.png`}
              alt="torus_wallet"
              width="200px"
              height="90px"
            />
          </div>
          <div className={styles.step_right}>
            <div className={styles.dot} />
            <h2 className={`${styles.heading2} m-0 p-0`}>
              Drive eyeballs with Collectible Ads
            </h2>
            <h3 className={styles.title_wrapper}>
              Enable fans to display their love for your brand and reward them
              with...
            </h3>
            <p className={styles.step_count}>
              <img
                src="/exclusive.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Access to Exclusive Experience
            </p>
            <p className={styles.step_count}>
              <img
                src="/fan.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Fan Meet
            </p>
            <p className={styles.step_count}>
              <img
                src="/proof.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Proof of Attendance Protocol (PoaP)
            </p>
          </div>
        </div>
        <div className={styles.step_wrapper}>
          <div className={`${styles.img_wrapper} ${styles.step_img_width}`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-11.png`}
              alt="torus_wallet"
              width="118px"
              height="195px"
            />
          </div>
          <div className={styles.step_right}>
            <div className={styles.dot} />
            <h2 className={`${styles.heading2} m-0 p-0`}>
              Recognize creators with Digital Trophies
            </h2>
            <h3 className={styles.title_wrapper}>
              Engage with the creator economy to extend your brand
            </h3>
            <p className={styles.step_count}>
              <img
                src="/recognize.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Recognize Creator
            </p>
            <p className={styles.step_count}>
              <img
                src="/co_create.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Co-Create Content, product extensions, fan fiction
            </p>
            <p className={styles.step_count}>
              <img
                src="/featured.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Featuring You on website, social media, ads
            </p>
          </div>
        </div>
        <div className={styles.step_wrapper}>
          <div className={`${styles.img_wrapper}`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-10.png`}
              alt="torus_wallet"
              width="200px"
              height="125px"
            />
          </div>
          <div className={styles.step_right}>
            <div className={styles.dot} />
            <h2 className={`${styles.heading2} m-0 p-0`}>
              Reinforce Loyalty with Community Membership
            </h2>
            <h3 className={styles.title_wrapper}>
              Create your brand’s loyal community
            </h3>
            <p className={styles.step_count}>
              <img
                src="/early_access.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Early access to new products
            </p>
            <p className={styles.step_count}>
              <img
                src="/subscription.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Curated Monthly subscription
            </p>
            <p className={styles.step_count}>
              <img
                src="/vote.svg"
                alt="torus_wallet"
                width="18px"
                height="18px"
              />
              Vote on brand decisions
            </p>
          </div>
        </div>
      </div>
      <div className={styles.inner_wrapper}>
        <div className={styles.center_align}>
          <h1 className={styles.heading1}>Real world NFT Experiences</h1>
        </div>
        <div className={styles.card_carousel}>
          <div className={styles.card}>
            <img
              src="/card_img1.png"
              alt="torus_wallet"
              width="312px"
              height="221px"
            />
            <div>
              <h3 className={styles.card_title}>
                Create your brand’s loyal community
              </h3>
              <div className={styles.icon_wrapper}>
                <img
                  src="/limited.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
                <img
                  src="/exclusive.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
                <img
                  src="/hundred.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
              </div>
            </div>
            <h3 className={styles.card_header}>Header</h3>
            <p className={styles.card_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="/card_img2.png"
              alt="torus_wallet"
              width="312px"
              height="221px"
            />
            <div>
              <h3 className={styles.card_title}>
                Create your brand’s loyal community
              </h3>
              <div className={styles.icon_wrapper}>
                <img
                  src="/limited.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
                <img
                  src="/exclusive.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
                <img
                  src="/hundred.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
              </div>
            </div>
            <h3 className={styles.card_header}>Header</h3>
            <p className={styles.card_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="/card_img3.png"
              alt="torus_wallet"
              width="312px"
              height="221px"
            />
            <div>
              <h3 className={styles.card_title}>
                Create your brand’s loyal community
              </h3>
              <div className={styles.icon_wrapper}>
                <img
                  src="/limited.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
                <img
                  src="/exclusive.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
                <img
                  src="/hundred.svg"
                  alt="torus_wallet"
                  width="18px"
                  height="18px"
                />
              </div>
              <h3 className={styles.card_header}>Header</h3>
              <p className={styles.card_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inner_wrapper}>
        <div className={styles.center_align}>
          <h1 className={styles.heading2}>NFT Experiences all about you</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className={styles.coming_soon_wrapper}>
          <div className={styles.coming_soon}>
            <h1 className={styles.heading1}>Coming Soon</h1>
          </div>
        </div>
      </div>
      <div className={`${styles.inner_wrapper} my-6`}>
        <div className={styles.center_align}>
          <h1 className={styles.heading1}>Book a demo</h1>
          <p className={styles.description}>lorem ipsum and supporting text</p>
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
            <button className={`${styles.demo_btn} my-5`} type="submit">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
