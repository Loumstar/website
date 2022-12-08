import React from 'react'
import { makeStyles } from '@styles'
import { Stylable } from 'types/react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

interface SectionProps extends Stylable {
  title?: string
  children?: JSX.Element
}

export const Section: React.FC<SectionProps> = props => {
  const { title, children, className } = props
  const { classes } = useStyles()

  return (
    <Box className={className}>
      {title && (
        <Typography className={classes.title} variant="h3">
          {title}
        </Typography>
      )}
      {children && <Box className={classes.childrenContainer}>{children}</Box>}
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  childrenContainer: {},
  title: {
    margin: theme.spacing(1, 0),
  },
}))
