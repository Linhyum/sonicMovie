'use client'
import MovieItem from '@/components/movie-item'
import { AppContext } from '@/context/app.context'
import React, { useContext } from 'react'

export default function FavouriteMovie() {
   const { favouriteMovie } = useContext(AppContext)
   return (
      <>
         <h1 className='text-xl font-semibold mb-3 uppercase'>Danh sách tất cả phim yêu thích</h1>
         {favouriteMovie.length > 0 ? (
            <div className='grid gap-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:grid-cols-6 sm:gap-4'>
               {favouriteMovie.map((item) => (
                  <MovieItem item={item} key={item._id} />
               ))}
            </div>
         ) : (
            <div>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                  src='https://cdni.iconscout.com/illustration/premium/thumb/no-transaction-7359562-6024630.png'
                  alt='no-favourite'
                  loading='lazy'
                  className='w-80 h-[265px] mt-5 object-cover mx-auto'
               />
               <p className='font-bold text-xl text-center'>Bạn chưa có bộ phim yêu thích nào</p>
            </div>
         )}
      </>
   )
}
