import styles from "../../styles/ServiceIcon.module.css";

const ServiceIcon = (props) => {
  const { title, image, alt } = props;
  return (
    <div className={styles.cont}>
      <div className={styles.imageCont}>
        <img src={image} alt={alt} className={styles.image} />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default ServiceIcon;
