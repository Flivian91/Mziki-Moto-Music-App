import React from 'react'
import PlaylistInfo from './PlaylistInfo'
import PlaylistControls from './PlaylistControls'
import TrackDispay from './TrackDispay'

function PlaylistDisplay() {
  return (
    <div className='overflow-hidden rounded-md'>
      <PlaylistInfo/>
      <PlaylistControls/>
      <TrackDispay/>
    </div>
  )
}

export default PlaylistDisplay
