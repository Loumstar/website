import { ChipList, Gallery, GalleryCard } from '@components/shared'
import { Box } from '@mui/system'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

interface ExhibitionsGalleryProps extends Stylable {
  exhibitions: Array<{
    artist: string
    artistUrl: string
    venue: string
    venueUrl: string
    date: string
    image: string
  }>
}

export const ExhibitionsGallery: React.FC<ExhibitionsGalleryProps> = props => {
  const { exhibitions, className } = props
  const { classes, cx } = useStyles()

  const recentExhibitions = exhibitions
    .slice(0, 8)
    .map(({ artist, artistUrl, venue, venueUrl, date, image }) => (
      <GalleryCard
        key={artist}
        title={artist}
        titleUrl={artistUrl}
        subtitle={venue}
        subtitleUrl={venueUrl}
        image={image}
        timestamp={date}
      />
    ))

  return (
    <Box className={cx(className, classes.container)}>
      <Gallery components={recentExhibitions} />
      <ChipList chips={exhibitions.slice(8)} />
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {},
}))
