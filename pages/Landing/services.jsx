import { useEffect, useState } from "react";
import styles from "../../styles/Services.module.css";
import ServiceIcon from "../components/serviceIcon";
import MustVisitCard from "../components/mustVisitCard";
import ProductsCard from "../components/productsCard";
import Image from "next/image";
import BannerImage from '../../public/banner.png';

import products from "../products";

const services = [
  {
    title: "About Kashi",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "About Kashi",
  },
  {
    title: "Purchase Gifts",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "Purchase Gifts from Kashi",
  },
  {
    title: "Book a Pooja",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "Book a your Pooja in Kashi",
  },
  {
    title: "Tour Packages",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "Book a your Tour package for Kashi",
  },
  {
    title: "Book Cabs",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "Book a Cab in Kashi",
  },
  {
    title: "Must Visit Places",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "What are the must visit places in Kashi?",
  },
  {
    title: "Temple Timings",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "What are the timings of the temples in Kashi?",
  },
  {
    title: "Locate Utilities",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "Locate the utilities in Kashi",
  },
  {
    title: "Shastri Consultancy",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "Book online shastris consultancy",
  },
  {
    title: "Book Hotels",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "Book Hotels",
  },
];

const MustVisit = [
  {
    image: "https://hist1.latestly.com/wp-content/uploads/2024/01/Varanasi.jpg",
    name: "Swarved mandir",
  },
  {
    image: "https://shrikashidham.com/wp-content/uploads/2023/08/1-3.jpg",
    name: "Shri Kashi Viswanath Mandir",
  },
  {
    // image: "https://media.istockphoto.com/id/179356552/photo/dhamekh-stupa-india.jpg?s=612x612&w=0&k=20&c=0SWUjRmBHTtQVH47ZNgcbursq8nOYtgYrujAHt9W1XY=",
    image: "https://static.toiimg.com/photo/107923136.cms",
    name: "Dhamek Stupa Sarnath",
  },
  {
    image: "https://aadikashi.com/wp-content/uploads/2023/12/Sankat-Mochan-Hanuman-Mandir-Main-Gate.jpg",
    name: "Shri Sankat Mochan Mandir",
  },
  {
    image: "https://hist1.latestly.com/wp-content/uploads/2024/01/Varanasi.jpg",
    name: "Swarved mandir",
  },
  {
    image: "https://hist1.latestly.com/wp-content/uploads/2024/01/Varanasi.jpg",
    name: "Swarved mandir",
  },
];




const Services = () => {



  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Services</h2>

      <div className={styles.services}>
        {services.map((service, index) => (
          <ServiceIcon key={index} {...service} />
        ))}
      </div>

      <h2 className={styles.heading}>Must Visit Places</h2>


      <div className={styles.visit}>
        {MustVisit.slice(0,4).map((place, index) => (
          <MustVisitCard key={index} {...place} />
        ))}
      </div>

      <section>
      <Image
        src={BannerImage}
        layout="responsive"
        width={1918}
        height={533}
        style={{borderRadius:10, marginTop:"2rem",}}
        alt="Banner Image"
      />
    </section>

    <h2 className={styles.heading}>Purchase Gifts</h2>


    <div className={styles.visit}>
        {Object.values(products).slice(0,4).map((place, index) => (
          <ProductsCard key={index} {...place} />
        ))}
      </div>


    </div>
  );
};


export default Services;
