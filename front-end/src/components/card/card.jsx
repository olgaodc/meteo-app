import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import routes from "src/navigation/routes";

const Card = ({
  cityName,
  temperature,
  feelsLike,
  windSpeed,
  relativeHumidity,
}) => {
  return (
    //TO DO: CHANGE ROUTE!!!
    <Link className={styles.cardLink} to={routes.HOME}>
      <h1 className={styles.cardTitle}>{cityName}</h1>
      <p className={`${styles.cardInfo} ${styles.temperature}`}>
        {temperature} °C
      </p>
      <p className={styles.cardInfo}>Feels like {feelsLike} °C</p>
      <ul className={styles.cardList}>
        <li className={styles.cardInfo}>Wind: {windSpeed} m/s</li>
        <li className={styles.cardInfo}>Humidity: {relativeHumidity} %</li>
      </ul>
    </Link>
  );
};

export default Card;
