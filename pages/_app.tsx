import '../styles/globals.css'
import { createEmotionSsrAdvancedApproach } from 'tss-react/next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { MaterialTheme } from '@styles'

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: 'css' })

export { augmentDocumentWithEmotionCache }

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Louis Manestar</title>
        <meta name="description" content="Louis Manestar's personal website" />
      </Head>
      <ThemeProvider theme={MaterialTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
//You can also pass your custom App if you have one.
export default withAppEmotionCache(App)
