import { Chip, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@styles'
import Image from 'next/image'
import React, { useState } from 'react'
import { Stylable } from 'types/react'
import moment from 'moment'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

interface AlbumGalleryProps extends Stylable {
  albums: Array<{ album: SpotifyApi.AlbumObjectSimplified; playedAt: string }>
  expandable?: boolean
}

export const AlbumGallery: React.FC<AlbumGalleryProps> = props => {
  const { albums, expandable = true, className } = props
  const { classes, cx } = useStyles()

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Box className={cx(className, classes.container)}>
      <Box
        className={cx(
          classes.galleryContainer,
          isExpanded && classes.expanded,
        )}>
        {albums.map(
          (
            { album: { name, external_urls, artists, images }, playedAt },
            index,
          ) =>
            images[0]?.url &&
            index < 21 && (
              <Box className={classes.albumItem} key={name}>
                {external_urls.spotify ? (
                  <>
                    <Box className={classes.albumImagegalleryContainer}>
                      <Link
                        href={external_urls.spotify}
                        aria-label={name}
                        rel="noopener noreferrer"
                        target="_blank">
                        <Image
                          className={classes.albumImage}
                          src={images[0]?.url}
                          height={146}
                          width={146}
                          alt={name}
                          loading="eager"
                        />
                      </Link>
                      <Typography
                        className={cx(classes.albumText, classes.playedAt)}
                        variant="subtitle2">
                        {moment
                          .utc(playedAt)
                          .local()
                          .startOf('seconds')
                          .fromNow()}
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
                    <Box className={classes.albumImagegalleryContainer}>
                      <Image
                        className={classes.albumImage}
                        src={images[0]?.url}
                        height={146}
                        width={146}
                        alt={name}
                        loading="eager"
                      />
                      <Typography
                        className={cx(classes.albumText, classes.playedAt)}
                        variant="subtitle2">
                        {moment
                          .utc(playedAt)
                          .local()
                          .startOf('seconds')
                          .fromNow()}
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
              </Box>
            ),
        )}
      </Box>
      {expandable && (
        <Chip
          variant="outlined"
          label={isExpanded ? 'Collapse' : 'Expand'}
          icon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={() => setIsExpanded(prev => !prev)}
        />
      )}
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  galleryContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    justifyContent: 'space-evenly',
    transition: 'max-height 0.6s ease-in-out',
    maxHeight: theme.spacing(27),
  },
  expanded: {
    maxHeight: theme.spacing(79),
  },
  albumItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: theme.spacing(18),
    margin: theme.spacing(1),
  },
  albumImage: {
    width: '100%',
    height: theme.spacing(18),
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
  albumImagegalleryContainer: {
    position: 'relative',
  },
}))
