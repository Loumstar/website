import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@styles'
import Image from 'next/image'
import React from 'react'
import { Stylable } from 'types/react'

interface AlbumGalleryProps extends Stylable {
  albums: Array<SpotifyApi.AlbumObjectSimplified>
}

export const AlbumGallery: React.FC<AlbumGalleryProps> = props => {
  const { albums, className } = props
  const { classes, cx } = useStyles()

  return (
    <Box className={cx(className, classes.container)}>
      {albums.map(
        ({ name, external_urls, artists, images }) =>
          images[0]?.url && (
            <Box className={classes.albumItem} key={name}>
              {external_urls.spotify ? (
                <>
                  <Link
                    href={external_urls.spotify}
                    aria-label={name}
                    rel="noopener noreferrer"
                    target="_blank">
                    <Image
                      className={classes.albumImage}
                      src={images[0]?.url}
                      height={160}
                      width={160}
                      alt={name}
                      loading="eager"
                    />
                  </Link>
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
                  <Image
                    className={classes.albumImage}
                    src={images[0]?.url}
                    height={160}
                    width={160}
                    alt={name}
                    loading="eager"
                  />
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
                <></>
              )}
            </Box>
          ),
      )}
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  albumItem: {
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(20),
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '45%',
      margin: '2.5%',
    },
  },
  albumImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
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
}))
