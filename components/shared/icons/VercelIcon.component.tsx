import React from 'react'
import { SvgIcon } from '@mui/material'
import { Stylable } from 'types/react'
import { makeStyles } from '@styles'

export const VercelIcon: React.FC<Stylable> = props => {
  const { className } = props
  const { classes, cx } = useStyles()
  return (
    <SvgIcon viewBox="0 0 32 28" className={cx(className, classes.icon)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24">
        <path d="M24 22.525H0l12-21.05l12 21.05z" />
      </svg>
    </SvgIcon>
  )
}

const useStyles = makeStyles()(theme => ({
  icon: {
    padding: theme.spacing(0.5),
  },
}))
