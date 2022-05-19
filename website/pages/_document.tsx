// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bebas Neue&display=optional"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}