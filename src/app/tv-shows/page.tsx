import MoivePage from '@/modules/MoviePage/MoviePage'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
   title: 'Sonic Việt Nam | Danh sách tất cả tv shows',
   description: 'Sonic Việt Nam | Danh sách tất cả tv shows'
}
export default function page() {
   return <MoivePage key='tvShowsMoviePage' type='tv-shows' name='danh-sach' />
}
