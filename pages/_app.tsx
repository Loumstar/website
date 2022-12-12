import '../styles/globals.css'
import { createEmotionSsrAdvancedApproach } from 'tss-react/next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { makeStyles, MaterialTheme } from '@styles'
import { Contact, TopBar } from '@components/shared'
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
        <meta name="description" content="Louis Manestar's website" />
      </Head>
      <ThemeProvider theme={MaterialTheme}>
        <CssBaseline />
        <div className={classes.page}>
          <TopBar
            className={classes.navbar}
            onContactClick={handleContactOpen}
          />
          <Component {...pageProps} />
          <Contact
            isOpen={contactOpen}
            setIsOpen={setContactOpen}
            dialogTitle="Hey!"
            dialogText="Whether you're interested in chatting about a career
              opportunity, a new project, or you've just hacked my website,
              let me know and I will get back to you!"
          />
          <Contact
            isOpen={hackOpen}
            setIsOpen={setHackOpen}
            dialogTitle="Hack my website!"
            dialogText="In this website, there is a puzzle which requires you
              to do some hacking! The hint is to follow the BrewDog. Once you've
              found the secret key, paste it here. The first person to find the
              secret key will get a free pint on me!"
          />
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
