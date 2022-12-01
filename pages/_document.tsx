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
          <link rel="icon" href="/tablefaviconv2.ico" />
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
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
