import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { augmentDocumentWithEmotionCache } from './_app'

class MyDocument extends Document<{
  css: { content: string; renderedClassNames: string[] }
}> {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

//You can also pass your custom document if you have one.
augmentDocumentWithEmotionCache(MyDocument)
export default MyDocument
