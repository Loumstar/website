import Head from 'next/head'
import { makeStyles } from 'tss-react/mui'

export default function Home() {
  const { classes } = useStyles()
  return (
    <div>
      <Head>
        <title>Louis Manestar</title>
        <meta name="description" content="Louis Manestar's personal website" />
      </Head>

      <h1 className={classes.title}>Homepage</h1>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  title: {
    color: theme.palette.error.main,
  },
}))
