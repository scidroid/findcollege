import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p
        className={styles.title}
      >{`©️ ${new Date().getFullYear()} Juan Almanza. Under GPL v3 license.`}</p>
    </footer>
  );
};

export default Footer;
