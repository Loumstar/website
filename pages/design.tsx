import { Heading, Section } from '@components/shared'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { NextPage } from 'next'
import Head from 'next/head'
import { makeStyles } from 'tss-react/mui'

const Design: NextPage = () => {
  const { classes } = useStyles()
  return (
    <>
      <Head>
        <title>Louis Manestar | Design</title>
        <meta
          name="description"
          content="A portfolio of all my design projects"
        />
      </Head>
      <Box className={classes.container}>
        <Typography variant="h1" className={classes.titleText}>
          <span className={classes.colourfulText}>Design</span>
        </Typography>
        <Heading title="Mechanical Engineering">
          <>
            <Section title="Biofuel Engine Control System" />
            <Section title="Miniature Racecar" />
          </>
        </Heading>
        <Heading title="Product Design">
          <>
            <Section title="Geometric Coffee Table" />
            <Section title="Stellated Floor Lamp" />
          </>
        </Heading>
      </Box>
    </>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '75rem',
    padding: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3), // This needs to be designed better with top-bar
      paddingTop: theme.spacing(2),
    },
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '2.5em',
    marginBottom: theme.spacing(4),
  },
  colourfulText: {
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}))

export default Design
