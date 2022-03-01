import AuthForm from "components/AuthForm";
import { getCsrfToken } from "next-auth/react";

const SignIn = ({ csrfToken }) => {
  return <AuthForm csrfToken={csrfToken} />;
};

export const getServerSideProps = async (ctx) => {
  const csrfToken = await getCsrfToken(ctx);
  return {
    props: { csrfToken },
  };
};

export default SignIn;
