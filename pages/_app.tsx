import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { MaterialTheme } from '@styles'
import { createEmotionSsrAdvancedApproach } from 'tss-react/next'

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: 'css' })

export { augmentDocumentWithEmotionCache }

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={MaterialTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
//You can also pass your custom App if you have one.
export default withAppEmotionCache(App)
