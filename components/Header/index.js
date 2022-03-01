import Button from "components/Button";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "./Header.module.css";

const LoginButton = () => {
  const { data: session } = useSession();

  return (
    <Button color="primary" onClick={() => (!session ? signIn() : signOut())}>
      {!session ? "Sign in" : "Log Out"}
    </Button>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>FindCollege</a>
      </Link>
      <LoginButton />
    </header>
  );
};

export default Header;
