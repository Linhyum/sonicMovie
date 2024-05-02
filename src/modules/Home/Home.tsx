'use client'
import { getMovies, getMoviesUpdate } from '@/apis/app.api'
import Loading from '@/components/loading'
import MovieList from '@/components/movie-list'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
export default function Home() {
   const { data: moviesUpdate } = useQuery({
      queryKey: ['moviesUpdate'],
      queryFn: getMoviesUpdate,
      staleTime: 1000 * 60
   })
   const { data: singleMovies } = useQuery({
      queryKey: ['singleMovies'],
      queryFn: () => getMovies('phim-le', 1, 20, 'danh-sach'),
      staleTime: 1000 * 60
   })
   const { data: seriesMovies } = useQuery({
      queryKey: ['seriesMovies'],
      queryFn: () => getMovies('phim-bo', 1, 20, 'danh-sach'),
      staleTime: 1000 * 60
   })
   const { data: cartoons } = useQuery({
      queryKey: ['cartoons'],
      queryFn: () => getMovies('hoat-hinh', 1, 20, 'danh-sach'),
      staleTime: 1000 * 60
   })
   const { data: tvShows } = useQuery({
      queryKey: ['tvShows'],
      queryFn: () => getMovies('tv-shows', 1, 20, 'danh-sach'),
      staleTime: 1000 * 60
   })
   if (!moviesUpdate) return <Loading />
   return (
      <>
         <Carousel
            plugins={[
               Autoplay({
                  delay: 4000
               })
            ]}
         >
            <CarouselContent>
               {moviesUpdate.data.items.map((item) => (
                  <CarouselItem key={item._id}>
                     <div className='relative w-full aspect-[2/1] md:aspect-[3/1]'>
                        <div className='absolute inset-0 z-10 bg-gradient'></div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                           src={item.thumb_url}
                           alt={item.name}
                           loading='lazy'
                           className='w-full h-full object-cover absolute inset-0'
                        />
                        <div className='absolute z-20 left-4 bottom-4 md:left-10 md:bottom-10'>
                           <Link href={`/phim/${item.slug}`}>
                              <h2 className='text-white font-bold text-xl md:text-4xl uppercase'>{item.name}</h2>
                           </Link>
                           <div className='mt-5 flex items-center gap-x-2 md:text-base text-sm'>
                              <Link
                                 href={`/phim/${item.slug}`}
                                 className='flex items-center gap-x-1 bg-secondaryColor px-2 py-1 rounded text-white transition-all hover:bg-secondaryColor/90'
                              >
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='w-6 h-6'
                                 >
                                    <path
                                       fillRule='evenodd'
                                       d='M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z'
                                       clipRule='evenodd'
                                    />
                                 </svg>
                                 Xem ngay
                              </Link>
                              <div className='bg-blue-500 rounded px-2 py-1 text-white'>{item.year}</div>
                           </div>
                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>

         <MovieList movies={singleMovies} title='Phim lẻ' url='/phim-le' />
         <MovieList movies={seriesMovies} title='Phim bộ' url='/phim-bo' />
         <MovieList movies={cartoons} title='Hoạt hình' url='/hoat-hinh' />
         <MovieList movies={tvShows} title='Tv shows' url='/tv-shows' />
      </>
   )
}
