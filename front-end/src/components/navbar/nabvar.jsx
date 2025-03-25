import Container from "../container/container";
import styles from "./styles.module.scss";
import MeteoIcon from "src/assets/meteo-icon.png";
import { Link } from "react-router-dom";
import routes from "src/navigation/routes";
import { today } from "src/utils/todayDate";

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <Container>
        <div className={styles.navbar}>
          <Link className={styles.logoWrapper} to={routes.HOME}>
            <img
              className={styles.logoImage}
              src={MeteoIcon}
              alt="meteo-icon"
            />
            <span className={styles.logoName}>temp.lt</span>
          </Link>
          <div className={styles.today}>{today}</div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
