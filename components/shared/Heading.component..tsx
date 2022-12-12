import React from 'react'
import { makeStyles } from '@styles'
import { Stylable } from 'types/react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

interface HeadingProps extends Stylable {
  title?: string
  children?: JSX.Element
}

export const Heading: React.FC<HeadingProps> = props => {
  const { title, children, className } = props

  const { classes, cx } = useStyles()

  return (
    <Box className={cx(className, classes.container)}>
      {title && (
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
      )}
      {children && <Box className={classes.childrenContainer}>{children}</Box>}
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    margin: theme.spacing(2, 0),
  },
  childrenContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: theme.spacing(2, 0),
  },
  sectionTitle: {
    margin: theme.spacing(1, 0),
  },
}))
