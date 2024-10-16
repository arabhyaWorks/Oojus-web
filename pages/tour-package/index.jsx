import React from "react";
import styles from "../../styles/tour-package/index.module.css";
import BannerImage from "../../components/bannerImage";
import { tourPackages, discoverKashi } from "../../public/static/tour-packages";
import { useRouter } from "next/router";

const bannerImageUri =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/tour-packages%2Fkashi-tour-packages.png?alt=media&token=cca341e2-75bf-446c-af01-fa229db90bc6";

const AboutKashi = () => {
  const router = useRouter();
  return (
    <div className={styles.superContainer}>
      <BannerImage
        src={bannerImageUri}
        alt="Kashi at One place"
        heading="Explore Kashi with your pace"
        subheading="The Past, Present & Future"
      />

      <section>
        <p className={styles.heading}>Guided Tours & Experiences</p>

        <div className={styles.hrContt}>
          {tourPackages.slice(0, 4).map((data, index) => {
            return (
              <div key={index.toString()} className={styles.cardItem}>
                <img
                  src={data.image}
                  alt={data.name}
                  className={styles.cardImg}
                />
                <div className={styles.hrlabelsCont}>
                  <p className={styles.cardTitle}>{data.name}</p>
                  <button
                    onClick={() => {
                      router.push({
                        pathname: `/tour-package/432432`,
                      });
                    }}
                    className={styles.book}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <p className={styles.heading}>Discover kashi</p>

        <div className={styles.hrContt}>
          {discoverKashi.map((data, index) => {
            return <img src={data.image} className={styles.discoverImage} />;
          })}
        </div>
      </section>
      <section>
        <p className={styles.heading}>Guided Tours & Experiences</p>

        <div className={styles.hrContt}>
          {tourPackages.slice(4).map((data, index) => {
            return (
              <div key={index.toString()} className={styles.cardItem}>
                <img
                  src={data.image}
                  alt={data.name}
                  className={styles.cardImg}
                />
                <div className={styles.hrlabelsCont}>
                  <p className={styles.cardTitle}>{data.name}</p>
                  <button
                    onClick={() => {
                      router.push({
                        pathname: `/tour-package/432432`,
                      });
                    }}
                    className={styles.book}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutKashi;
