import React from "react";
import styles from "../../styles/must-visit/placeId.module.css";
import { useRouter } from "next/router";
import Accordion from "../../components/Accordian";
import NormarlBreadCrum from "../../components/NormalBreadCrumb";

import { FaRegHeart } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";
import { BsQuestionCircle } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import { FiMap } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { PiCake } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { MdTrain } from "react-icons/md";

import RightCardContainer from "../../components/RightCardContainer";
import {
  ItinaryItem,
  ItinaryItemHeader,
} from "../../components/IntinaryPointers";
import ImageClosure from "../../components/ImageClosure";

const TableOfContent = ({}) => {
  return (
    <div className={styles.tableContent}>
      <h4 className={styles.rgtCardHeading}>Jump to</h4>
      <div className={styles.underLineBlock} />

      <div className={styles.listTable}>
        <div className={styles.listItem}>
          <span>01</span>
          <a href="#">What's On</a>
        </div>
        <div className={styles.listItem}>
          <span>02</span>
          <a href="#">What's On</a>
        </div>
        <div className={styles.listItem}>
          <span>03</span>
          <a href="#">What's On</a>
        </div>
        <div className={styles.listItem}>
          <span>04</span>
          <a href="#">What's On</a>
        </div>
        <div className={styles.listItem}>
          <span>05</span>
          <a href="#">What's On</a>
        </div>
      </div>
    </div>
  );
};

const patternImg1 =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/tour-packages%2FpatternImg1.png?alt=media&token=88be3c5a-0a21-4d4d-bedb-4959f3c9a4bf";

const TourPackage = () => {
  const router = useRouter();
  const crums = [
    "Home",
    "Tour Packages",
    "2 Days All-Inclusive Packages - Enjoy the serene beauty of kashi",
  ];

  const image1 =
    "https://book.visitsaudi.com/_next/image?url=%2Fapi%2Fimage-proxy%3Furl%3Dhttps%253A%252F%252Fhalayallaimages-new.s3.me-south-1.amazonaws.com%252Fimages%252Fvenues%252Fprovider_venue_656e56ffa3c84.&w=2048&q=85";

  return (
    <div className={styles.superContainer}>
      <NormarlBreadCrum crums={crums} />
      <p className={styles.title}>
        Sarnath: A Traveler’s Guide to the Cradle of Buddhism
      </p>

      {/* Image of the tour package */}
      <ImageClosure img1={image1} img2={image1} img3={image1} />
      <div className={styles.sectionCont}>
        <div className={styles.lftSecCont}>
          {/* Overview , share and favourite button */}
          <div className={styles.overViewCont}>
            <h1>Overview</h1>

            <div className={styles.overIconsFlex}>
              <div className={styles.overViewIcon}>
                <FaRegHeart color="#78006E" size={"1.25rem"} />
              </div>
              <div className={styles.overViewIcon}>
                <LuShare color="#78006E" size={"1.25rem"} />
              </div>
            </div>
          </div>

          <>
            {/* Short description */}
            <p className={styles.desc}>
              Sarnath, located just 13 kilometers from the vibrant city of
              Varanasi, is one of the most sacred places in Buddhism. Known as
              the site where Gautama Buddha delivered his first sermon after
              attaining enlightenment, Sarnath is not just a pilgrimage
              destination but also a rich archaeological and cultural site. For
              travelers seeking spiritual reflection, historical immersion, and
              a taste of ancient Indian culture, Sarnath offers a serene
              contrast to the busy ghats of Varanasi.
            </p>

            <h1>A Glimpse into History: Sarnath’s Connection with Buddha</h1>
            <p className={styles.desc}>
              Sarnath’s story began over 2,500 years ago when Gautama Buddha,
              enlightened under the Bodhi tree in Bodh Gaya, chose this tranquil
              spot to deliver his first sermon, called the Dhammacakkappavattana
              Sutta (Setting the Wheel of Dharma in Motion). He addressed his
              five disciples here, marking the birth of the Buddhist Sangha
              (community of monks).
              <br />
              <br />
              Emperor Ashoka, a key figure in the spread of Buddhism, visited
              Sarnath in the 3rd century BCE. Ashoka constructed stupas,
              monasteries, and the famous Ashoka Pillar to honor Buddha and
              promote Buddhist teachings. His efforts not only developed Sarnath
              as a center for learning and spirituality but also made it a hub
              for Buddhist culture, attracting scholars from across Asia.
            </p>

            <h1>What to See in Sarnath: Top Attractions</h1>
            <>
              <>
                <h2>Dhamek Stupa</h2>
                <p className={styles.desc}>
                  The Dhamek Stupa is the most prominent structure in Sarnath.
                  Built initially by Emperor Ashoka and later expanded during
                  the Gupta period, this 43.6-meter-tall stupa marks the spot
                  where Buddha gave his first sermon. Its cylindrical shape and
                  exquisite stone carvings make it a significant architectural
                  site and a must-see for visitors.
                </p>
              </>
              <>
                <h2>Chaukhandi Stupa</h2>
                <p className={styles.desc}>
                  This brick stupa marks the location where Buddha first met his
                  five disciples. The stupa was modified in the 16th century by
                  the Mughal emperor Akbar, who added an octagonal structure to
                  commemorate his father’s visit to the area.
                </p>
              </>
              <>
                <h2>Ashoka Pillar and Sarnath Museum</h2>
                <p className={styles.desc}>
                  The Ashoka Pillar, now preserved in the Sarnath Museum, is a
                  national treasure. Its four-lion capital has been adopted as
                  India’s national emblem, representing power, courage, and
                  peace. The museum also showcases artifacts, inscriptions, and
                  sculptures from the Mauryan and Gupta periods, offering
                  visitors an in-depth understanding of the region’s history.
                </p>
              </>
              <>
                <h2>Mulagandha Kuti Vihar Temple</h2>
                <p className={styles.desc}>
                  This modern Buddhist temple, built by the Mahabodhi Society,
                  features murals depicting scenes from Buddha’s life. The
                  temple also houses ancient relics of Buddha, making it a
                  revered spot for pilgrims.
                </p>
              </>
              <>
                <h2>Deer Park (Rishipattana)</h2>
                <p className={styles.desc}>
                  Sarnath is often referred to as Rishipattana, meaning the
                  ‘place of sages.’ The Deer Park, where Buddha is said to have
                  delivered his first sermon, offers a peaceful environment for
                  reflection and relaxation.
                </p>
              </>
              <>
                <h2>International Buddhist Temples and Monasteries</h2>
                <p className={styles.desc}>
                  Sarnath is home to several temples and monasteries built by
                  various countries, including Thailand, Japan, Tibet, and Sri
                  Lanka. These establishments reflect the global influence of
                  Buddhism and provide an opportunity to experience the
                  diversity of Buddhist traditions.
                </p>
              </>
            </>

            <h1>Exploring Sarnath: A Detailed Traveler’s Guide</h1>
            <h2>How to Reach Sarnath</h2>
            <ul>
              <li>
                <strong>By Air:</strong> Varanasi’s Lal Bahadur Shastri Airport
                is the nearest airport, located about 25 kilometers away.
              </li>
              <li>
                <strong>By Train:</strong> Varanasi Junction is the closest
                major railway station, with taxis and auto-rickshaws available.
              </li>
              <li>
                <strong>By Road:</strong> Sarnath is easily accessible by road
                from Varanasi, with buses, taxis, and auto-rickshaws available.
              </li>
            </ul>

            <h2>Best Time to Visit</h2>
            <p className={styles.desc}>
              The ideal time to visit Sarnath is during the winter months, from
              October to March, when the weather is pleasant. Summer months
              (April to June) can be quite hot, making outdoor exploration
              uncomfortable.
            </p>

            <h2>Suggested Itinerary</h2>
            <ul>
              <li>
                <strong>Morning:</strong> Visit Dhamek Stupa and Chaukhandi
                Stupa early in the day.
              </li>
              <li>
                <strong>Midday:</strong> Explore the Sarnath Museum and visit
                Mulagandha Kuti Vihar Temple.
              </li>
              <li>
                <strong>Afternoon:</strong> Relax at Deer Park and explore the
                international monasteries.
              </li>
              <li>
                <strong>Evening:</strong> Attend an evening prayer ceremony and
                enjoy dinner at a local restaurant.
              </li>
            </ul>

            <h2>Activities and Experiences</h2>
            <ul>
              <li>
                Photography and nature walks through Sarnath’s gardens and
                parks.
              </li>
              <li>
                Shopping for souvenirs like handicrafts and Banarasi silk
                products.
              </li>
              <li>Meditation and yoga sessions at local monasteries.</li>
              <li>
                A day trip back to Varanasi for the Ganga Aarti at Dashashwamedh
                Ghat.
              </li>
            </ul>

            <h1>Sarnath: A Cultural and Spiritual Journey</h1>
            <p className={styles.desc}>
              Sarnath offers a blend of history, spirituality, and cultural
              exploration. It provides a peaceful escape from Varanasi, making
              it an essential part of any trip to the region. Whether you are a
              spiritual seeker, history enthusiast, or looking for a serene
              getaway, Sarnath promises an enriching experience.
            </p>
          </>

  
        </div>
        <div className={styles.rgtSecCont}>
          {/* Price card container */}
          <TableOfContent />
          <RightCardContainer image={patternImg1}>
            <h4 className={styles.rgtCardHeading}>Tickets & Openings</h4>

            <div className={styles.informationCont}>
              <div className={styles.lftInfoCont}>
                <RiMoneyRupeeCircleLine
                  color="black"
                  size={"1.29rem"}
                  style={{ marginLeft: "-1.8px" }}
                />
                <p className={styles.rgtCardDesc}>Entry Fee:</p>
              </div>
              <p className={styles.rgtDesc}>Indians-₹30 Foreigner-₹500</p>
            </div>

            <div className={styles.informationCont}>
              <div className={styles.lftInfoCont}>
                <GoClock
                  color="black"
                  size={"1.29rem"}
                  style={{ marginLeft: "-1.8px" }}
                />
                <p className={styles.rgtCardDesc}>Open Hours:</p>
              </div>
              <p className={styles.rgtDesc}>6:00 AM to 7:00 PM</p>
            </div>
          </RightCardContainer>

          <RightCardContainer
            // image={"https://media-public.canva.com/Qanvw/MAETxDQanvw/1/tl.jpg"}
            // image="https://www.shutterstock.com/image-illustration/indian-traditional-design-colorful-background-260nw-1690859656.jpg"
            image={
              "https://www.shutterstock.com/image-vector/seamless-paisley-flower-border-motif-260nw-2247515903.jpg"
            }
            // image={"https://img.freepik.com/free-vector/colorful-paisley-pattern_52683-47942.jpg?w=1800&t=st=1729006357~exp=1729006957~hmac=9d273b0cec0245069e9741cd5b309ae544cc27df3ba090c70256a164f47c1c3d"}
            // image={patternImg1}
          >
            <h4 className={styles.rgtCardHeading}>How to reach</h4>

            {/* Destination */}
            <div className={styles.informationCont}>
              <div className={styles.lftInfoCont}>
                <FaPlaneDeparture color="black" size={"1.1rem"} />
                <p className={styles.rgtCardDesc}>Distance from airport:</p>
              </div>
              <p className={styles.rgtDesc}>24KM</p>
            </div>

            {/* Duration */}
            <div className={styles.informationCont}>
              <div className={styles.lftInfoCont}>
                <FaBus color="black" size={"1.1rem"} />
                <p className={styles.rgtCardDesc}>Distance from Bus Stand:</p>
              </div>
              <p className={styles.rgtDesc}>15KM</p>
            </div>

            {/* Ages */}
            <div className={styles.informationCont}>
              <div className={styles.lftInfoCont}>
                <MdTrain
                  color="black"
                  size={"1.29rem"}
                  style={{ marginLeft: "-1.8px" }}
                />
                <p className={styles.rgtCardDesc}>
                  Distance from Railway Station:
                </p>
              </div>
              <p className={styles.rgtDesc}>19KM</p>
            </div>

            {/* <div></div> */}
          </RightCardContainer>

          {/*Meeting point  */}
          <RightCardContainer
            Icon={() => <CiMap color="white" size={"1.35rem"} />}
            buttonTitle="Get Direction"
          >
            <h4 className={styles.rgtCardHeading}>MEETING POINT</h4>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                margin: "10px 0",
              }}
            >
              <SlLocationPin color="black" size={"1.1rem"} />
              <p className={styles.rgtCardDesc}>Location: Sarnath, Kashi</p>
            </div>
          </RightCardContainer>

          {/* Do you need more help container */}
          <RightCardContainer
            image="https://img.freepik.com/free-vector/colorful-paisley-ethnic-pattern_23-2148693247.jpg?t=st=1729010084~exp=1729013684~hmac=7a53a0fdb7d2b6e9bd8d0bc74f3da6e6a169a9637bd0df535a4c205c89a1e9bd&w=1800"
            // image={patternImg1}
            Icon={() => <BsQuestionCircle color="white" size={"1.25rem"} />}
            buttonTitle="Want to Know More"
          >
            <h4 className={styles.rgtCardHeading}>DO YOU NEED HELP</h4>
            <p style={{ margin: "10px 0" }} className={styles.rgtCardDesc}>
              Do you have questions or need more information in order to book
              this experience?
            </p>
          </RightCardContainer>
        </div>
      </div>
    </div>
  );
};

export default TourPackage;
