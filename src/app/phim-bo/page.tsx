import MoivePage from '@/modules/MoviePage/MoviePage'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
   title: 'Sonic Việt Nam | Danh sách tất cả phim bộ',
   description: 'Sonic Việt Nam | Danh sách tất cả phim bộ'
}
export default function page() {
   return <MoivePage key='seriesMoviePage' type='phim-bo' name='danh-sach' />
}
