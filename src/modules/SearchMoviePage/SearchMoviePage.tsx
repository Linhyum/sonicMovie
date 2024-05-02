'use client'
import { getSearchMovies } from '@/apis/app.api'
import Loading from '@/components/loading'
import MovieItem from '@/components/movie-item'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function SearchMoviePage() {
   const searchParams = useSearchParams()
   const { data: searchMoviePage } = useQuery({
      queryKey: ['searchMoviePage', searchParams.get('keyword')],
      queryFn: () => getSearchMovies(searchParams.get('keyword') as string),
      enabled: Boolean(searchParams.get('keyword'))
   })
   const searchMovieList = searchMoviePage?.data.data.items
   if (!searchMovieList) return <Loading />
   return (
      <>
         <h1 className='text-xl font-semibold mb-3'>{searchMoviePage.data.data.titlePage}</h1>
         <div className='grid grid-cols-6 gap-4'>
            {searchMovieList.map((item) => (
               <MovieItem item={item} key={item._id} />
            ))}
         </div>
      </>
   )
}
