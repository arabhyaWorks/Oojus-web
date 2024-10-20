import React from "react";
import styles from "../styles/pages/aboutkashi.module.css";
import { PackageCard, EventPackageCard } from "../components/PackageCard";

const mustVisitImages = [
  {
    image:
      "https://images.pexels.com/photos/25047997/pexels-photo-25047997/free-photo-of-a-man-in-traditional-clothing-holding-an-object-with-a-flame.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Discover the ancient culture of kashi",
  },
  {
    image:
      "https://images.pexels.com/photos/20991957/pexels-photo-20991957/free-photo-of-chet-singh-ghat-over-ganges-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Chet Singh Ghat",
  },
  {
    image:
      "https://images.pexels.com/photos/19272030/pexels-photo-19272030/free-photo-of-people-on-stairs-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Mir Ghat",
  },
  {
    image:
      "https://images.pexels.com/photos/19273503/pexels-photo-19273503/free-photo-of-man-holding-a-lamp-in-flames-during-the-ganga-aarti-ritual.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Dasaswamedh Ghat",
  },
];

const events = [
  {
    image:
      "https://images.pexels.com/photos/19273503/pexels-photo-19273503/free-photo-of-man-holding-a-lamp-in-flames-during-the-ganga-aarti-ritual.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Dasaswamedh Ghat",
  },
  {
    image:
      "https://images.pexels.com/photos/19272030/pexels-photo-19272030/free-photo-of-people-on-stairs-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Mir Ghat",
  },
  {
    image:
      "https://images.pexels.com/photos/20991957/pexels-photo-20991957/free-photo-of-chet-singh-ghat-over-ganges-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Chet Singh Ghat",
  },

  {
    image:
      "https://images.pexels.com/photos/25047997/pexels-photo-25047997/free-photo-of-a-man-in-traditional-clothing-holding-an-object-with-a-flame.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Ganga Aarti",
  },
];

const AboutKashi = () => {
  return (
    <div className={styles.superContainer}>


      <div className={styles.mainImageContainer}>
        <img
          src="https://scth.scene7.com/is/image/scth/getting-around-banner:crop-1920x768?defaultImage=getting-around-banner&wid=1500&hei=600"
          alt="Kashi"
          className={styles.image}
        />
        <div className={styles.blurContainer}>
          <>
            <h1>Kashi Ancient than History</h1>
            <h2>The Past, Present & Future</h2>
          </>
        </div>
      </div>

      {/* <BreadCrum crumbs={["Kashi", "About Kashi"]} /> */}

      <div className={styles.overViewContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.overviewItem}>
            <h1 className={styles.h2}>Overview</h1>
            <p className={styles.desc}>
              Kashi is one of the oldest cities in the world. It is the
              spiritual capital of India. It is also known as Varanasi. It is a
              city in the northern Indian state of Uttar Pradesh dating to the
              11th century B.C. Regarded as the spiritual capital of India, the
              city draws Hindu pilgrims who bathe in the Ganges River’s sacred
              waters and perform funeral rites. Along its winding streets are
              some 2,000 temples, including Kashi Vishwanath, the “Golden
              Temple,” dedicated to the Hindu god Shiva.
            </p>
          </div>

          <div className={styles.overviewItem}>
            <h1 className={styles.h2}>History</h1>
            <p className={styles.desc}>
              The most important thing in human life is to know the limitations
              of your body. You were born yesterday and will be buried tomorrow.
              You only have today to live. This is the nature of existence. And
              before death comes, life needs to blossom. So across the country,
              we set up every possible mechanism that we could use for this
              purpose. There are many mechanisms like this. Unfortunately, most
              of them are broken, including Kashi which is largely disturbed,
              but the energetic part of it is still pretty alive. This is
              because when we consecrate spaces of this nature, including
              Dhyanalinga, the physical structure is always only a scaffolding.
              Generally, the legend says that Kashi is on the top
              of Shiva’s trishul or trident, not on the ground.
            </p>
          </div>

          <div className={styles.overviewItem}>
            <h1 className={styles.h2}>Culture</h1>
            <p className={styles.desc}>
              What I see in my experience is that the real structure of Kashi is
              approximately 33 feet above the ground. If we had any sense, we
              should not have built anything beyond 33 feet in height. But we
              have, because sense has always been a very scarce material in the
              world. And, by geometrical calculations, the energy structure
              could be up to 7200 feet. This is why they called it a “Tower of
              Light,” because those who had eyes to see, saw that it is a very
              tall structure. And it did not stop there, it gave you access to
              what is beyond. The idea is to achieve something that a human
              being could achieve within himself or herself, through an
              organized mechanism that comes from the distilled essence of
              thousands of years of realization of many people. If you have to
              realize things by yourself, it is like reinventing the wheel and
              unnecessarily going through a whole lot of painful processes. But
              if you have to realize through others’ knowing, then you must have
              humility.
            </p>

          </div>
        </div>
        <div className={styles.rightContainer}>
          {new Array(3).fill(0).map((_, index) => (
            <div
              style={{ marginBottom: index != 2 ? "1.3rem" : "" }}
              className={styles.wheatherContainer}
            >
              <h1>Apr-Jun</h1>
              <p>Moderate Season</p>

              <div className={styles.wheatherFlex}>
                <img
                  src="./people.png"
                  alt="crowd in kashi"
                  className={styles.wheatherIcons}
                />
                <h2>Average crowd</h2>
              </div>

              <div className={styles.wheatherFlex}>
                <img
                  src="./wheather.png"
                  alt="crowd in kashi"
                  className={styles.wheatherIcons}
                />
                <h2>Torrential rainfall, along with humidy</h2>
              </div>

              <div className={styles.wheatherFlex}>
                <img
                  src="./like.png"
                  alt="crowd in kashi"
                  className={styles.wheatherIcons}
                />
                <h2>visiting the ghats</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles.mustVisitContainer}>
        <h1 className={styles.heading}>Experience the Soul of Kashi</h1>

        <div className={styles.mustVisitFlex}>
          {mustVisitImages.map((item, index) => (
            <PackageCard item={item} image={item.image} title={item.title} index={index} />
          ))}
        </div>
      </section>

      <section className={styles.mustVisitContainer}>
        <h1 className={styles.heading}>What's Happening This Month</h1>

        <div className={styles.mustVisitFlex}>
          {events.map((item, index) => (
            <EventPackageCard item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutKashi;
