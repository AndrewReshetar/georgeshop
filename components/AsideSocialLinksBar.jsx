import React from "react";
import Image from "next/image";
import styles from "../styles/AsideSocialLinksBar.module.scss";
import facebook from "../public/facebook.png";
import gmail from "../public/email.png";
import youtube from "../public/youtube.png";
import soundcloud from "../public/soundcloud.png";

const AsideSocialLinksBar = () => {
  return (
    <div className={styles.socialLinksWrapper}>
      <ul className={styles.socialLinksList}>
        <li>
          <a
            href="https://www.facebook.com/yuriy.reshetar"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={facebook}
              alt="facebook"
              placeholder="blue"
              width="30"
              height="30"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:composergeorgeresh@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={gmail}
              alt="gmail"
              placeholder="blue"
              width="30"
              height="30"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCU7rPfqC7ALYmxHYuzOuA-A/videos"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={youtube}
              alt="youtube"
              placeholder="blue"
              width="30"
              height="30"
            />
          </a>
        </li>
        <li>
          <a
            href="https://soundcloud.com/rebekar"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={soundcloud}
              alt="soundcloud"
              placeholder="blue"
              width="30"
              height="30"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideSocialLinksBar;
