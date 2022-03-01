import { useSession } from "next-auth/react";
import Footer from "components/Footer";
import Header from "components/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return (
      <main className={styles.container}>
        <section className={styles.spinner}></section>
      </main>
    );
  }

  return (
    <main className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
