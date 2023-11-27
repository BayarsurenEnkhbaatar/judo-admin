import React from 'react'

const Loading = () => {
  return (
    <div className='h-full w-full'>
      <div className='grid justify-center items-center'>
        <h1 className='items-center mt-20 text-center animate-pulse'>Ачааллаж байна ....</h1>
        <img className='h-60' src='../../gifs/hourglass.gif'/>
      </div>
    </div>
  )
}

export default Loading
