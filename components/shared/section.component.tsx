import React from 'react'
import { makeStyles } from '@styles'
import { Stylable } from 'types/react'
import { Typography } from '@mui/material'

interface SectionProps extends Stylable {
  title: string
  text: string
}

export const Section: React.FC<SectionProps> = props => {
  const { title, text, className } = props
  const { classes, cx } = useStyles()

  return (
    <div className={cx(className, classes.container)}>
      <Typography className={classes.title} variant="h2">
        {title}
      </Typography>
      <Typography>{text}</Typography>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '60rem',
  },
  title: {
    margin: theme.spacing(2, 0),
  },
}))
