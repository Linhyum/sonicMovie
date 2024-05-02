'use client'
import MoivePage from '@/modules/MoviePage/MoviePage'
import React from 'react'

export default function GenrePage({ params }: { params: { slug: string } }) {
   return <MoivePage key='genrePage' type={params.slug} name='the-loai' />
}
