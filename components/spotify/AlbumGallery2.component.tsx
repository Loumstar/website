import { Gallery } from '@components/shared'
import { Link, Skeleton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@styles'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { Stylable } from 'types/react'

interface AlbumGalleryProps extends Stylable {
  albums: Array<{ album: SpotifyApi.AlbumObjectSimplified; playedAt: string }>
  expandable?: boolean
}

export const AlbumGallery: React.FC<AlbumGalleryProps> = props => {
  const { albums, expandable, className } = props
  const { classes, cx } = useStyles()

  const albumComponents = albums.map(
    ({ album: { name, external_urls, artists, images }, playedAt }, index) => (
      <>
        {external_urls.spotify ? (
          <>
            <Box className={classes.albumImageGalleryContainer}>
              <Link
                href={external_urls.spotify}
                aria-label={name}
                rel="noopener noreferrer"
                target="_blank">
                {images[0]?.url ? (
                  <Image
                    className={classes.albumImage}
                    src={images[0]?.url}
                    height={146}
                    width={146}
                    alt={name}
                    loading="eager"
                  />
                ) : (
                  <Skeleton
                    className={classes.albumImage}
                    variant="rectangular"
                    animation={false}
                    width={146}
                    height={146}
                  />
                )}
              </Link>
              <Typography
                className={cx(classes.albumText, classes.playedAt)}
                variant="subtitle2">
                {moment.utc(playedAt).local().startOf('seconds').fromNow()}
              </Typography>
            </Box>
            <Link
              href={external_urls.spotify}
              aria-label={name}
              color="inherit"
              underline="hover"
              rel="noopener noreferrer"
              target="_blank">
              <Typography
                className={cx(classes.albumText, classes.albumName)}
                variant="subtitle2">
                {name}
              </Typography>
            </Link>
          </>
        ) : (
          <>
            <Box className={classes.albumImageGalleryContainer}>
              {images[0]?.url ? (
                <Image
                  className={classes.albumImage}
                  src={images[0]?.url}
                  height={146}
                  width={146}
                  alt={name}
                  loading="eager"
                />
              ) : (
                <Skeleton
                  className={classes.albumImage}
                  variant="rectangular"
                  animation={false}
                  width={146}
                  height={146}
                />
              )}
              <Typography
                className={cx(classes.albumText, classes.playedAt)}
                variant="subtitle2">
                {moment.utc(playedAt).local().startOf('seconds').fromNow()}
              </Typography>
            </Box>
            <Typography
              className={cx(classes.albumText, classes.albumName)}
              variant="subtitle2">
              {name}
            </Typography>
          </>
        )}
        {artists[0]?.external_urls.spotify ? (
          <Link
            href={artists[0].external_urls.spotify}
            aria-label={artists[0].name}
            color="inherit"
            underline="hover"
            rel="noopener noreferrer"
            target="_blank">
            <Typography
              className={cx(classes.albumText, classes.albumArtist)}
              variant="subtitle2">
              {artists[0].name}
            </Typography>
          </Link>
        ) : artists[0]?.name ? (
          <Typography
            className={cx(classes.albumText, classes.albumArtist)}
            variant="subtitle2">
            {artists[0].name}
          </Typography>
        ) : (
          <Typography
            className={cx(classes.albumText, classes.albumArtist)}
            variant="subtitle2">
            {'Unknown Artist'}
          </Typography>
        )}
      </>
    ),
  )

  return (
    <Gallery
      className={className}
      expandable={expandable}
      components={albumComponents}
    />
  )
}

const useStyles = makeStyles()(theme => ({
  albumImage: {
    width: '100%',
    height: theme.spacing(18),
    objectFit: 'cover',
    marginBottom: 'inherit',
  },
  albumText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  albumName: {
    fontWeight: 400,
  },
  albumArtist: {
    fontWeight: 700,
  },
  playedAt: {
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
  albumImageGalleryContainer: {
    position: 'relative',
    marginBottom: 'auto',
  },
}))
