import { Chip } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@styles'
import Link from 'next/link'
import React from 'react'
import { Stylable } from 'types/react'

interface ChipListProps extends Stylable {
  chips: Array<{
    artist: string
    venue: string
    artistUrl?: string
    venueUrl?: string
  }>
}

export const ChipList: React.FC<ChipListProps> = props => {
  const { chips, className } = props
  const { classes, cx } = useStyles()

  return (
    <Box className={cx(className, classes.container)}>
      {chips.map(({ artist, venue, artistUrl, venueUrl }) => (
        <Chip
          key={`${artist}-${venue}`}
          className={classes.chip}
          variant="outlined"
          size="small"
          label={
            <>
              {artistUrl ? (
                <Link href={artistUrl} className={classes.artist}>
                  {artist}
                </Link>
              ) : (
                <span className={classes.artist}>{artist}</span>
              )}
              {' @ '}
              {venueUrl ? (
                <Link href={venueUrl} className={classes.venue}>
                  {venue}
                </Link>
              ) : (
                <span className={classes.venue}>{venue}</span>
              )}
            </>
          }></Chip>
      ))}
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {},
  chip: {
    margin: theme.spacing(0.5),
  },
  artist: {
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  venue: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))
