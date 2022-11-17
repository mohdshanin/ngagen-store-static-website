import React from "react";

import FacebookIcon from "components/Common/Icons/Facebook";
import TwitterIcon from "components/Common/Icons/Twitter";
import InstagramIcon from "components/Common/Icons/Instagram";
import DiscordIcon from "components/Common/Icons/Discord";
import styles from "./Footer.module.css";

const footerSections = [
  {
    label: "Resources",
    subSections: [
      {
        label: "Tutorials",
        url: "/tutorials",
      },
      {
        label: "F.A.Qs",
        url: "/faqs",
      },
      {
        label: "Blog",
        url: "https://blog.ngagen.com/",
      },
    ],
  },
  {
    label: "Company",
    subSections: [
      {
        label: "About us",
        url: "/about-us",
      },
      {
        label: "Terms & Conditions",
        url: "/terms",
      },
      {
        label: "Privacy Policy",
        url: "/privacy",
      },
      {
        label: "Refund Policy",
        url: "/refund-policy",
      },
    ],
  },
];
const socials = [
  {
    url: "https://facebook.com/ngagenft",
    icon: <FacebookIcon />,
    label: "facebook",
  },
  {
    url: "https://twitter.com/ngagenft",
    icon: <TwitterIcon />,
    label: "twitter",
  },
  {
    url: "https://instagram.com/ngagenft",
    icon: <InstagramIcon />,
    label: "instagram",
  },
  {
    url: "https://discord.gg/dfwR4dvbj3",
    icon: <DiscordIcon />,
    label: "discord",
  },
];

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.section_wrapper}>
        <section className={styles.left_section}>
          <div className={styles.logo_container}>
            <img
              src="/ngagen.svg"
              alt="ngagen-logo"
              className={styles.ngagen_logo}
            />
            <p
              className={`${styles.ngagen_logo_text} orange-background text-mask`}
            >
              ngageN
            </p>
          </div>
          <div>
            <p className="description1">
              Please contact us if you have any Queries or Request on our email.
            </p>
            <a href="mailto:support@ngagen.com" className={styles.header}>
              support@ngagen.com
            </a>
          </div>
        </section>

        <section className={styles.right_section}>
          <div className={styles.info_section}>
            {footerSections.map(({ label, subSections }) => (
              <div
                key={label}
                className="display-flex flex-direction-column  mb-2"
              >
                <div className="mb-1">
                  <h3 className={styles.header}>{label}</h3>
                </div>
                {subSections.map(
                  ({ label: subSectionLabel, url: subSectionUrl }) => (
                    <div key={subSectionLabel}>
                      <a
                        className={styles.info_item}
                        // href={subSectionUrl}
                        onClick={() => {}}
                      >
                        {subSectionLabel}
                      </a>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className={styles.social_wrapper}>
        <p className={styles.social_text}>Socials</p>
        <div className={styles.social_icons}>
          {socials.map(({ url, icon, label }) => (
            <a href={url} target="_blank" key={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className={styles.copy_right}>
          © All rights reserved. Developed & Owned by{" "}
          <a
            href="https://www.koinearth.com"
            target="_blank"
            className={styles.koinearth}
          >
            KoineArth
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
