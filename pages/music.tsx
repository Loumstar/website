import { ChipList, Heading, Section } from '@components/shared'
import { AlbumGallery } from '@components/spotify'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { env } from 'process'
import SpotifyWebApi from 'spotify-web-api-node'
import { makeStyles } from 'tss-react/mui'

export const getStaticProps: GetStaticProps<{
  recentlyPlayedAlbums: Array<{
    album: SpotifyApi.AlbumObjectSimplified
    playedAt: string
  }>
}> = async () => {
  let spotifyApi = new SpotifyWebApi({
    clientId: env.SPOTIFY_CLIENT_ID,
    clientSecret: env.SPOTIFY_CLIENT_SECRET,
    refreshToken: env.SPOTIFY_REFRESH_TOKEN,
  })

  await spotifyApi.refreshAccessToken().then(
    data => spotifyApi.setAccessToken(data.body['access_token']),
    err => console.log('Failed to refresh Spotify access token', err),
  )

  let albums: Array<{
    album: SpotifyApi.AlbumObjectSimplified
    playedAt: string
  }> = []
  let { body: recentlyPlayed } = await spotifyApi.getMyRecentlyPlayedTracks({
    limit: 50,
  })

  recentlyPlayed.items.map(({ track, played_at }) => {
    if (!albums.find(element => element.album.id === track.album.id)) {
      albums.push({ album: track.album, playedAt: played_at })
    }
  })

  return {
    props: {
      recentlyPlayedAlbums: albums,
    },
    revalidate: 120,
  }
}

const Music: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  recentlyPlayedAlbums,
}) => {
  const { classes } = useStyles()

  return (
    <>
      <Head>
        <title>Louis Manestar | Music</title>
        <meta name="description" content="A portfolio of my music stuff" />
      </Head>
      <Box className={classes.container}>
        <Typography variant="h1" className={classes.titleText}>
          <span className={classes.colourfulText}>Music</span>
        </Typography>
        <Heading title="Recently Played">
          <AlbumGallery albums={recentlyPlayedAlbums} />
        </Heading>
        <Heading title="Instruments">
          <>
            <Section title="Keyboards" />
            <Section title="DJing" />
          </>
        </Heading>
        <Heading title="Bands">
          <>
            <Section title="St. Spliffstopher's Jazz Band" />
            <Section title="The Elements" />
          </>
        </Heading>
        <Heading title="Gigs I've been to">
          <ChipList
            chips={[
              {
                artist: 'Eloise',
                venue: 'Lafayette',
                date: '20/08/21',
                artistUrl: 'https://eloise-music.com/',
                venueUrl: 'https://www.lafayettelondon.com/',
              },
              {
                artist: 'Lokkhi Terra',
                venue: 'Woolwich Works',
                date: '01/08/21',
                artistUrl: 'http://www.funkiwala.com/LokkhiTerra/',
                venueUrl: 'https://www.woolwich.works/',
              },
            ]}
          />
        </Heading>
      </Box>
    </>
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
