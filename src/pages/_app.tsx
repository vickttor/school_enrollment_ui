import type { AppProps } from "next/app";
import Head from "next/head"

// Global Styles from src/styles/globa.ts
import { GlobalStyles } from "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>School Enrollments</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
