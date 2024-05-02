import { MoviesType } from '@/apis/types/movies.type'
import MoivePage from '@/modules/MoviePage/MoviePage'
import { Metadata } from 'next'
import React from 'react'
type Props = {
   params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   // read route params
   const id = params.slug

   // fetch data
   const genre: MoviesType = await fetch(`https://phimapi.com/v1/api/the-loai/${id}`).then((res) => res.json())
   return {
      title: `Sonic Việt Nam | ${genre.data.seoOnPage.titleHead}`,
      description: genre.data.seoOnPage.descriptionHead
   }
}

export default function page({ params }: { params: { slug: string } }) {
   return <MoivePage key='genrePage' type={params.slug} name='the-loai' />
}
