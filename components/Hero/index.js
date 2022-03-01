import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
  const { data: session } = useSession();

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        The best way to find your
        <span className={styles.title_sub}> perfect college</span>
      </h1>
      <p className={styles.subtitle}>
        Automated SAT tests, loans calculators and much more in minutes.
      </p>
      <Link href={session ? "/dash" : "/auth"}>
        <a className={styles.link}>{session ? "Go to dashboard" : "Start for free"}</a>
      </Link>
      <Image src="/assets/hero.svg" alt="Hero image" height={700} width={700} />
    </section>
  );
};

export default Hero;
