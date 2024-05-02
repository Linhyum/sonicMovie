import MovieDetail from '@/modules/MovieDetail/MovieDetail'
import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
   return <MovieDetail params={params} />
}
