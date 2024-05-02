import Favourite from '@/modules/FavouriteMovie/FavouriteMovie'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
   title: 'Sonic Việt Nam | Danh sách tất cả phim yêu thích',
   description: 'Sonic Việt Nam | Danh sách tất cả phim yêu thích'
}
export default function page() {
   return <Favourite />
}
