import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full object-cover'>
        <video className='rounded-4xl ' src="/showreel2cut.mp4" autoPlay muted loop></video>
    </div>
  )
}

export default Video