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
  const { classes, cx } = useStyles()

  return (
    <Box className={cx(className, classes.container)}>
      {title && (
        <Typography className={classes.title} variant="h3">
          {title}
        </Typography>
      )}
      {children && <Box>{children}</Box>}
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    margin: theme.spacing(2, 0),
  },
  title: {
    margin: theme.spacing(1, 0),
  },
}))
