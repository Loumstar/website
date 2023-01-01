import { Gallery } from '@components/shared'
import { GalleryCard } from '@components/shared/GalleryCard.component'
import React from 'react'
import { Stylable } from 'types/react'

interface AlbumGalleryProps extends Stylable {
  albums: Array<{ album: SpotifyApi.AlbumObjectSimplified; playedAt: string }>
  expandable?: boolean
}

export const AlbumGallery: React.FC<AlbumGalleryProps> = props => {
  const { albums, expandable, className } = props

  const albumComponents = albums.map(
    ({ album: { name, external_urls, artists, images }, playedAt }) => (
      <GalleryCard
        key={name}
        title={name}
        titleUrl={external_urls.spotify}
        subtitle={artists[0]?.name}
        subtitleUrl={artists[0]?.href}
        image={images[0]?.url}
        timestamp={playedAt}
        subtitlePlaceholder="Unknown Artist"
      />
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
