import { MoviesType } from '@/apis/types/movies.type'
import MovieItem from '@/components/movie-item'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { AxiosResponse } from 'axios'
import Link from 'next/link'
import React from 'react'

export default function MovieList({
   movies,
   title,
   url
}: {
   movies: AxiosResponse<MoviesType, any> | undefined
   title: string
   url: string
}) {
   return (
      <div className='mt-8'>
         <div className='flex items-center justify-between mb-2'>
            <h2 className='font-semibold uppercase'>{title}</h2>
            <Link href={url} className='flex items-center gap-x-1 hover:text-primaryColor transition-all font-medium'>
               Xem tất cả
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
               >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
               </svg>
            </Link>
         </div>
         <Carousel>
            <CarouselContent>
               {movies?.data.data.items.map((item) => (
                  <CarouselItem
                     className='basis-1/2 pl-3 sm:pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6'
                     key={item._id}
                  >
                     <MovieItem item={item} />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </div>
   )
}
