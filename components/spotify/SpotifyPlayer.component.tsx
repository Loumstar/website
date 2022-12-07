import { Grid, Link, Paper } from '@mui/material'
import { makeStyles } from '@styles'
import Image from 'next/image'
import React from 'react'
import { Stylable } from 'types/react'

interface SpotifyPlayer extends Stylable {
  songName: string
  albumName: string
  artistName: string
  songUrl: string
  albumUrl: string
  artistUrl: string
  progressMs: number
  durationMs: number
  timeStamp: string
  albumImage: {
    url: string
    width: number
    height: number
    placeholderUrl: string
  }
}

export const SpotifyPlayer: React.FC<SpotifyPlayer> = props => {
  const {
    songName,
    albumName,
    artistName,
    songUrl,
    albumUrl,
    artistUrl,
    albumImage,
    className,
  } = props
  const { classes, cx } = useStyles()
  return (
    <Paper className={cx(className, classes.paper)}>
      <Grid container className={classes.grid}>
        <Grid item>
          <Image
            className={classes.albumCover}
            onClick={() => window.open(albumUrl)}
            src={albumImage.url}
            width={albumImage.width}
            height={albumImage.height}
            alt={`"${albumName}" album art.`}
            placeholder="blur"
            blurDataURL={albumImage.placeholderUrl}></Image>
        </Grid>
        <Grid item>
          <Link
            href={songUrl}
            className={classes.songName}
            rel="noopener noreferrer"
            target="_blank">
            {songName}
          </Link>
        </Grid>
        <Grid item>
          <Link
            href={artistUrl}
            className={classes.artistName}
            rel="noopener noreferrer"
            target="_blank">
            {artistName}
          </Link>{' '}
          -{' '}
          <Link
            href={albumUrl}
            className={classes.albumName}
            rel="noopener noreferrer"
            target="_blank">
            {albumName}
          </Link>
        </Grid>
        <Grid item>Progress Bar</Grid>
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles()(theme => ({
  paper: {},
  grid: {},
  albumCover: {},
  songName: {},
  artistName: {},
  albumName: {},
}))
