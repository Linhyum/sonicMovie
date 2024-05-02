'use client'
import { getMovieDetail } from '@/apis/app.api'
import { Item } from '@/apis/types/movies.type'
import Loading from '@/components/loading'
import { toast } from '@/components/ui/use-toast'
import { AppContext } from '@/context/app.context'
import { useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
import React, { useContext, useState } from 'react'

export default function MovieDetail({ params }: { params: { slug: string } }) {
   const [currentEpisode, setCurrentEpisode] = useState<number>(1)
   const { setFavouriteMovie, favouriteMovie } = useContext(AppContext)
   const handleAddFavourite = (id: string, movie: Item) => {
      if (favouriteMovie.some((movie) => movie._id === id)) {
         setFavouriteMovie((prev) => prev.filter((movie) => movie._id !== id))
         toast({
            description: 'Đã xoá khỏi danh sách phim yêu thích'
         })
      } else {
         setFavouriteMovie((prev) => [...prev, movie])
         toast({
            description: 'Đã thêm vào danh sách phim yêu thích'
         })
      }
   }

   const { data: movieDetail } = useQuery({
      queryKey: ['movieDetail', params.slug],
      queryFn: () => getMovieDetail(params.slug)
   })
   const movieInfo = movieDetail?.data?.movie
   const episodes = movieDetail?.data?.episodes[0]?.server_data
   if (!movieInfo || !episodes) return <Loading />
   return (
      <>
         <div className='relative w-full aspect-[2/1] md:aspect-[3/1]'>
            <div className='absolute inset-0 z-10 bg-gradient'></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
               src={movieInfo?.thumb_url}
               alt={movieInfo?.name}
               loading='lazy'
               className='w-full h-full object-cover absolute inset-0'
            />
            <div className='absolute z-20 left-4 bottom-4 md:left-10 md:bottom-10'>
               <h2 className='text-white font-bold text-xl md:text-4xl uppercase'>{movieInfo?.name}</h2>
               <div className='mt-5 flex flex-wrap items-center gap-2 md:text-base text-sm'>
                  <a
                     href='#watchNow'
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
                  </a>
                  <div className='bg-blue-500 rounded px-2 py-1 text-white'>{movieInfo?.quality}</div>
                  <div className='bg-blue-500 rounded px-2 py-1 text-white'>{movieInfo?.lang}</div>
                  <div className='bg-blue-500 rounded px-2 py-1 text-white'>{movieInfo?.year}</div>
                  <button
                     onClick={() => handleAddFavourite(movieInfo._id, movieInfo)}
                     className='flex items-center gap-x-2 font-semibold border-2 border-primaryColor px-2 py-0.5 hover:bg-primaryColor hover:text-black transition-all rounded'
                  >
                     {favouriteMovie.some((movie) => movie._id === movieInfo._id) ? (
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           xmlnsXlink='http://www.w3.org/1999/xlink'
                           aria-hidden='true'
                           role='img'
                           className='iconify iconify--ph'
                           width={20}
                           height={20}
                           viewBox='0 0 256 256'
                        >
                           <path
                              fill='currentColor'
                              d='M239.81 99.5c-5.19 67.42-103.7 121.23-108 123.54a8 8 0 0 1-7.58 0C119.8 220.67 16 164 16 94a62 62 0 0 1 96.47-51.55a4 4 0 0 1 .61 6.17L99.72 62a8 8 0 0 0 0 11.31l32.53 32.53L111 127a8 8 0 1 0 11.31 11.31l26.88-26.87a8 8 0 0 0 0-11.31l-32.49-32.5l17.47-17.47A61.63 61.63 0 0 1 178.41 32c36.32.23 64.18 31.29 61.4 67.5Z'
                           />
                        </svg>
                     ) : (
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                           strokeWidth={1.5}
                           stroke='currentColor'
                           className='w-6 h-6'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                           />
                        </svg>
                     )}
                     {favouriteMovie.some((movie) => movie._id === movieInfo._id) ? 'Bỏ thích' : 'Thích'}
                  </button>
               </div>
            </div>
         </div>
         <div className='mt-5 flex flex-col gap-y-3'>
            <div>
               <span className='text-primaryColor'>Nội dung: </span>
               <p
                  dangerouslySetInnerHTML={{
                     __html: DOMPurify.sanitize(movieInfo.content) //DOMPurify chống tấn công XSS
                  }}
               />
            </div>
            <div>
               <span className='text-primaryColor'>Quốc gia: </span>
               {movieInfo?.country[0].name}
            </div>
            <div>
               <span className='text-primaryColor'>Thời gian: </span>
               {movieInfo?.time}
            </div>
            <div>
               <span className='text-primaryColor'>Đạo diễn: </span>
               {movieInfo?.director}
            </div>
            <div>
               <span className='text-primaryColor'>Diễn viên: </span>
               {movieInfo?.actor.map((item, index) => `${item}${index !== movieInfo?.actor.length - 1 ? ', ' : ''} `)}
            </div>
            <div>
               <span className='text-primaryColor'>Thể loại: </span>
               {movieInfo?.category.map(
                  (item, index) => `${item.name}${index !== movieInfo?.category.length - 1 ? ', ' : ''} `
               )}
            </div>
         </div>
         <div className='mt-5'>
            <div id='watchNow' className='aspect-video max-w-4xl mx-auto border border-primary'>
               {episodes && (
                  <iframe
                     width='768'
                     height='432'
                     src={episodes[currentEpisode - 1].link_embed}
                     title={episodes[currentEpisode - 1].filename}
                     frameBorder='0'
                     allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                     allowFullScreen
                     className='object-fill w-full h-full'
                  ></iframe>
               )}
            </div>
            <div className='flex mt-5 items-center flex-wrap gap-3'>
               {episodes?.map((item, index) => (
                  <button
                     onClick={() => setCurrentEpisode(index + 1)}
                     className={`px-2 py-1 rounded  ${
                        currentEpisode === index + 1
                           ? 'bg-blue-500'
                           : 'bg-primaryColor hover:bg-primaryColor/90 transition-all'
                     }`}
                     key={item.name}
                  >
                     {item.name}
                  </button>
               ))}
            </div>
         </div>
      </>
   )
}
