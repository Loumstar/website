import React from 'react'
import { Typography } from '@mui/material'
import { Stylable } from 'types/react'
import { makeStyles } from 'tss-react/mui'
import { TypeAnimation } from 'react-type-animation'

interface TitleProps extends Stylable {
  staticText: string
  animatedText: string
  animatedOptions: Array<string | number>
}

export const Title: React.FC<TitleProps> = props => {
  const { staticText, animatedText, animatedOptions, className } = props
  const { classes, cx } = useStyles()

  return (
    <div className={className}>
      <Typography variant="h1" className={cx(classes.text, classes.static)}>
        {staticText}
      </Typography>
      <div className={cx(classes.text, classes.animation)}>
        <span className={classes.preAnimationText}>{animatedText}</span>
        <TypeAnimation
          sequence={animatedOptions}
          speed={20}
          deletionSpeed={60}
          cursor={true}
          repeat={Infinity}
          wrapper="span"
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  animation: {},
  preAnimationText: {},
  static: {},
  text: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '2.5em',
  },
}))
