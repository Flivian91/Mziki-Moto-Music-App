import React from 'react'
import PlaylistButton from '../buttons/PlayListButton'
import GoToArtistButton from '../buttons/GoToArtistButton'
import GoToAlbumButton from '../buttons/GoToAlbumButton'

function ModelTrackItemOptions() {
  return (
    <div className="absolute bottom-8 -right-9 w-40  py-4 px-2 bg-surface shadow-md rounded border z-30 border-primary">
      <div className="flex flex-col gap-2 text-stone-200 transition-all duration-200">
        <PlaylistButton />
        <GoToArtistButton />
        <GoToAlbumButton />
      </div>
    </div>
  )
}

export default ModelTrackItemOptions
