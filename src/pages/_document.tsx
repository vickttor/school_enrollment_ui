import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta charSet="UTF-8" />

        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Favicon Icon */}
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>School Enrollments</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
