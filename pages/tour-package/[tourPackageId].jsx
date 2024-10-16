import React from "react";
import styles from "../../styles/tour-package/tourPackage.module.css";
import { useRouter } from "next/router";
import Accordion from "../../components/Accordian";



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

import RightCardContainer from "../../components/RightCardContainer";
import {
  ItinaryItem,
  ItinaryItemHeader,
} from "../../components/IntinaryPointers";

const patternImg1 = "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/tour-packages%2FpatternImg1.png?alt=media&token=88be3c5a-0a21-4d4d-bedb-4959f3c9a4bf"

const ArrowIcon = ({ }) => {
  return (
    <div style={{ width: 24, height: 24 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="transform scale-50 text-gray-400"
        fill="#9ca3af"
      >
        <g fill="none" fill-rule="evenodd">
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
          <path
            color="#9ca3af"
            fill="currentcolor"
            d="M6.70710678,15.7071081 C6.31658249,16.0976324 5.68341751,16.0976324 5.29289322,15.7071081 C4.90236893,15.3165838 4.90236893,14.6834188 5.29289322,14.2928945 L11.2928932,8.29289454 C11.6714722,7.9143156 12.2810586,7.90106998 12.6757246,8.26284718 L19.4313874,14.2942293 C19.8385064,14.6674217 19.8660094,15.2999891 19.4928169,15.7071081 C19.1196245,16.1142271 18.4870572,16.14173 18.0799382,15.7685376 L12.0300757,10.3841391 L6.70710678,15.7071081 Z"
            transform="rotate(90 12.378 12.016)"
          ></path>
        </g>
      </svg>
    </div>
  );
};

const NormarlBreadCrum = ({ crums }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {crums.map((data, index) => {
        return (
          <>
            <>{index !== 0 ? <ArrowIcon /> : null}</>
            <p className={styles.crumTitle}>{data}</p>
          </>
        );
      })}
    </div>
  );
};

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
        2 Days All-Inclusive Packages - Enjoy the serene beauty of kashi
      </p>

      {/* Image of the tour package */}
      <div className={styles.imgCont}>
        <div className={styles.lftImgCont}>
          <img
            src={image1}
            alt="kashi at one place"
            className={styles.lftImg}
          />
        </div>
        <div className={styles.rgtImgCont}>
          <img
            src={image1}
            alt="kashi at one place"
            className={styles.rgtImg}
          />
          <img
            src={image1}
            alt="kashi at one place"
            className={styles.rgtImg}
          />
        </div>
      </div>

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

          {/* Short description of the tour package */}
          <p className={styles.desc}>
            Experience the essence of Kashi with our 2-day all-inclusive
            packages, offering a serene getaway. Immerse yourself in the
            spiritual beauty of the city with guided tours, and unforgettable
            cultural experiences for ultimate relaxation and discovery.
          </p>

          <h1 className={styles.heading}>Information</h1>

          <Accordion title="Itinerary">

            {/* Day 1 */}
            <>
              <ItinaryItemHeader day="1" />
              <ItinaryItem
                time="08:00 AM"
                activity="Gathering at the hotel lobby for a briefing"
              />
              <ItinaryItem
                time="08:30 AM"
                activity="Visit Kashi Vishwanath Temple"
              />
              <ItinaryItem
                time="10:00 AM"
                activity="Explore Vishwanath Gali - local market & souvenirs"
              />
              <ItinaryItem
                time="11:30 AM"
                activity="Visit Sarnath Museum & Dhamek Stupa"
              />
              <ItinaryItem
                time="01:00 PM"
                activity="Lunch at a local restaurant (traditional North Indian food)"
              />
              <ItinaryItem time="03:00 PM" activity="Visit Manikarnika Ghat" />
              <ItinaryItem
                time="04:30 PM"
                activity="Stroll through Banaras Hindu University (BHU)"
              />
              <ItinaryItem
                time="06:00 PM"
                activity="Attend Ganga Aarti at Dashashwamedh Ghat"
              />
              <ItinaryItem
                time="07:30 PM"
                activity="Dinner at a rooftop restaurant with views of the Ganges"
              />
            </>

            {/* Day 2 */}
            <>
              <ItinaryItemHeader day="2" />
              <ItinaryItem
                time="06:00 AM"
                activity="Early morning boat ride on the Ganges (witness sunrise)"
              />
              <ItinaryItem
                time="07:30 AM"
                activity="Visit Assi Ghat for morning Aarti"
              />
              <ItinaryItem
                time="09:00 AM"
                activity="Breakfast at a traditional Varanasi eatery"
              />
              <ItinaryItem
                time="10:30 AM"
                activity="Explore Ramnagar Fort (historical fort & museum)"
              />
              <ItinaryItem
                time="12:30 PM"
                activity="Visit Tulsi Manas Temple & Durga Temple"
              />
              <ItinaryItem
                time="01:30 PM"
                activity="Lunch at a traditional Varanasi thali restaurant"
              />
              <ItinaryItem
                time="03:00 PM"
                activity="Explore Godaulia Chowk - silk shops & Banarasi saris"
              />
              <ItinaryItem
                time="05:00 PM"
                activity="Visit Bharat Kala Bhavan Museum at BHU"
              />
              <ItinaryItem
                time="07:00 PM"
                activity="Attend a classical music or dance performance"
              />
              <ItinaryItem
                last={true}
                time="08:30 PM"
                activity="Dinner at a fine-dining restaurant with views of the Ganges"
              />
            </>
          </Accordion>

          <Accordion title="What's included">
            <div className={styles.accordianFlex}>
              <FaCheck color="green" />
              <p>Reception from the airport</p>
            </div>
            <div className={styles.accordianFlex}>
              <FaCheck color="green" />
              <p>Train Tickets</p>
            </div>
            <div className={styles.accordianFlex}>
              <FaCheck color="green" />
              <p>Luxrious meals</p>
            </div>
            <div className={styles.accordianFlex}>
              <FaCheck color="green" />
              <p>Fruits & Snacks</p>
            </div>
            <div className={styles.accordianFlex}>
              <FaCheck color="green" />
              <p>Cold & Hot drinks</p>
            </div>
            <div className={styles.accordianFlex}>
              <FaCheck color="green" />
              <p>Entertainment activities</p>
            </div>
            <div className={styles.accordianFlex}>
              <FaCheck color="green" />
              <p>Transportation - modern and air-conditioned</p>
            </div>
            <div className={styles.accordianFlex}>
              <FaCheck color="green" />
              <p>4 star hotel double room Swimming in a private yam beach</p>
            </div>
          </Accordion>

          <Accordion title="What's not Included">
            <div className={styles.accordianFlex}>
              <RxCross2 color="red" size={'1.25rem'} />
              <p>Reception from the airport</p>
            </div>
            <div className={styles.accordianFlex}>
              <RxCross2 color="red" size={'1.25rem'} />
              <p>Train Tickets</p>
            </div>
            <div className={styles.accordianFlex}>
              <RxCross2 color="red" size={'1.25rem'} />
              <p>Luxrious meals</p>
            </div>
            <div className={styles.accordianFlex}>
              <RxCross2 color="red" size={'1.25rem'} />
              <p>Fruits & Snacks</p>
            </div>
            <div className={styles.accordianFlex}>
              <RxCross2 color="red" size={'1.25rem'} />
              <p>Cold & Hot drinks</p>
            </div>
            <div className={styles.accordianFlex}>
              <RxCross2 color="red" size={'1.25rem'} />
              <p>Entertainment activities</p>
            </div>
            <div className={styles.accordianFlex}>
              <RxCross2 color="red" size={'1.25rem'} />
              <p>Transportation - modern and air-conditioned</p>
            </div>
            <div className={styles.accordianFlex}>
              <RxCross2 color="red" size={'1.25rem'} />
              <p>4 star hotel double room Swimming in a private yam beach</p>
            </div>
          </Accordion>

          <Accordion title="Cancellation & Refund Policy">
            <p className={styles.cancellationRefund}>
              Return, exchange and cancellation policy Replacement policy: You
              may be asked to pay additional fees for modification, and these
              fees vary according to the type of service that was requested.
              When requesting to amend sites, the date, or adding notes such as
              the type of transportation, meals, and any other requests, contact
              customer service to implement the request. Cancellation policy:
              Requests must be submitted by the customer through the future
              welfare customer service For each cancellation of a booking by the
              customer, Future Luxury will charge a cancellation fee of 15% The
              amount is 100% deducted four days before the trip, and the amount
              is non-refundable after that, and the customer is not entitled to
              claim it. Return policy: When the customer requests a refund of
              the amount he paid four days before the trip, the future luxury
              charges a 15% fee and refunds the amount after the fees, noting
              that the refund mechanism and method is based on the same payment
              method. If the payment was made by credit card, the refund will be
              made within 48 hours of working days, and the amount will be
              returned from the bank within 7 working days, and there may be a
              delay by the bank. If the payment is made via our customer service
              it takes 48 hours of our working days. If the amount is not
              refunded after the above-mentioned period, please contact customer
              service or send a request and contact the company's customer
              service to request a refund. In the event that reservations that
              are non-refundable are confirmed and the customer has no right to
              claim them except in force majeure, the approval of the refund is
              conditional on the service provider's approval and acceptance of
              the refund. Upgrade flights: Passengers can upgrade the special
              flights that they have contracted for, through customer service
              and pay the difference before the aforementioned modification
              date, according to the availability of the possibility, as the
              luxury of the future does not guarantee the upgrade of flights
              upon the arrival of the customer, and in this case we will try as
              much as possible to implement your request
            </p>
          </Accordion>
        </div>
        <div className={styles.rgtSecCont}>
          {/* Price card container */}
          <RightCardContainer
            // image="https://book.visitsaudi.com/sta/cta-border-art.png"
            onClick={() => {
              router.push({
                pathname: `/tour-package/review-tour-package`,
              });
            }}
            image={patternImg1}
            Icon={() => <LuTicket color="white" size={"1.25rem"} />}
            buttonTitle="Book Now"
          >
            <div className={styles.priceCardCont}>
              <div className={styles.priceContainer}>
                <h2>4,300 INR</h2>{" "}
                <p style={{ fontSize: "16px", margin: "5px" }}>/</p>
                <span>Per person</span>
              </div>

              <p>Minimum number of people 2</p>
            </div>
          </RightCardContainer>

          <RightCardContainer 
          // image={"https://media-public.canva.com/Qanvw/MAETxDQanvw/1/tl.jpg"}
          // image="https://www.shutterstock.com/image-illustration/indian-traditional-design-colorful-background-260nw-1690859656.jpg"
          image={"https://www.shutterstock.com/image-vector/seamless-paisley-flower-border-motif-260nw-2247515903.jpg"}
          // image={"https://img.freepik.com/free-vector/colorful-paisley-pattern_52683-47942.jpg?w=1800&t=st=1729006357~exp=1729006957~hmac=9d273b0cec0245069e9741cd5b309ae544cc27df3ba090c70256a164f47c1c3d"}
          // image={patternImg1}
          >
            <h4 className={styles.rgtCardHeading}>INFORMATION</h4>

            {/* Destination */}
            <div className={styles.informationCont}>
              <div className={styles.lftInfoCont}>
                <SlLocationPin color="black" size={"1.1rem"} />
                <p className={styles.rgtCardDesc}>Destination:</p>
              </div>
              <p className={styles.rgtDesc}>Sarnath, Kashi</p>
            </div>

            {/* Duration */}
            <div className={styles.informationCont}>
              <div className={styles.lftInfoCont}>
                <GoClock color="black" size={"1.1rem"} />
                <p className={styles.rgtCardDesc}>Duration:</p>
              </div>
              <p className={styles.rgtDesc}>2 Days</p>
            </div>

            {/* Ages */}
            <div className={styles.informationCont}>
              <div className={styles.lftInfoCont}>
                <PiCake color="black" size={"1.1rem"} />
                <p className={styles.rgtCardDesc}>Ages:</p>
              </div>
              <p className={styles.rgtDesc}>Above 12</p>
            </div>

            <h4 className={styles.rgtCardHeading}>RELATED KEYWORD</h4>

            <div></div>
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
