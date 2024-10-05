import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context";
import { onValue, ref } from "firebase/database";
// import Image from "next/image";
import database from "../../firebase/config";
import styles from "../../styles/pooja/index.module.css";
import BreadCrum from "../components/BreadCrum";
import Tabs from "../components/tab";

const poojadata = {
  about:
    "Rudrabhishek Puja is a significant ritual dedicated to Lord Shiva, performed to invoke his blessings in his Rudra form. This ritual involves bathing the Shivalinga, an iconic representation of Lord Shiva, with various sacred substances while chanting powerful Vedic mantras, specifically the Rudra Suktha. The Rudrabhishek Puja is considered one of the most potent and revered ceremonies in Hinduism, believed to bring immense spiritual, mental, and physical benefits to the devotees.\\n\\n  The primary objective of the Rudrabhishek Puja is to seek the grace and blessings of Lord Shiva, especially during the auspicious month of Shravan. This month holds special significance in Hinduism, as it is believed that the worship of Lord Shiva during this period yields the greatest benefits. The ritual commences with the Abhishek, where the Shivalinga is bathed with holy substances such as Ganga Jal (Ganges water), milk, yogurt, ghee, honey, and sugar. This process of bathing the deity is performed with utmost devotion and is accompanied by the continuous recitation of Vedic hymns.\\n\\n  During the Rudrabhishek, various sacred mantras are chanted, including the Rudra Suktha, Sri Rudram, Chamakam, Purusha Suktha, Narayana Suktha, Durga Suktha, Bhagya Suktha, and Shanti Suktha. These chants are believed to purify the surroundings and enhance the efficacy of the puja. The meticulous recitation of these mantras, often led by learned priests or Shastris, creates a powerful spiritual atmosphere, invoking the divine presence of Lord Shiva.",
  benefits:
    "Rudra Abhishek is a ritual of worshipping Lord Shiva in his Rudra form, in which a Shivalinga is bathed in water which is continuously poured over it, with accompaniment of the chanting of Vedic mantra called the Rudra Suktha. It is a very important pooja as it is considered to be the most powerful pooja for Lord Shiva. It is believed that the recitation of the Sri Rudram (Rudra Prashna) is beneficial for mental, emotional and physical health",
  descImage:
    "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/pooja_images%2Fpj_rudra_1_desc.png?alt=media&token=5af5ddc8-8b90-478e-9f9b-c77a40ef8949",
  details: {
    duration: "4hrs 30min",
    location: "Kashi",
    originalPrice: 6500,
    price: 5500,
    rating: 4.3,
    shastri: 1,
  },
  faq: [
    {
      answer:
        "Rudra Abhishek is a ritual of worshipping Lord Shiva in his Rudra form, in which a Shivalinga is bathed in water continuously poured over it, accompanied by the chanting of the Vedic mantra called the Rudra Suktha.",
      ques: "What is Rudra Abhishek?",
    },
    {
      answer:
        "The recitation of the Sri Rudram (Rudra Prashna) during Rudra Abhishek is believed to be beneficial for mental, emotional, and physical health. It is considered one of the most powerful poojas for Lord Shiva.",
      ques: "What are the benefits of performing Rudra Abhishek?",
    },
    {
      answer:
        "The Rudra Abhishek pooja typically takes around 1.5 hours to complete.",
      ques: "How long does the Rudra Abhishek pooja take?",
    },
    {
      answer:
        "Rudra Abhishek can be performed in a temple, at home, or online. Locations include places like Kashi.",
      ques: "Where can Rudra Abhishek be performed?",
    },
    {
      answer:
        "The pooja involves offering water, milk, curd, ghee, honey, sugar, and other items to the Shivalinga while chanting various Sukthas.",
      ques: "What materials are used in Rudra Abhishek?",
    },
    {
      answer:
        "The pooja is performed by a Shastri who is well versed with the Rudra Suktha and other Vedic chants.",
      ques: "Who performs the Rudra Abhishek pooja?",
    },
    {
      answer:
        "The Rudra Suktha, Sri Rudram (Rudra Prashna), Chamakam, Purusha Suktha, Narayana Suktha, Durga Suktha, Bhagya Suktha, Shanti Suktha, and Pavamana are chanted during the pooja.",
      ques: "What mantras are chanted during Rudra Abhishek?",
    },
    {
      answer:
        "Yes, Rudra Abhishek can be performed online, and you can participate virtually.",
      ques: "Can Rudra Abhishek be performed online?",
    },
  ],
  id: "pj_rudra_1",
  mainImage:
    "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/pooja_images%2Fkaal.png?alt=media&token=4b695679-bdbd-4f6d-9481-50d2f8304d90",
  name: "Kaal Sarp Dosh Pooja",
  packages: {
    rudra_pkg_1: {
      id: "rudra_pkg_1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/pooja_images%2Fpj_rudra_1_main.png?alt=media&token=5af5ddc8-8b90-478e-9f9b-c77a40ef8949",
      name: "For 1 person",
      price: 1100,
      selected: false,
    },
    rudra_pkg_2: {
      id: "rudra_pkg_2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/pooja_images%2Fpj_rudra_1_main.png?alt=media&token=5af5ddc8-8b90-478e-9f9b-c77a40ef8949",
      name: "For 2 person",
      price: 2200,
      selected: false,
    },
    rudra_pkg_3: {
      id: "rudra_pkg_3",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/pooja_images%2Fpj_rudra_1_main.png?alt=media&token=5af5ddc8-8b90-478e-9f9b-c77a40ef8949",
      name: "For 3 person",
      price: 3300,
      selected: false,
    },
    rudra_pkg_4: {
      id: "rudra_pkg_4",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/pooja_images%2Fpj_rudra_1_main.png?alt=media&token=5af5ddc8-8b90-478e-9f9b-c77a40ef8949",
      name: "For 4 person",
      price: 4400,
      selected: false,
    },
    rudra_pkg_5: {
      id: "rudra_pkg_5",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/pooja_images%2Fpj_rudra_1_main.png?alt=media&token=5af5ddc8-8b90-478e-9f9b-c77a40ef8949",
      name: "For 5 person",
      price: 5500,
      selected: false,
    },
  },
  process:
    "The pooja is performed by a Shastri who is well versed with the Rudra Suktha. The pooja is performed in a temple or at home. The pooja is performed by offering water, milk, curd, ghee, honey, sugar, and other items to the Shivalinga. The pooja is performed with the chanting of the Rudra Suktha. The pooja is performed with the recitation of the Sri Rudram (Rudra Prashna). The pooja is performed with the recitation of the Chamakam. The pooja is performed with the recitation of the Purusha Suktha. The pooja is performed with the recitation of the Narayana Suktha. The pooja is performed with the recitation of the Durga Suktha. The pooja is performed with the recitation of the Bhagya Suktha. The pooja is performed with the recitation of the Shanti Suktha. The pooja is performed with the recitation of the Pavamana",
  samagri: [
    "Gangajal (Holy Water)",
    "Panchamrit (Milk, Curd, Honey, Ghee, Sugar)",
    "Milk",
    "Coconut Water",
    "Sugarcane Juice",
    "Honey",
    "Ghee",
    "Curd",
    "Lemon Juice",
    "Perfumed Oil",
    "Sandalwood Paste",
    "Vibhuti (Sacred Ash)",
    "Bilva Leaves (Bel Patra)",
    "Flowers",
    "Fruits",
    "Rice",
    "Betel Leaves and Nuts",
    "Incense Sticks and Camphor",
    "Bhasma (Sacred Ash)",
    "Sweets",
  ],
};

const Pooja = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { setProductData } = useAuth();
  const [uid] = useState(null);

  console.log("data is here : ", data);

  const fetchProductData = () => {
    const dbRef = ref(database, "pooja/poojaPackages/" + router.query.poojaId);
    onValue(dbRef, (snapshot) => {
      setData(snapshot.val());
      console.log(data);
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [router.query.poojaId]);

  return (
    <div className={styles.superContainer}>
      <BreadCrum crumbs={["Pooja", "Rdurabhishek Pooja"]} />

      <div className={styles.pujaContainer}>
        <div className={styles.imageContainer}>
          <img
            src={poojadata?.mainImage}
            alt={poojadata?.name}
            className={styles.pujaImage}
          />
        </div>

        <div className={styles.detailsContainer}>
          <h1 className={styles.title}>रुद्राभिषेक एवं शिवाराधन</h1>

          <p className={styles.duration}>
            <strong>Duration :</strong> 4 Hrs 30 Min
          </p>

          <p className={styles.price}>
            <strong>Price :</strong> Rs 5500
          </p>

          <p className={styles.shastri}>
            <strong>Shastri :</strong> 1
          </p>

          <p className={styles.location}>
            <strong>Location :</strong> Kashi
          </p>

          <button className={styles.bookButton}>Book Puja</button>
        </div>
      </div>

      <Tabs>
        <div key="info" title="About the Pooja">
          <p>{poojadata.about}</p>
        </div>
        <div key="payment-history" title="Benefits">
          <p>{poojadata.benefits}</p>
        </div>
        <div key="payment-methods" title="Processes">
          <p>{poojadata.process}</p>
        </div>
        <div key="payment-frre" title="Samagri">
          {/* <p></p> */}
            <ul>
                {poojadata.samagri.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </Tabs>
    </div>
  );
};

export default Pooja;
