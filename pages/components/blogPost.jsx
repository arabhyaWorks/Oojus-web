import styles from "../../styles/BlogPostCard.module.css";
import RatingImage from "../icons/rating";
import Image from "next/image";

const image =
  "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/blog1.jpeg?alt=media&token=a3da6dca-50bb-4f1c-84d5-99eb79c4c39d";

const BlogPostCard = (props) => {
  const { image, title, description, authorName, authorImage, date } = props;
  return (
    <div className={styles.superCont}>
      {/* <Image
        src={image}
        layout="responsive"
        width={300}
        height={186}
        className={styles.card}
      /> */}

      <img src={image} className={styles.card} />

      <div className={styles.details}>
        <p className={styles.name}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.author}>
          <Image
            src={authorImage}
            width={50}
            height={50}
            className={styles.authorImage}
          />
          <div>
            <p className={styles.authorName}>{authorName}</p>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
