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
   const country: MoviesType = await fetch(`https://phimapi.com/v1/api/quoc-gia/${id}`).then((res) => res.json())
   return {
      title: `Sonic Việt Nam | ${country.data.seoOnPage.titleHead}`,
      description: country.data.seoOnPage.descriptionHead
   }
}

export default function page({ params }: { params: { slug: string } }) {
   return <MoivePage key='countryPage' type={params.slug} name='quoc-gia' />
}
