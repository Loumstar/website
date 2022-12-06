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
  image?: {
    path: string
    width: number
    height: number
    alt: string
    float?: 'left' | 'right'
    isPriority?: boolean
    className?: string
  }
  embedding?: {
    component: JSX.Element
    float?: 'left' | 'right'
    className?: string
  }
}

export const Section: React.FC<SectionProps> = props => {
  const { headingTitle, sectionTitle, text, image, embedding, className } =
    props

  const imageFloat = image?.float || 'right'
  const embeddingFloat = embedding?.float || 'right'

  const { classes, cx } = useStyles(imageFloat, embeddingFloat)()

  const imageComponent = image ? (
    <Image
      className={cx(image.className, classes.image)}
      src={image.path}
      width={image.width}
      height={image.height}
      alt={image.alt}
      priority={image.isPriority}
    />
  ) : undefined

  const embeddingComponent = embedding ? (
    <Box className={cx(embedding.className, classes.embeddingWrapper)}>
      {embedding.component}
    </Box>
  ) : undefined

  return (
    <div className={cx(className, classes.container)}>
      {headingTitle && (
        <Typography className={classes.headingTitle} variant="h2">
          {headingTitle}
        </Typography>
      )}
      {imageFloat === 'left' && imageComponent}
      {embeddingFloat === 'left' && embeddingComponent}
      {sectionTitle && (
        <Typography className={classes.sectionTitle} variant="h3">
          {sectionTitle}
        </Typography>
      )}
      {imageFloat === 'right' && imageComponent}
      {embeddingFloat === 'right' && embeddingComponent}
      <Typography>{text}</Typography>
    </div>
  )
}

const useStyles = (
  imageFloat: 'left' | 'right',
  embeddingFloat: 'left' | 'right',
) =>
  makeStyles()(theme => ({
    image: {
      float: imageFloat,
      margin: theme.spacing(1),
      objectFit: 'cover',
      marginRight: theme.spacing(imageFloat === 'left' ? 2 : 0),
      marginLeft: theme.spacing(imageFloat === 'right' ? 2 : 0),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2, 'auto'),
        display: 'block',
        float: 'none',
        width: '100%',
      },
    },
    container: {
      display: 'inline',
      flexDirection: 'column',
      maxWidth: '75rem',
    },
    headingTitle: {
      margin: theme.spacing(2, 0),
    },
    sectionTitle: {
      margin: theme.spacing(1, 0),
    },
    embeddingWrapper: {
      float: embeddingFloat,
      marginRight: theme.spacing(embeddingFloat === 'left' ? 2 : 0),
      marginLeft: theme.spacing(embeddingFloat === 'right' ? 2 : 0),
    },
  }))
