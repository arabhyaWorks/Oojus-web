import React from "react";
import styles from "../../styles/tour-package/index.module.css";
import BannerImage from "../../components/bannerImage";
import { tourPackages, discoverKashi } from "../../public/static/tour-packages";
import { useRouter } from "next/router";
import { PackageCard, EventPackageCard } from "../../components/PackageCard";

const bannerImageUri =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/tour-packages%2Fkashi-tour-packages.png?alt=media&token=cca341e2-75bf-446c-af01-fa229db90bc6";

const AboutKashi = () => {
  const router = useRouter();
  return (
    <div className={styles.superContainer}>
      <div className={styles.bannerImageContainer}>
        <BannerImage
          src={bannerImageUri}
          alt="Kashi at One place"
          heading="Explore Kashi with your pace"
          subheading="The Past, Present & Future"
        />
      </div>

      <div className={styles.sectionContainer}>
        <p className={styles.heading}>Guided Tours & Experiences</p>

        <div className={styles.hrContt}>
          {tourPackages.slice(0, 4).map((item, index) => (
            <div
              className={`${index === 0 && styles.marginLeft} ${
                index === tourPackages.slice(0, 4).length - 1 &&
                styles.marginRight
              }`}
            >
              <PackageCard
                image={item.image}
                title={item.name}
                index={index}
                buttonTitle={"Book Now"}
                onClick={() => {
                  router.push({
                    pathname: `/tour-package/432432`,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>

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
          {tourPackages.slice(4).map((item, index) => (
            <div
              className={`${index === 0 && styles.marginLeft} ${
                index === tourPackages.slice(0, 4).length - 1 &&
                styles.marginRight
              }`}
            >
              <PackageCard
                image={item.image}
                title={item.name}
                index={index}
                buttonTitle={"Book Now"}
                onClick={() => {
                  router.push({
                    pathname: `/tour-package/432432`,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutKashi;
