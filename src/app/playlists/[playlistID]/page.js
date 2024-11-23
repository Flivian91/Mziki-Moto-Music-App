import React from 'react'

async function page({params}) {
  const {playlistID} = await params
  return (
    <div>
      PlayList ID is: {playlistID}
    </div>
  )
}

export default page
