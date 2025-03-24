import Container from "../container/container";
import styles from "./styles.module.scss";
import MeteoIcon from "src/assets/meteo-icon.png";
import { Link } from "react-router-dom";
import routes from "src/navigation/routes";

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <Container>
        <nav className={styles.navbar}>
          <Link className={styles.logoWrapper} to={routes.HOME}>
            <img
              className={styles.logoImage}
              src={MeteoIcon}
              alt="meteo-icon"
            />
            <span className={styles.logoName}>temp.lt</span>
          </Link>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
