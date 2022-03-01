import { useEffect } from "react";
import splitbee from "@splitbee/web";
import { SessionProvider, useSession } from "next-auth/react";
import "styles/normalize.css";
import "styles/global.css";
import Layout from "components/Layout";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/sb.js",
      apiUrl: "/_hive",
    });
  });

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default App;
