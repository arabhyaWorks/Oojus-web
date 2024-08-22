import styles from "../../styles/BlogPostCard.module.css";
import RatingImage from "../icons/rating";
import Image from "next/image";

const image =
  "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a4d9ef54fed3eb89d702df_Image-p-800.webp";

const BlogPostCard = (props) => {
  const { image, title, description, authorName, authorImage, date } = props;
  return (
    <div className={styles.superCont}>
      <Image
        src={image}
        layout="responsive"
        width={300}
        height={186}
        className={styles.card}
      />

      <div className={styles.details}>
        <p className={styles.name}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.author}>
            <Image
                src={authorImage}
                // layout="responsive"
                width={50}
                height={50}
                className={styles.authorImage}
            />
            <div>
            <p className={styles.authorName}>{authorName}</p>
            <p className={styles.date}>{date}</p>
            </div>
        </div>

  

        {/* <div style={{ display: "flex", flexDirection: "row", margin: 0 }}>
          <p className={styles.price}> ₹{details.price}</p>
          <p className={styles.discount}> ₹{details.originalPrice}</p>
        </div> */}
      </div>
    </div>
  );
};

export default BlogPostCard;
