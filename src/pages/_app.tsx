import type { AppProps } from "next/app";

// Global Styles from src/styles/globa.ts
import { GlobalStyles } from "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
