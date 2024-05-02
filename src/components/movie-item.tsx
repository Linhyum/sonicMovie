import { Item } from '@/apis/types/movies.type'
import Link from 'next/link'
import React from 'react'

export default function MovieItem({ item }: { item: Item }) {
   return (
      <Link href={`/phim/${item.slug}`} className='relative block w-full aspect-[2/3] rounded-sm overflow-hidden group'>
         <div className='absolute inset-0 z-10 bg-gradient'></div>
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
            src={`https://img.phimapi.com/${item.poster_url}`}
            alt={item.name}
            loading='lazy'
            className='w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-all'
         />
         <div className='absolute z-20 bottom-2 w-full text-center'>
            <h3 className='text-white font-semibold'>{item.name}</h3>
         </div>
         <div className='bg-primaryColor text-white px-2 py-1 rounded-sm absolute top-1 right-1 text-sm'>
            {item.quality}
         </div>
         <div className='bg-blue-500 text-white px-2 py-1 rounded-sm absolute top-1 left-1 text-sm'>{item.year}</div>
      </Link>
   )
}
