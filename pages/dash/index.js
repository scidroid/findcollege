import { useSession } from "next-auth/react";

const Dash = () => {
  const { data: session } = useSession();

  return (
    <>
    <style jsx global>{`
      h1 {
        font-size: 3rem;
        text-align: center;
        color: var(--primary-color);
      }
    `}</style>
      <h1>{session ? "You are logged in :)" : "You are not logged in :("}</h1>
    </>
  );
};

export default Dash;
