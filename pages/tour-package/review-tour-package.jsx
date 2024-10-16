import React, { useState, useEffect } from "react";
import styles from "../../styles/tour-package/review-tour-package.module.css";
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
import { RiDiscountPercentFill } from "react-icons/ri";

import RightCardContainer from "../../components/RightCardContainer";
import DateItem from "../../components/DateItem";

const patternImg1 =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/tour-packages%2FpatternImg1.png?alt=media&token=88be3c5a-0a21-4d4d-bedb-4959f3c9a4bf";


// ----------UTILITY FUNCTIONS----------
// handling selecting journey date, journey time, cab and number of people 

// Handling date selection 
const handleDateSelect = (item, index, setSelectedDate) => {
  const newDates = dates.map((d) => {
    if (d.date === item.date) {
      if (d.selected) {
        setSelectedDate(null);
        // Deselecting the seleted date here
        // setting selected date to null &
        // all the values of the dates will be false
        // none of them are selected
      } else {
        setSelectedDate(item.dateObj);
        // Correctly setting the dateObj to state selected date
      }
      return { ...d, selected: !d.selected };
      // returning the new date object with selected date object true of the
      // selected date and others false
    } else {
      return { ...d, selected: false };
      // Ensuring other dates are deselected
    }
  });

  setDates(newDates);
};


// ----------RENDERING RIGHT SIDE COMPONENT----------
const RightSideContainer = ({ selectedDate }) => {
  return (
    <div className={styles.rgtSecCont}>
      {/* Price card container */}
      <RightCardContainer
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
          <p>{selectedDate?.toString()}</p>
        </div>
      </RightCardContainer>

      <RightCardContainer image="https://www.shutterstock.com/image-vector/seamless-paisley-flower-border-motif-260nw-2247515903.jpg">
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
          Do you have questions or need more information in order to book this
          experience?
        </p>
      </RightCardContainer>
    </div>
  );
};


// ----------RENDERING LEFT SIDE COMPONEN----------
const LeftSideContainer = ({
  dates,
  setDates,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <div className={styles.lftSecCont}>
      {/* some offer on the left side container */}
      <div className={styles.earlyBirdContainer}>
        <RiDiscountPercentFill size={22} color="" />
        <h1 className={styles.earlyBird}>
          Get this order at{" "}
          <span style={{ textDecoration: "line-through" }}>₹234324</span>{" "}
          <span>₹432432</span>
        </h1>
      </div>

      <div className={styles.paddingWithBorder}>
        <h3>Select Date & Time</h3>

        <div className={styles.inputGroup}>
          <div className={styles.labelHeader}>
            <p className={styles.labelHeaderTxt}>Enter Your Name</p>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="name"
              value={""}
              onChange={(e) => {}}
              className={styles.input}
              required
            />
          </div>
        </div>

        <h1>this is selected date{selectedDate}</h1>

        <div className={styles.horizontalScroll}>
          {dates.map((item, index) => (
            <DateItem
              key={index.toString()}
              date={item.date}
              day={item.day}
              index={index}
              selected={item.selected}
              onClick={() => handleDateSelect(item, index, setSelectedDate)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TourPackage = () => {
  const router = useRouter();

  // arrays of 15 days dates with date obj
  /*
  {
    "date": "17",
    "day": "Thu",
    "selected": false,
    "dateObj": "2024-10-17T03:56:39.609Z"
  }
  */
  const [dates, setDates] = useState(() => {
    const newDates = [];
    for (let i = 0; i < 15; i++) {
      const dateObj = new Date(new Date().getTime() + (i + 1) * 86400000);
      const date = dateObj.toLocaleDateString("en-US", { day: "numeric" });
      const day = dateObj.toLocaleDateString("en-US", { weekday: "short" });
      newDates.push({
        date,
        day,
        selected: false,
        dateObj,
      });
    }

    // console.log(newDates)
    return newDates;
  });

  // This is the state which is holding the journey date selected by the user.
  // Selected state has been called as date for storing the date selected by the user in react native
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={styles.superContainer}>
      <div className={styles.sectionCont}>
        <LeftSideContainer
          dates={dates}
          setDates={setDates}
          selected={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <RightSideContainer selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default TourPackage;
