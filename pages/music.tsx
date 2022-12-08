import React from 'react'
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { makeStyles } from 'tss-react/mui'
import { env } from 'process'
import SpotifyWebApi from 'spotify-web-api-node'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Section } from '@components/shared'
import { AlbumGallery } from '@components/spotify'

// import { SpotifyPlayer } from '@components/spotify'

interface Player {
  item: SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObjectFull
  timestamp: number
  progressMs: number | null
  isActive: boolean
}

export const getStaticProps: GetStaticProps<{
  player: Player | null
  recentlyPlayed: SpotifyApi.AlbumObjectSimplified[]
}> = async () => {
  let spotifyApi = new SpotifyWebApi({
    clientId: env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    refreshToken: env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN,
  })

  await spotifyApi.refreshAccessToken().then(
    data => spotifyApi.setAccessToken(data.body['access_token']),
    err => console.log('Failed to refresh Spotify access token', err),
  )

  let livePlayerPromise = spotifyApi.getMyCurrentPlaybackState()
  let recentlyPlayedPromise = spotifyApi.getMyRecentlyPlayedTracks({
    limit: 50,
  })

  const { body: recentlyPlayed } = await recentlyPlayedPromise

  let albums: Array<SpotifyApi.AlbumObjectSimplified> = []
  recentlyPlayed.items.map(({ track }) => {
    if (!albums.find(element => element.id === track.album.id)) {
      albums.push(track.album)
    }
  })

  const { body: player } = await livePlayerPromise

  return {
    props: {
      player: !player.item
        ? null
        : {
            item: player.item,
            timestamp: player.timestamp,
            progressMs: player.progress_ms,
            isActive: player.is_playing,
          },
      recentlyPlayed: albums,
    },
    revalidate: 60,
  }
}

const Music: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  player,
  recentlyPlayed,
}) => {
  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <Box className={classes.titleContainer}>
        <Typography variant="h1" className={classes.titleText}>
          <span className={classes.colourfulText}>Music</span>
        </Typography>
      </Box>
      <Section
        className={classes.playerText}
        headingTitle="What I'm listening to">
        <AlbumGallery albums={recentlyPlayed} />
      </Section>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '75rem',
    padding: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3), // This needs to be designed better with top-bar
      paddingTop: theme.spacing(2),
    },
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '2.5em',
  },
  titleContainer: {
    marginBottom: theme.spacing(4),
  },
  colourfulText: {
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  playerText: {
    maxWidth: '60rem',
  },
  albumGallery: {
    width: '100%',
  },
  albumCover: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    objectFit: 'cover',
  },
}))

export default Music
