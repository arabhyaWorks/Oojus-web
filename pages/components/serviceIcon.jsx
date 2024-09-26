import styles from "../../styles/ServiceIcon.module.css";
import { useRouter } from "next/router";

const ServiceIcon = (props) => {
  const router = useRouter();
  const { title, image, alt, route } = props;
  return (
    <div className={styles.cont}>
      <div onClick={()=>{
        router.push(route)
      }} className={styles.imageCont}>
        <img src={image} alt={alt} className={styles.image} />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default ServiceIcon;
