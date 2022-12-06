import React from 'react'
import { NextPage } from 'next'
import { makeStyles } from 'tss-react/mui'
import { Typography } from '@mui/material'
import { Section } from '@components/shared'
import { loremIpsum } from 'react-lorem-ipsum'
import { Box } from '@mui/system'

const Music: NextPage = () => {
  const { classes } = useStyles()
  return (
    <div className={classes.container}>
      <Box className={classes.titleContainer}>
        <Typography variant="h1" className={classes.titleText}>
          <span className={classes.colourfulText}>Music</span>
        </Typography>
      </Box>
      <Section
        className={classes.playerText}
        headingTitle="What I'm listening to."
        text={`${loremIpsum()}`}
      />
      <Section
        className={classes.playerText}
        headingTitle="Listening History."
        text={`${loremIpsum()}`}
      />
    </div>
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
  },
  titleContainer: {
    marginBottom: theme.spacing(4),
  },
  colourfulText: {
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  playerText: {
    maxWidth: '60rem',
  },
}))

export default Music
