import styles from "../../styles/components/CategoriesCarousel.module.css";
import Image from "next/image";

const data = [
  {
    image: "https://vyaparbackend.s3.amazonaws.com/Oojus/img3.png",
    name: "Brass Idols & Statues",
    route: "/products/brass-idols-and-statues",
  },
  {
    image: "https://vyaparbackend.s3.amazonaws.com/Oojus/img3.png",
    name: "Mala & Beads",
    route: "/products/brass-idols-and-statues",
  },
  {
    image: "https://vyaparbackend.s3.amazonaws.com/Oojus/img3.png",
    name: "Consecrated Items",
    route: "/products/brass-idols-and-statues",
  },
  {
    image: "https://vyaparbackend.s3.amazonaws.com/Oojus/img3.png",
    name: "Pooja Thali",
    route: "/products/brass-idols-and-statues",
  },
  {
    image: "https://vyaparbackend.s3.amazonaws.com/Oojus/img3.png",
    name: "Rudraaksh",
    route: "/products/brass-idols-and-statues",
  },
  {
    image: "https://vyaparbackend.s3.amazonaws.com/Oojus/img3.png",
    name: "Shaligram",
    route: "/products/brass-idols-and-statues",
  },
  {
    image: "https://vyaparbackend.s3.amazonaws.com/Oojus/img3.png",
    name: "Brass Idols & Statues",
    route: "/products/brass-idols-and-statues",
  },
  {
    image: "https://vyaparbackend.s3.amazonaws.com/Oojus/img3.png",
    name: "Brass Idols & Statues",
    route: "/products/brass-idols-and-statues",
  },
];

const CategoriesCarousel = () => {
  return (

    <div className={styles.superCont}>
      <h2 className={styles.heading}>Souvenir Categories</h2>
    <div className={styles.carouselContainer}>


      {data.map((item, index) => {
        return (
          <div key={index} className={styles.carouselItem}>
            <Image
              src={item.image}
              alt="category"
              //   layout="responsive"
              className={styles.image}
              width={120}
              height={120}
            />
            <p className={styles.name}>{item.name}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CategoriesCarousel;
