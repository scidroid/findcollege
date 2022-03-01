import styles from "./AuthForm.module.css";

const AuthForm = ({ csrfToken }) => {
  return (
    <form className={styles.form} method="post" action="/api/auth/signin/email">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label className={styles.label}>
        <span className={styles.label_text}>Email address</span>
        <input className={styles.label_input} type="email" id="email" name="email" placeholder="your@name.com" />
      </label>
      <button className={styles.button} type="submit">Sign in with Email</button>
    </form>
  );
};

export default AuthForm;
