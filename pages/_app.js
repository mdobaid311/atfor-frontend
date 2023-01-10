import "../styles/globals.scss";
import { Poppins } from "@next/font/google";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
