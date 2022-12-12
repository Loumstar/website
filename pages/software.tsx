import React from 'react'
import { NextPage } from 'next'
import { makeStyles } from 'tss-react/mui'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Heading, Section, SummaryCards } from '@components/shared'

const Software: NextPage = () => {
  const { classes } = useStyles()
  return (
    <Box className={classes.container}>
      <Typography variant="h1" className={classes.titleText}>
        <span className={classes.colourfulText}>Software</span>
      </Typography>
      <Heading title="Tech Stack">
        <SummaryCards />
      </Heading>
      <Heading title="Current Projects">
        <>
          <Section title="A-cappelify" />
          <Section title="Spotify Graphed" />
          <Section title="Personal Website" />
        </>
      </Heading>
      <Heading title="Previous Projects">
        <>
          <Section title="Lambda Feedback" />
          <Section title="Monocular self-supervised Depth Estimation for Surgical Scenes" />
          <Section title="Scalable Brand Sentiment Tracking" />
        </>
      </Heading>
      <Heading title="Hackathons">
        <>
          <Section title="IC Hack 2022" />
          <Section title="Google Hashcode 2022" />
        </>
      </Heading>
    </Box>
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

export default Software
