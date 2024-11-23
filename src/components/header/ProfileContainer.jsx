import React from 'react'
import DownloadButton from './DownloadButton'
import Profile from './Profile'

function ProfileContainer() {
  return (
    <div className='flex items-center gap-4'>
      <DownloadButton/>
      <Profile/>
    </div>
  )
}

export default ProfileContainer
