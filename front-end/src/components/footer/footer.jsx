import Container from "../container/container";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <Container>
        <div className={styles.footer}>
          <p className={styles.footerInfo}>
            © 2025 temp.lt • All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
