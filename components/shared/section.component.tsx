import React from 'react'
import { makeStyles } from '@styles'
import { Stylable } from 'types/react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { Box } from '@mui/system'

interface SectionProps extends Stylable {
  headingTitle?: string
  sectionTitle?: string
  text: string
  imagePath?: string
  imageWidth?: number
  imageHeight?: number
  imageAlt?: string
  float?: 'left' | 'right'
}

export const Section: React.FC<SectionProps> = props => {
  const {
    headingTitle,
    sectionTitle,
    text,
    imagePath,
    imageWidth,
    imageHeight,
    imageAlt,
    float = 'right',
    className,
  } = props

  const { classes, cx } = useStyles(float)()

  return (
    <div className={cx(className, classes.container)}>
      {headingTitle && (
        <Typography className={classes.headingTitle} variant="h2">
          {headingTitle}
        </Typography>
      )}
      {sectionTitle && (
        <Typography className={classes.sectionTitle} variant="h3">
          {sectionTitle}
        </Typography>
      )}
      <Box className={classes.textContainer}>
        {imagePath && (
          <Image
            className={classes.image}
            src={imagePath}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt || ''}
          />
        )}
        <Typography>{text}</Typography>
      </Box>
    </div>
  )
}

const useStyles = (float: 'left' | 'right') =>
  makeStyles()(theme => ({
    image: {
      float: float,
      margin: 0,
      marginRight: theme.spacing(float === 'left' ? 2 : 0),
      marginLeft: theme.spacing(float === 'right' ? 2 : 0),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2, 'auto'),
        display: 'block',
        float: 'none',
      },
    },
    textContainer: {
      display: 'inline',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '75rem',
    },
    headingTitle: {
      margin: theme.spacing(2, 0),
    },
    sectionTitle: {
      margin: theme.spacing(1, 0),
    },
  }))
