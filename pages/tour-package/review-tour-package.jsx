import React, { useState, useEffect } from "react";
import styles from "../../styles/tour-package/review-tour-package.module.css";
import { useRouter } from "next/router";
import { LuTicket } from "react-icons/lu";
import { BsQuestionCircle } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { PiCake } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaShieldHalved } from "react-icons/fa6";

import Accordion from "../../components/Accordian";

import RightCardContainer from "../../components/RightCardContainer";
import DateItem from "../../components/DateItem";
import TimeSlotItem from "../../components/TimeSlotItem";
import CabType from "../../components/CabType";
import { TimeSlots } from "../../public/static/tour-packages";

const patternImg1 =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/tour-packages%2FpatternImg1.png?alt=media&token=88be3c5a-0a21-4d4d-bedb-4959f3c9a4bf";

const cabImage =
  "https://cab.divyaayodhya.com/assets/source/Assets/sedan.f41db0b16eb423172d1f8033bd16e24e.png";

// ----------UTILITY FUNCTIONS----------
// handling selecting journey date, journey time, cab and number of people

// Handling date selection
const handleDateSelect = (item, index, setSelectedDate, dates, setDates) => {
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
const RightSideContainer = ({ couponCode, setCouponCode }) => {
  return (
    <div className={styles.rgtSecCont}>
      {/* Price card container */}
      <RightCardContainer
        image={patternImg1}
        Icon={() => <LuTicket color="white" size={"1.25rem"} />}
        buttonTitle="Apply Now"
      >
        <h4 className={styles.rgtCardHeading}>Coupon & Offers</h4>

        <div className={styles.couponContainer}>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className={styles.couponInput}
          />
        </div>
      </RightCardContainer>

      <RightCardContainer image="https://www.shutterstock.com/image-vector/seamless-paisley-flower-border-motif-260nw-2247515903.jpg">
        <h4 className={styles.rgtCardHeading}>Price Breakup</h4>

        {/* Destination */}
        <div className={styles.informationCont}>
          <div className={styles.lftInfoCont}>
            <p className={styles.rgtCardDesc}>Total Fare:</p>
          </div>
          <p className={styles.rgtDesc}>₹3106</p>
        </div>

        {/* Duration */}
        <div className={styles.informationCont}>
          <div className={styles.lftInfoCont}>
            <p className={styles.rgtCardDesc}>
              Token amount (to reserve your booking): <br />
              20% of total price
            </p>
          </div>
          <p className={styles.rgtDesc}>₹400</p>
        </div>

        {/* Ages */}
        <div className={styles.informationCont}>
          <p className={styles.rgtCardDesc}>
            Remaining amount (pay when trip ends): <br />
            80% of total price
          </p>
          <p className={styles.rgtDesc}>₹2191</p>
        </div>

        <div className={styles.informationCont}>
          <p className={styles.rgtCardDesc}>Amount to be paid</p>
          <p className={styles.rgtDesc}>₹440</p>
        </div>

        <div className={styles.informationCont}>
          <p className={styles.rgtCardDesc}>GST</p>
          <p className={styles.rgtDesc}>₹440</p>
        </div>

        <div className={styles.informationCont}>
          <p className={styles.rgtCardDesc}>Total Amount</p>
          <p className={styles.rgtDesc}>₹440</p>
        </div>

        <div className={styles.payButton}>
          <p>
            Total <br />
            <span className={styles.price}>₹3232</span>
          </p>
          <button>Checkout</button>
        </div>
      </RightCardContainer>

      {/* Do you need more help container */}
      <RightCardContainer
      //  image="https://img.freepik.com/free-vector/colorful-paisley-ethnic-pattern_23-2148693247.jpg?t=st=1729010084~exp=1729013684~hmac=7a53a0fdb7d2b6e9bd8d0bc74f3da6e6a169a9637bd0df535a4c205c89a1e9bd&w=1800"
      >
        <div className={styles.secure}>
          <FaShieldHalved color="#9F5BE4" size={"2.5rem"} />
          <p>
            Secure and hassle-free payments. Easy returns. 100% authentic
            products.
          </p>
        </div>
      </RightCardContainer>

      {/* Do you need more help container */}
      <RightCardContainer
        image="https://img.freepik.com/free-vector/colorful-paisley-ethnic-pattern_23-2148693247.jpg?t=st=1729010084~exp=1729013684~hmac=7a53a0fdb7d2b6e9bd8d0bc74f3da6e6a169a9637bd0df535a4c205c89a1e9bd&w=1800"
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
  pickupLocation,
  setPickupLocation,

  timeSlots,
  setTimeSlots,
  selectedTimeSlot,
  setSelectedTimeSlot,

  cabTypeStatus,
  setCabTypeStatus,
  isCabSelected,
  setIsCabSelected,
}) => {
  const handleCabSelection = (cabType) => {
    const cabStatus = {
      mini: cabType === "mini" ? !cabTypeStatus.mini : false,
      sedan: cabType === "sedan" ? !cabTypeStatus.sedan : false,
      premium: false, // You can add more logic for other types
    };

    setIsCabSelected(Object.values(cabStatus).some((status) => status));
    setCabTypeStatus(cabStatus);
  };
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

      <div className={styles.paddingWithBorderParent}>
        <div className={styles.borderImage} />
        <div className={styles.paddingWithBorder}>
          <h2>
            2 Days All-Inclusive Packages - Enjoy the serene beauty of kashi
          </h2>
          {/* <h3>Select Date & Time</h3> */}

          <div className={styles.inputGroup}>
            <div className={styles.labelHeader}>
              <p className={styles.labelHeaderTxt}>
                Enter Your Pickup Location
              </p>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="pickupLocation"
                value={pickupLocation}
                onChange={(e) => {
                  setPickupLocation(e.target.value);
                }}
                className={styles.input}
                required
              />
            </div>
          </div>

          <h3>Select Journey Date</h3>
          <div className={styles.horizontalScroll}>
            {dates.map((item, index) => (
              <DateItem
                key={index.toString()}
                date={item.date}
                day={item.day}
                index={index}
                selected={item.selected}
                onClick={() =>
                  handleDateSelect(
                    item,
                    index,
                    setSelectedDate,
                    dates,
                    setDates
                  )
                }
              />
            ))}
          </div>

          <h3>Select Journey Time</h3>
          <div className={styles.horizontalScroll}>
            {timeSlots.map((item, index) => (
              <TimeSlotItem
                key={index.toString()}
                timeSlot={item.slot}
                index={index}
                selected={item.selected}
                onClick={() => {
                  const newDates = timeSlots.map((d) => {
                    if (d.slot === item.slot) {
                      if (item.selected === true) {
                        setSelectedTimeSlot(null);
                      } else {
                        setSelectedTimeSlot(item.slot);
                        console.log(item.slot);
                      }
                      d.selected = !d.selected;
                    } else {
                      d.selected = false;
                    }
                    return d;
                  });
                  setTimeSlots(newDates);
                }}
              />
            ))}
          </div>

          <h3>Select Cab Type </h3>

          <div className={styles.cabListContainer}>
            <CabType
              source={cabImage}
              price={`₹3213`}
              cabType="Mini"
              seater="4 Seater"
              selected={cabTypeStatus.mini}
              isCabSelected={isCabSelected}
              onClick={() => handleCabSelection("mini")}
            />
            <CabType
              source={cabImage}
              price={`₹$321312`}
              cabType="SUV"
              seater="6 Seater"
              selected={cabTypeStatus.sedan}
              isCabSelected={isCabSelected}
              onClick={() => handleCabSelection("sedan")}
            />
          </div>
        </div>
      </div>

      <div className={styles.trmsCont}>
       
        <h3>Cancellation & Refund Policy</h3>
        <p className={styles.trmsContTxt}>
          Return, exchange and cancellation policy Replacement policy: You may
          be asked to pay additional fees for modification, and these fees vary
          according to the type of service that was requested. When requesting
          to amend sites, the date, or adding notes such as the type of
          transportation, meals, and any other requests, contact customer
          service to implement the request. Cancellation policy: Requests must
          be submitted by the customer through the future welfare customer
          service For each cancellation of a booking by the customer, Future
          Luxury will charge a cancellation fee of 15% The amount is 100%
          deducted four days before the trip, and the amount is non-refundable
          after that, and the customer is not entitled to claim it. Return
          policy: When the customer requests a refund of the amount he paid four
          days before the trip, the future luxury charges a 15% fee and refunds
          the amount after the fees, noting that the refund mechanism and method
          is based on the same payment method. If the payment was made by credit
          card, the refund will be made within 48 hours of working days, and the
          amount will be returned from the bank within 7 working days, and there
          may be a delay by the bank. If the payment is made via our customer
          service it takes 48 hours of our working days. If the amount is not
          refunded after the above-mentioned period, please contact customer
          service or send a request and contact the company's customer service
          to request a refund. In the event that reservations that are
          non-refundable are confirmed and the customer has no right to claim
          them except in force majeure, the approval of the refund is
          conditional on the service provider's approval and acceptance of the
          refund. Upgrade flights: Passengers can upgrade the special flights
          that they have contracted for, through customer service and pay the
          difference before the aforementioned modification date, according to
          the availability of the possibility, as the luxury of the future does
          not guarantee the upgrade of flights upon the arrival of the customer,
          and in this case we will try as much as possible to implement your
          request
        </p>
      </div>

      <div className={styles.accordionTrmsCont}>
      <Accordion
          className={styles.someH3Heading}
          title="Cancellation & Refund Policy"
        >
          <p className={styles.trmsContTxt}>
            Return, exchange and cancellation policy Replacement policy: You may
            be asked to pay additional fees for modification, and these fees
            vary according to the type of service that was requested. When
            requesting to amend sites, the date, or adding notes such as the
            type of transportation, meals, and any other requests, contact
            customer service to implement the request. Cancellation policy:
            Requests must be submitted by the customer through the future
            welfare customer service For each cancellation of a booking by the
            customer, Future Luxury will charge a cancellation fee of 15% The
            amount is 100% deducted four days before the trip, and the amount is
            non-refundable after that, and the customer is not entitled to claim
            it. Return policy: When the customer requests a refund of the amount
            he paid four days before the trip, the future luxury charges a 15%
            fee and refunds the amount after the fees, noting that the refund
            mechanism and method is based on the same payment method. If the
            payment was made by credit card, the refund will be made within 48
            hours of working days, and the amount will be returned from the bank
            within 7 working days, and there may be a delay by the bank. If the
            payment is made via our customer service it takes 48 hours of our
            working days. If the amount is not refunded after the
            above-mentioned period, please contact customer service or send a
            request and contact the company's customer service to request a
            refund. In the event that reservations that are non-refundable are
            confirmed and the customer has no right to claim them except in
            force majeure, the approval of the refund is conditional on the
            service provider's approval and acceptance of the refund. Upgrade
            flights: Passengers can upgrade the special flights that they have
            contracted for, through customer service and pay the difference
            before the aforementioned modification date, according to the
            availability of the possibility, as the luxury of the future does
            not guarantee the upgrade of flights upon the arrival of the
            customer, and in this case we will try as much as possible to
            implement your request
          </p>
        </Accordion>
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

  const [timeSlots, setTimeSlots] = useState(TimeSlots);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // This is the state which is holding the journey date selected by the user.
  // Selected state has been called as date for storing the date selected by the user in react native
  const [selectedDate, setSelectedDate] = useState(null);

  const [pickupLocation, setPickupLocation] = useState("");
  const [cabTypeStatus, setCabTypeStatus] = useState({
    mini: false,
    sedan: false,
    premium: false,
  });
  const [isCabSelected, setIsCabSelected] = useState("");
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className={styles.superContainer}>
      <div className={styles.sectionCont}>
        <LeftSideContainer
          // Journey date
          dates={dates}
          setDates={setDates}
          selected={selectedDate}
          setSelectedDate={setSelectedDate}
          // Pickup location
          pickupLocation={pickupLocation}
          setPickupLocation={setPickupLocation}
          // Time slots
          timeSlots={timeSlots}
          setTimeSlots={setTimeSlots}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
          cabTypeStatus={cabTypeStatus}
          setCabTypeStatus={setCabTypeStatus}
          isCabSelected={isCabSelected}
          setIsCabSelected={setIsCabSelected}
        />
        <RightSideContainer
          couponCode={couponCode}
          setCouponCode={setCouponCode}
        />
      </div>
    </div>
  );
};

export default TourPackage;
