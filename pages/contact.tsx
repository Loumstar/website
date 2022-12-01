import React from 'react'
import { NextPage } from 'next'
import { makeStyles } from 'tss-react/mui'
import { Typography } from '@mui/material'

const Contact: NextPage = () => {
  const { classes } = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.titleText}>
        <span className={classes.colourfulText}>Contact</span>
      </Typography>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '70rem',
    padding: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '2.5em',
  },
  colourfulText: {
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}))

export default Contact
