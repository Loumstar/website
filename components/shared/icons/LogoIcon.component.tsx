import React from 'react'
import { SvgIcon } from '@mui/material'
import { Stylable } from 'types/react'
import { makeStyles } from '@styles'

interface LogoProps extends Stylable {
  colourful: boolean
}

export const Logo: React.FC<LogoProps> = props => {
  const { colourful, className } = props
  const { classes, cx } = useStyles()

  return (
    <SvgIcon
      fontSize="inherit"
      viewBox="0 0 34 34"
      className={cx(className, classes.icon)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 340 340">
        <path
          className={cx(
            className,
            classes.shape,
            classes.top,
            colourful && classes.showFill,
          )}
          d="M60,10L10,90h280L240,10h-180Z"
        />
        <path
          className={cx(
            className,
            classes.shape,
            classes.frontTriangle,
            colourful && classes.showFill,
          )}
          d="M60,10l90,320L240,10h-180Z"
        />
        <path
          className={cx(
            className,
            classes.shape,
            classes.rightRearSupport,
            colourful && classes.showFill,
          )}
          d="M250,240l-48.46782-93L150,180l100,60Z"
        />
        <path
          className={cx(
            className,
            classes.shape,
            classes.leftRearSupport,
            colourful && classes.showFill,
          )}
          d="M50,240l48.479048-93L150,180L50,240Z"
        />
        <path
          className={cx(
            className,
            classes.shape,
            classes.rearTriangle,
            colourful && classes.showFill,
          )}
          d="M10,90l140,90L290,90h-280Z"
        />
        <path
          className={cx(
            className,
            classes.shape,
            classes.base,
            colourful && classes.showFill,
          )}
          d="M50,240l100,90l100-90-100-60L50,240Z"
        />
        <path
          className={cx(
            className,
            classes.shape,
            classes.rightFrontSupport,
            colourful && classes.showFill,
          )}
          d="M150,330l100-90-48.46782-93L150,330Z"
        />
        <path
          className={cx(
            className,
            classes.shape,
            classes.leftFrontSupport,
            colourful && classes.showFill,
          )}
          d="M150,330L50,240l48.479048-93L150,330Z"
        />
        <path
          className={cx(
            className,
            classes.outline,
            colourful && classes.hideOutline,
          )}
          d="M60,10L10,90h280L240,10h-180Z"
        />
        <path
          className={cx(
            className,
            classes.outline,
            colourful && classes.hideOutline,
          )}
          d="M60,10l90,320L240,10h-180Z"
        />
        <path
          className={cx(
            className,
            classes.outline,
            colourful && classes.hideOutline,
          )}
          d="M250,240l-48.46782-93L150,180l100,60Z"
        />
        <path
          className={cx(
            className,
            classes.outline,
            colourful && classes.hideOutline,
          )}
          d="M50,240l48.479048-93L150,180L50,240Z"
        />
        <path
          className={cx(
            className,
            classes.outline,
            colourful && classes.hideOutline,
          )}
          d="M10,90l140,90L290,90h-280Z"
        />
        <path
          className={cx(className, classes.outline, colourful && classes.base)}
          d="M50,240l100,90l100-90-100-60L50,240Z"
        />
        <path
          className={cx(
            className,
            classes.outline,
            colourful && classes.hideOutline,
          )}
          d="M150,330l100-90-48.46782-93L150,330Z"
        />
        <path
          className={cx(
            className,
            classes.outline,
            colourful && classes.hideOutline,
          )}
          d="M150,330L50,240l48.479048-93L150,330Z"
        />
      </svg>
    </SvgIcon>
  )
}

const useStyles = makeStyles()(theme => ({
  icon: {
    padding: theme.spacing(0.5),
  },
  shape: {
    opacity: 0,
    stroke: 'none',
    transition: 'fill 0.2s, opacity 0.2s linear 0s',
    '&:hover:not(:active)': {
      fill: 'white',
    },
  },
  outline: {
    fill: 'none',
    strokeWidth: '10px',
    stroke: theme.palette.primary.main,
    strokeLinejoin: 'round',
    transition: 'stroke-width 0.2s linear 0s',
  },
  hideOutline: {
    strokeWidth: '1px',
    stroke: 'black',
    strokeLinejoin: 'round',
  },
  showFill: {
    opacity: '50%',
  },
  top: {
    fill: theme.palette.primary.main,
  },
  frontTriangle: {
    fill: theme.palette.secondary.main,
  },
  rearTriangle: {
    fill: theme.palette.secondary.dark,
  },
  base: {
    fill: 'none',
    strokeWidth: '1px',
    stroke: 'black',
  },
  leftFrontSupport: {
    fill: theme.palette.grey[500],
  },
  leftRearSupport: {
    fill: theme.palette.grey[700],
  },
  rightFrontSupport: {
    fill: theme.palette.grey[500],
  },
  rightRearSupport: {
    fill: theme.palette.grey[700],
  },
}))
