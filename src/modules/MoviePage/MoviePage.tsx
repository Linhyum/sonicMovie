'use client'
import { getMovies } from '@/apis/app.api'
import Loading from '@/components/loading'
import MovieItem from '@/components/movie-item'
import Paginate from '@/components/paginate'
import useReloadPage from '@/hooks/useReloadPage'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function MoivePage({ key, type, name }: { key: string; type: string; name: string }) {
   const { currentPage, setCurrentPage } = useReloadPage()
   const { data: moviePage } = useQuery({
      queryKey: [key, currentPage, type, name],
      queryFn: () => getMovies(type, currentPage, 30, name)
   })
   const movieList = moviePage?.data.data.items
   const title = moviePage?.data.data.titlePage
   const totalPages = moviePage?.data.data.params.pagination.totalPages
   const handlePageClick = (e: { selected: number }) => {
      if (totalPages) {
         setCurrentPage(e.selected + 1)
      }
   }
   if (!movieList || !totalPages || !title) return <Loading />
   return (
      <>
         <div className='flex items-center justify-between mb-3'>
            <h1 className='uppercase font-semibold text-base sm:text-xl'>
               Danh sách tất cả{' '}
               {['phim lẻ', 'phim bộ', 'phim hoạt hình', 'tv shows'].includes(title.toLowerCase()) ? '' : 'phim'}
               {title}
            </h1>
            <span>Trang {currentPage}</span>
         </div>
         <div className='grid gap-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:grid-cols-6 sm:gap-4'>
            {movieList.map((item) => (
               <MovieItem key={item._id} item={item} />
            ))}
         </div>
         <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            handlePageClick={handlePageClick}
         />
      </>
   )
}
