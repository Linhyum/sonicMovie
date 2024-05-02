import MovieDetail from '@/modules/MovieDetail/MovieDetail'
import React from 'react'
import type { Metadata } from 'next'
import { MovieDetailType } from '@/apis/types/movieDetail.type'

type Props = {
   params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   // read route params
   const id = params.slug

   // fetch data
   const movieDetail: MovieDetailType = await fetch(`https://phimapi.com/phim/${id}`).then((res) => res.json())
   return {
      title: `Sonic Việt Nam | ${movieDetail.movie.name}`,
      description: movieDetail.movie.content
   }
}

export default function page({ params }: Props) {
   return <MovieDetail params={params} />
}
