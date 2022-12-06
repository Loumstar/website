import '../styles/globals.css'
import { createEmotionSsrAdvancedApproach } from 'tss-react/next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { makeStyles, MaterialTheme } from '@styles'
import { Contact, TopBar, Hack } from '@components/shared'
import { Footer } from '@components/shared'
import { useState } from 'react'

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: 'css' })

export { augmentDocumentWithEmotionCache }

const App = ({ Component, pageProps }: AppProps) => {
  const [contactOpen, setContactOpen] = useState(false)
  const [hackOpen, setHackOpen] = useState(false)

  const { classes } = useStyles()

  const handleContactOpen = () => setContactOpen(true)
  const handleHackOpen = () => setHackOpen(true)

  return (
    <>
      <Head>
        <title>Louis Manestar</title>
        <meta name="description" content="Louis Manestar's personal website" />
      </Head>
      <ThemeProvider theme={MaterialTheme}>
        <CssBaseline />
        <div className={classes.page}>
          <TopBar
            className={classes.navbar}
            onContactClick={handleContactOpen}
          />
          <Component {...pageProps} />
          <Contact isOpen={contactOpen} setIsOpen={setContactOpen} />
          <Hack isOpen={hackOpen} setIsOpen={setHackOpen} />
          <Footer
            onContactClick={handleContactOpen}
            onHackClick={handleHackOpen}
          />
        </div>
      </ThemeProvider>
    </>
  )
}

const useStyles = makeStyles()(theme => ({
  page: {
    height: '100%',
  },
  navbar: {
    backgroundColor: 'transparent',
  },
}))

//You can also pass your custom App if you have one.
export default withAppEmotionCache(App)
