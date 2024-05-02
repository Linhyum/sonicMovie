import MoivePage from '@/modules/MoviePage/MoviePage'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
   title: 'Sonic Việt Nam | Danh sách tất cả phim lẻ',
   description: 'Sonic Việt Nam | Danh sách tất cả phim lẻ'
}
export default function page() {
   return <MoivePage key='singleMoviePage' type='phim-le' name='danh-sach' />
}
