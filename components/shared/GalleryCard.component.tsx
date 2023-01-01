import { Link, Skeleton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@styles'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { Stylable } from 'types/react'

interface GalleryCardProps extends Stylable {
  title: string
  titleUrl?: string
  subtitle?: string
  image?: string
  subtitleUrl?: string
  timestamp?: string
  subtitlePlaceholder?: string
}

export const GalleryCard: React.FC<GalleryCardProps> = props => {
  const {
    title,
    subtitle,
    image,
    titleUrl,
    subtitleUrl,
    timestamp,
    subtitlePlaceholder = 'Unknown',
  } = props
  const { classes, cx } = useStyles()

  return (
    <>
      {titleUrl ? (
        <>
          <Box className={classes.imageContainer}>
            <Link
              href={titleUrl}
              aria-label={title}
              rel="noopener noreferrer"
              target="_blank">
              {image ? (
                <Image
                  className={classes.image}
                  src={image}
                  height={146}
                  width={146}
                  alt={title}
                  loading="eager"
                />
              ) : (
                <Skeleton
                  className={classes.image}
                  variant="rectangular"
                  animation={false}
                  width={146}
                  height={146}
                />
              )}
            </Link>
            {timestamp && (
              <Typography
                className={cx(classes.text, classes.timestamp)}
                variant="subtitle2">
                {moment.utc(timestamp).local().startOf('seconds').fromNow()}
              </Typography>
            )}
          </Box>
          <Link
            href={titleUrl}
            aria-label={title}
            color="inherit"
            underline="hover"
            rel="noopener noreferrer"
            target="_blank">
            <Typography
              className={cx(classes.text, classes.title)}
              variant="subtitle2">
              {title}
            </Typography>
          </Link>
        </>
      ) : (
        <>
          <Box className={classes.imageContainer}>
            {image ? (
              <Image
                className={classes.image}
                src={image}
                height={146}
                width={146}
                alt={title}
                loading="eager"
              />
            ) : (
              <Skeleton
                className={classes.image}
                variant="rectangular"
                animation={false}
                width={146}
                height={146}
              />
            )}
            {timestamp && (
              <Typography
                className={cx(classes.text, classes.timestamp)}
                variant="subtitle2">
                {moment.utc(timestamp).local().startOf('seconds').fromNow()}
              </Typography>
            )}
          </Box>
          <Typography
            className={cx(classes.text, classes.title)}
            variant="subtitle2">
            {title}
          </Typography>
        </>
      )}
      {subtitleUrl ? (
        <Link
          href={subtitleUrl}
          aria-label={subtitle}
          color="inherit"
          underline="hover"
          rel="noopener noreferrer"
          target="_blank">
          <Typography
            className={cx(classes.text, classes.subtitle)}
            variant="subtitle2">
            {subtitle}
          </Typography>
        </Link>
      ) : subtitle ? (
        <Typography
          className={cx(classes.text, classes.subtitle)}
          variant="subtitle2">
          {subtitle}
        </Typography>
      ) : (
        <Typography
          className={cx(classes.text, classes.subtitle)}
          variant="subtitle2">
          {subtitlePlaceholder}
        </Typography>
      )}
    </>
  )
}

const useStyles = makeStyles()(theme => ({
  image: {
    width: '100%',
    height: theme.spacing(18),
    objectFit: 'cover',
    marginBottom: 'inherit',
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  title: {
    fontWeight: 400,
  },
  subtitle: {
    fontWeight: 700,
  },
  timestamp: {
    fontSize: 9,
    fontWeight: 500,
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    padding: theme.spacing(0.25, 0.5),
    borderRadius: theme.spacing(0.5),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(4px)',
    cursor: 'pointer',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 'auto',
  },
}))
