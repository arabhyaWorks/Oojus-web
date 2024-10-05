import { useEffect, useState } from "react";
import styles from "../../styles/Services.module.css";
import ServiceIcon from "./serviceIcon";
import MustVisitCard from "./mustVisitCard";
import CategoryCard from "./categoryCard";
import ProductCard from "./productCard";

import Image from "next/image";
// import BannerImage from '../../public/banner.png';
const BannerImage =
  "https://staticin.sadhguru.org/in/pub/media/wysiwyg/Isha10-Rakhi-Web.jpg";
const swiggy =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/download.png?alt=media&token=adf72db0-e054-4af9-9c4a-41b5dc0cc82e";

// import products from "../products";
import PoojaCard from "./poojaCard";
import BlogPostCard from "./blogPost";

// import poojas from "../poojas";
// import blogs from "../blogs";

const products = {
  "66a659f71bbcce2024861712": {
    _id: "66a659f71bbcce2024861712",
    about:
      "The Sudarshan Shaligram is a sacred stone revered in Hinduism, associated particularly with Lord Vishnu, the preserver of the universe. Shaligram stones are naturally occurring fossilized ammonite shells found in the riverbeds of the Gandaki River in Nepal, and each Shaligram is believed to represent a different form of Vishnu. The Sudarshan Shaligram is distinguished by its unique markings that resemble the Sudarshan Chakra, the divine discus weapon of Vishnu. Devotees worship this Shaligram for protection, prosperity, and spiritual growth. It is often placed in homes, temples, or personal altars and is used in various rituals and prayers to invoke the blessings of Lord Vishnu.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SC"],
    discount: 5,
    gst: 18,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/shaligram.png?alt=media&token=9a66c43c-58e2-4ad2-9607-0f4b2a0e5f77",
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/shaligram.png?alt=media&token=9a66c43c-58e2-4ad2-9607-0f4b2a0e5f77",
    ],
    inStock: 20,
    name: "Mahalaxmi Shaligram",
    price: 900,
    productFeatures: [
      "Authentic Shaligram: Naturally occurring fossilized ammonite shell from the Gandaki River in Nepal, revered as a symbol of Lord Vishnu.",
      "Sudarshan Chakra Markings: Unique markings on the Shaligram resemble the Sudarshan Chakra, making it a powerful symbol of protection and divine power.",
      "Spiritual Significance: Worshipping the Sudarshan Shaligram is believed to bring protection, prosperity, and spiritual growth to the devotee.",
      "Ideal for Rituals and Prayers: Commonly used in various Hindu rituals, prayers, and as a part of daily worship to invoke the blessings of Lord Vishnu.",
      "Perfect for Homes and Temples: This Shaligram is ideal for placement in homes, temples, or personal altars, creating a spiritually charged environment.",
      "Durable and Long-lasting: The stone is robust and maintains its sacred energy for generations, making it a cherished family heirloom.",
    ],
    rating: 4.5,
  },
  "66a65a041bbcce2024861714": {
    _id: "66a65a041bbcce2024861714",
    about:
      "The Rudraksha Maala 8mm is a spiritual accessory consisting of 108 + 1 beads of equal size. These beads are believed to be the tears of Lord Shiva and hold significant religious and spiritual importance. The mala is designed for daily use, suitable for both boys and girls, and is strung on a strong thread for durability.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SC"],
    discount: 10,
    gst: 0,
    images: [
      "https://shrikashiprasadam.com/upload/products_images/55/55_55DiamondCutSphatikMala27072019160633_Photoroom_16052024154213.jpg",
      "https://shrikashiprasadam.com/upload/products_images/55/55_55DiamondCutSphatikMala27072019160633_Photoroom_16052024154213.jpg",
    ],
    inStock: 20,
    name: "Sphatik mala diamond fine cut",
    price: 1400,
    productFeatures: [
      "Contains 108 + 1 beads of equal size Rudraksha.",
      "8mm size beads, ideal for daily use.",
      "Suitable for both boys and girls.",
      "Can be worn at all times, including during sleep and spiritual practices.",
      "Should not come in contact with hot water or soap.",
      "Avoid contact with metal; can be cast in gold or silver with care.",
      "Strong thread ensures durability.",
    ],
    rating: 4.5,
  },
  "66a65a061bbcce2024861716": {
    _id: "66a65a061bbcce2024861716",
    about:
      "The Rudraksha Maala 8mm is a spiritual accessory consisting of 108 + 1 beads of equal size. These beads are believed to be the tears of Lord Shiva and hold significant religious and spiritual importance. The mala is designed for daily use, suitable for both boys and girls, and is strung on a strong thread for durability.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SC"],
    discount: 10,
    gst: 5,
    images: [
      "https://shrikashiprasadam.com/upload/products_images/226/226_226annapurnaji26122019141751_Photoroom1_23052024122527.jpg",
      "https://shrikashiprasadam.com/upload/products_images/226/226_226annapurnaji26122019141751_Photoroom1_23052024122527.jpg",
    ],
    inStock: 20,
    name: "Brass Idols Maa Annapurna Devi",
    price: 1000,
    productFeatures: [
      "Contains 108 + 1 beads of equal size Rudraksha.",
      "8mm size beads, ideal for daily use.",
      "Suitable for both boys and girls.",
      "Can be worn at all times, including during sleep and spiritual practices.",
      "Should not come in contact with hot water or soap.",
      "Avoid contact with metal; can be cast in gold or silver with care.",
      "Strong thread ensures durability.",
    ],
    rating: 4.5,
  },
  "66a65a0a1bbcce2024861718": {
    _id: "66a65a0a1bbcce2024861718",
    about:
      "The Ram Ji on Shaligram is a sacred and spiritually significant artifact, combining the divine essence of Lord Ram with the revered Shaligram stone. In Hindu tradition, Shaligram (or Shaligram Shila) is a sacred black stone found in the Gandaki River in Nepal, cherished by Vaishnavas as a representation of Lord Vishnu. Since Lord Ram is an incarnation of Vishnu, this Shaligram holds immense spiritual value, symbolizing the divine presence and attributes of both Vishnu and Ram. Devotees believe that keeping a Ram Ji Shaligram in their homes brings divine blessings, protection, and spiritual prosperity. It is revered for its purity and sanctity, making it a cherished item for daily worship and spiritual rituals.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SC"],
    discount: 10,
    gst: 18,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/shali2.png?alt=media&token=27975b37-b493-4393-87b9-26695b7f9667",
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/shali2.png?alt=media&token=27975b37-b493-4393-87b9-26695b7f9667",
    ],
    inStock: 20,
    name: "Ram Ji On Shaligram",
    price: "11112",
    productFeatures: [
      "Sacred Shaligram Stone: Found naturally in the Gandaki River, Nepal, the Shaligram is a fossilized stone representing Lord Vishnu, making it highly revered in Hinduism.",
      "Depiction of Lord Ram: This Shaligram features an intricate carving of Lord Ram, symbolizing his divine presence and attributes, making it an ideal representation of Vishnu’s seventh avatar.",
      "Spiritual Significance: Worshipping the Ram Ji Shaligram is believed to bring blessings, protection from evil, and spiritual growth, making it an essential part of a devotee’s spiritual practices.",
      "Purity and Sanctity: The Shaligram is celebrated for its inherent purity and is often kept in homes and temples to ensure a spiritually charged and protective environment.",
      "Ideal for Rituals: Perfect for use in daily prayers, pujas, and other spiritual rituals, the Ram Ji Shaligram is considered a divine object of worship.",
      "Cultural Heritage: This Shaligram is not just a stone but a piece of cultural and religious heritage, passed down through generations as a sacred family heirloom.",
    ],
    rating: 4.5,
  },
  "66a65a0c1bbcce202486171a": {
    _id: "66a65a0c1bbcce202486171a",
    about:
      "The 2 Mukhi Rudraksha Bracelet is a powerful and spiritually significant accessory, representing the divine union of Lord Shiva and Goddess Parvati in the form of Ardhanarishvara. Controlled by the planet Moon, this Rudraksha is believed to bring emotional balance, harmony in relationships, and overall well-being to the wearer. It is particularly beneficial for those dealing with anxiety, depression, or a wavering mind. The bracelet is designed not only to enhance spiritual growth but also to foster a sense of inner bliss and fulfillment. Wearing the 2 Mukhi Rudraksha Bracelet is recommended for those seeking to strengthen their emotional stability, self-confidence, and to improve physical ailments related to the kidneys, intestines, and reproductive organs.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SC"],
    discount: 10,
    gst: 18,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/bracelet.png?alt=media&token=94145836-118f-4b0f-8462-5da94ab51317",
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/bracelet.png?alt=media&token=94145836-118f-4b0f-8462-5da94ab51317",
    ],
    inStock: 20,
    name: "2 Mukhi Rudraksha Bracelet",
    price: 445,
    productFeatures: [
      "Divine Connection: Represents the Ardhanarishvara form of Lord Shiva and Goddess Parvati, symbolizing unity and harmony.",
      "Emotional Stability: Helps control a wavering and emotionally vulnerable mind, reducing anxiety and depression.",
      "Relationship Harmony: Promotes strong and harmonious relationships, fostering love and understanding.",
      "Self-Confidence and Inner Bliss: Bestows self-confidence, emotional stability, and a deep sense of inner fulfillment.",
      "Health Benefits: Recommended for improving issues related to kidneys, intestines, infertility, and sexual ailments.",
      "Planetary Influence: Controlled by the Moon, enhancing the positive effects of this celestial body on the wearer.",
      "Durable Design: Crafted with high-quality Rudraksha beads, ensuring durability and comfort for daily wear.",
    ],
    rating: 4.5,
  },
  "66a65a0f1bbcce202486171c": {
    _id: "66a65a0f1bbcce202486171c",
    about:
      "The Rudraksha Maala 8mm is a spiritual accessory consisting of 108 + 1 beads of equal size. These beads are believed to be the tears of Lord Shiva and hold significant religious and spiritual importance. The mala is designed for daily use, suitable for both boys and girls, and is strung on a strong thread for durability.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SC"],
    discount: 10,
    gst: 0,
    images: [
      "https://shrikashiprasadam.com/upload/products_images/592/592_BrassRamDarbarSmall_Photoroom1_24052024105223.jpg",
      "https://shrikashiprasadam.com/upload/products_images/592/592_BrassRamDarbarSmall_Photoroom1_24052024105223.jpg",
    ],
    inStock: 20,
    name: "Brass Ram Darbar Small",
    price: 1000,
    productFeatures: [
      "Contains 108 + 1 beads of equal size Rudraksha.",
      "8mm size beads, ideal for daily use.",
      "Suitable for both boys and girls.",
      "Can be worn at all times, including during sleep and spiritual practices.",
      "Should not come in contact with hot water or soap.",
      "Avoid contact with metal; can be cast in gold or silver with care.",
      "Strong thread ensures durability.",
    ],
    rating: 4.5,
  },
  "66a65a121bbcce202486171e": {
    _id: "66a65a121bbcce202486171e",
    about:
      "The Sudarshan Shaligram is a sacred stone revered in Hinduism, associated particularly with Lord Vishnu, the preserver of the universe. Shaligram stones are naturally occurring fossilized ammonite shells found in the riverbeds of the Gandaki River in Nepal, and each Shaligram is believed to represent a different form of Vishnu. The Sudarshan Shaligram is distinguished by its unique markings that resemble the Sudarshan Chakra, the divine discus weapon of Vishnu. Devotees worship this Shaligram for protection, prosperity, and spiritual growth. It is often placed in homes, temples, or personal altars and is used in various rituals and prayers to invoke the blessings of Lord Vishnu.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SC"],
    discount: 10,
    gst: 18,
    images: [
      "https://shrikashiprasadam.com/upload/products_images/697/697_Mahalaxmi_Photoroomcopy_28062024114515.jpg",
      "https://shrikashiprasadam.com/upload/products_images/697/697_Mahalaxmi_Photoroomcopy_28062024114515.jpg",
    ],
    inStock: 20,
    name: "Mahalaxmi Shaligram",
    price: 1000,
    productFeatures: [
      "Authentic Shaligram: Naturally occurring fossilized ammonite shell from the Gandaki River in Nepal, revered as a symbol of Lord Vishnu.",
      "Sudarshan Chakra Markings: Unique markings on the Shaligram resemble the Sudarshan Chakra, making it a powerful symbol of protection and divine power.",
      "Spiritual Significance: Worshipping the Sudarshan Shaligram is believed to bring protection, prosperity, and spiritual growth to the devotee.",
      "Ideal for Rituals and Prayers: Commonly used in various Hindu rituals, prayers, and as a part of daily worship to invoke the blessings of Lord Vishnu.",
      "Perfect for Homes and Temples: This Shaligram is ideal for placement in homes, temples, or personal altars, creating a spiritually charged environment.",
      "Durable and Long-lasting: The stone is robust and maintains its sacred energy for generations, making it a cherished family heirloom.",
    ],
    rating: 4.5,
  },
  "66a65a161bbcce2024861720": {
    _id: "66a65a161bbcce2024861720",
    about:
      "The Rudraksha Mala (8mm Beads) is a sacred necklace made from 108+1 natural Rudraksha beads, each measuring 8mm in size. Rudraksha beads are revered in Hinduism for their spiritual and medicinal properties, symbolizing the tears of Lord Shiva. According to ancient legends, these beads are considered a divine gift, bringing peace, health, and spiritual growth to those who wear them. This mala is simple yet powerful, ideal for daily use in meditation, prayer, or spiritual practice. It is designed for both boys and girls and is suitable for all age groups, making it a versatile accessory for anyone seeking spiritual upliftment.",
    description: ["Brands : OOJUS", "Product Code : 9SKV_SC"],
    discount: 10,
    gst: 18,
    images: [
      "https://shrikashiprasadam.com/upload/products_images/46/46_RUDRAKSHMALAIMAGE_Photoroom1_15052024160936.jpg",
      "https://shrikashiprasadam.com/upload/products_images/46/46_RUDRAKSHMALAIMAGE_Photoroom1_15052024160936.jpg",
    ],
    inStock: 20,
    name: "Rudraksha Mala Normal 8mm",
    price: 350,
    productFeatures: [
      "108+1 Beads: The mala is composed of 108 beads plus one additional bead, following the traditional count used in meditation practices.",
      "8mm Bead Size: Each Rudraksha bead in the mala measures 8mm in diameter, providing a comfortable size for wearing and counting during prayers.",
      "High-Quality Product: The mala is crafted from best-in-class natural Rudraksha beads, ensuring authenticity and effectiveness.",
      "Ideal for All: Designed to be suitable for both boys and girls, making it an inclusive spiritual accessory.",
      "Simple and Basic Design: The mala is simple in design, making it perfect for daily use during meditation, prayers, or spiritual rituals.",
      "Durable and Strong Thread: The mala is strung with a strong and durable thread, ensuring it lasts long despite daily wear.",
      "Cultural and Spiritual Significance: Wearing Rudraksha is believed to bring spiritual growth, protection, and divine blessings, making it an essential item for spiritual seekers.",
    ],
    rating: 4.5,
  },
  "66a65a1a1bbcce2024861722": {
    _id: "66a65a1a1bbcce2024861722",
    about:
      "The Santaan Gopal Shaligram is a sacred stone revered in Hinduism, associated with Lord Krishna in his child form, known as Bal Gopal or Gopal. This Shaligram is particularly venerated for its connection to blessings related to progeny and child welfare. Couples who desire the blessing of children often worship the Santaan Gopal Shaligram, seeking divine grace to be blessed with a child. It is believed to have divine properties that ensure the health, happiness, and prosperity of children, bringing overall joy and well-being to the family. The Santaan Gopal Shaligram is also valued for its spiritual significance, promoting devotion, spiritual growth, and a harmonious household.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SA"],
    discount: 10,
    gst: 10,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/shali3.png?alt=media&token=4aaa401a-14bc-4b69-8c18-8944625f5695",
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/shali3.png?alt=media&token=4aaa401a-14bc-4b69-8c18-8944625f5695",
    ],
    inStock: 20,
    name: "Santaan Gopal Shaligram",
    price: 278,
    productFeatures: [
      "Progeny Blessings: The Santaan Gopal Shaligram is believed to bestow blessings related to the birth of children, making it highly revered among couples seeking to conceive.",
      "Child Welfare: Worshipping this Shaligram is believed to ensure the health, protection, and prosperity of existing children, providing comfort to parents.",
      "Spiritual Significance: The Shaligram is a source of spiritual growth, promoting devotion and enhancing one’s spiritual practices.",
      "Holistic Well-being: It is thought to bring overall prosperity, happiness, and harmony to the household, creating a joyful family environment.",
      "Authentic and Natural: Each Santaan Gopal Shaligram is naturally formed and sourced with care, ensuring its authenticity and divine essence.",
      "Ideal for Gifting: The Shaligram makes a thoughtful and spiritually significant gift for occasions like baby showers, religious ceremonies, and family gatherings.",
    ],
    rating: 4.5,
  },
  "66a759c39666fb9e714578d3": {
    _id: "66a759c39666fb9e714578d3",
    about:
      "Narmdeshwar Shivling, also known as Narmada Banalinga, is a unique type of Shiva Lingam found in the Narmada River in India. These lingams are naturally occurring and are revered in Hinduism for their spiritual significance. They are believed to represent Lord Shiva and are considered highly sacred. The Narmada River, one of the seven holy rivers in India, is particularly associated with these lingams.Key Features of Narmdeshwar Shivling:Natural Formation: These lingams are naturally formed due to the river's flow and are often perfectly round or oval.Symbol of Shiva: They are worshipped as a symbol of Lord Shiva, one of the principal deities in Hinduism.Spiritual Importance: It is believed that worshipping the Narmdeshwar Shivling brings peace, prosperity, and spiritual growth.Holy Origin: Originating from the Narmada River, these lingams carry the sanctity of the holy river, adding to their religious significance.",
    description: ["Brands : OOJUS", "Product Code : 1SKV_SC"],
    discount: 10,
    gst: 0,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/narmeshwar_shivling.png?alt=media&token=670ee50e-9f1e-4e3e-99d0-b7706f049e45",
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/narmeshwar_shivling.png?alt=media&token=670ee50e-9f1e-4e3e-99d0-b7706f049e45",
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/narmeshwar_shivling.png?alt=media&token=670ee50e-9f1e-4e3e-99d0-b7706f049e45",
    ],
    inStock: 20,
    name: "Narmdeshwar Shivling",
    price: 528,
    productFeatures: [
      "Natural Formation: The Narmadeshwar Shivling is naturally formed due to the flow of the Narmada River, resulting in a perfectly round or oval shape.",
      "Symbol of Lord Shiva: This Shivling is worshipped as a symbol of Lord Shiva, one of the principal deities in Hinduism, representing his divine presence.",
      "Spiritual Significance: Worshipping the Narmadeshwar Shivling is believed to bring peace, prosperity, and spiritual growth to devotees.",
      "Holy Origin: The lingam originates from the Narmada River, which carries the sanctity of the holy river, adding to its religious significance.",
      "Cultural Heritage: The Narmadeshwar Shivling is closely associated with the religious and cultural traditions of India, particularly with the worship practices related to Lord Shiva.",
    ],
    rating: 4.5,
  },
};
const poojas = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const services = [
  {
    title: "About Kashi",
    image:
      "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Service-Icon-Web/Food-and-beverages--4.png",
    alt: "About Kashi",
    route: "/aboutKashi",
  },
  {
    title: "Purchase Gifts",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2FPurchase_gifts.png?alt=media&token=3d94fb48-0d7e-4592-b9ed-5242d8792cbe",
    alt: "Purchase Gifts from Kashi",
    route: "/Souvenir",
  },
  {
    title: "Book a Pooja",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2Fpuja.png?alt=media&token=44a18aee-4ecb-4390-9b52-092af033be58",
    alt: "Book a your Pooja in Kashi",
    route: "/",
  },
  {
    title: "Tour Packages",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2FTour_package.png?alt=media&token=3f133f2a-c771-4c09-8fa6-cfbcba5c04e2",
    alt: "Book a your Tour package for Kashi",
    route: "/",
  },
  {
    title: "Book Cabs",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2Fcabs.png?alt=media&token=a06b9ff3-9a74-4812-acd0-6eb9a8f2a06b",
    alt: "Book a Cab in Kashi",
    route: "/",
  },
  {
    title: "Must Visit Places",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2FMust_visit.png?alt=media&token=6a20d588-350c-4974-8d51-ce63a94e6482",
    alt: "What are the must visit places in Kashi?",
    route: "/",
  },
  {
    title: "Temple Timings",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2FTemple_timings.png?alt=media&token=6d17a692-8ca2-43a1-8cbf-94c6148e261c",
    alt: "What are the timings of the temples in Kashi?",
    route: "/",
  },
  {
    title: "Locate Utilities",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2FUtilities.png?alt=media&token=63b8694c-c322-48e3-8e64-5d0043b91a89",
    alt: "Locate the utilities in Kashi",
    route: "/",
  },
  {
    title: "Shastri Consultancy",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2FShastri.png?alt=media&token=0b8fbf98-effa-4ff3-a0bb-975b5dc5ccfd",
    alt: "Book online shastris consultancy",
    route: "/",
  },
  {
    title: "Book Hotels",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/services_web%2FHotels.png?alt=media&token=02ea77c4-b39d-4063-8bca-22e921cd8914",
    alt: "Book Hotels",
    route: "/",
  },
];

const blogs = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/blog1.jpeg?alt=media&token=a3da6dca-50bb-4f1c-84d5-99eb79c4c39d",
    title: "How to do Diwali Puja",
    description:
      "Uncovering the motivation and vision of tech leaders towards AI Copilots",
    date: "Novermber 12, 2024",
    authorName: "Pooja Sharma",
    authorImage:
      "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a1851200eb6a6636e17980_abc.webp",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/blog%202.png?alt=media&token=3062f108-1ed1-43e5-b4ef-dc6c780a8b2e",
    title: "The value of Kashi in Hinduism",
    description:
      "Uncovering the motivation and vision of tech leaders towards AI Copilots",
    date: "Novermber 12, 2024",
    authorName: "Pooja Sharma",
    authorImage:
      "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a1851200eb6a6636e17980_abc.webp",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/blog3.png?alt=media&token=427baeab-289f-442d-90be-9b1b390ec116",
    title: "The Story of Dugrakund Mandir",
    description:
      "Uncovering the motivation and vision of tech leaders towards AI Copilots",
    date: "Novermber 12, 2024",
    authorName: "Pooja Sharma",
    authorImage:
      "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a1851200eb6a6636e17980_abc.webp",
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
    image:
      "https://aadikashi.com/wp-content/uploads/2023/12/Sankat-Mochan-Hanuman-Mandir-Main-Gate.jpg",
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
        {MustVisit.slice(0, 4).map((place, index) => (
          <MustVisitCard key={index} {...place} />
        ))}
      </div>

      <section>
        <Image
          src={BannerImage}
          layout="responsive"
          width={1918}
          height={533}
          style={{ borderRadius: 10, marginTop: "2rem" }}
          alt="Banner Image"
        />
      </section>

      <h2 className={styles.heading}>Souvenir Categories</h2>

      <div className={styles.visit}>
        {Object.values(products)
          .slice(0, 4)
          .map((place, index) => (
            <CategoryCard key={index} {...place} />
          ))}
      </div>

      <section>
        <Image
          src={
            "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/Rudraksh-Guide-Mar-22-Web.jpg"
          }
          layout="responsive"
          width={1918}
          height={533}
          style={{ borderRadius: 10, marginTop: "2rem" }}
          alt="Banner Image"
        />
      </section>

      <h2 className={styles.heading}>Purchase Gifts</h2>

      <div className={styles.visit}>
        {Object.values(products)
          .slice(4, 8)
          .map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
      </div>

      <section>
        <Image
          src={swiggy}
          layout="responsive"
          width={1918}
          height={533}
          style={{ borderRadius: 10, marginTop: "2rem" }}
          alt="Banner Image"
        />
      </section>

      <h2 className={styles.heading}>Perform Pooja in Kashi</h2>

      <div className={styles.visit}>
        {poojas.map((product, index) => (
          <PoojaCard key={index} {...product} />
        ))}
      </div>

      <h2 className={styles.blogHeading}>Latest blog posts</h2>

      <div className={styles.visit}>
        {blogs.map((product, index) => (
          <BlogPostCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Services;
