import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#141924] z-50 flex items-center justify-center'>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </div>
  )
}

export default Loading