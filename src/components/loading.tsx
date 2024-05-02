import React from 'react'

export default function Loading() {
   return (
      <div className='fixed inset-0 z-[9999999999] flex items-center justify-center bg-black/60'>
         <div className='loading-wave'>
            <div className='loading-bar' />
            <div className='loading-bar' />
            <div className='loading-bar' />
            <div className='loading-bar' />
         </div>
      </div>
   )
}
