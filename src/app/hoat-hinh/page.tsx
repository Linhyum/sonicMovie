import MoivePage from '@/modules/MoviePage/MoviePage'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
   title: 'Sonic Việt Nam | Danh sách tất cả phim hoạt hình',
   description: 'Sonic Việt Nam | Danh sách tất cả phim hoạt hình'
}
export default function page() {
   return <MoivePage key='cartoonMoviePage' type='hoat-hinh' name='danh-sach' />
}
