import Layout from "../components/Layout";

import "../styles/globals.css";
// import type { AppProps } from "next/app";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
