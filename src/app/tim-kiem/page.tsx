import { MoviesType } from '@/apis/types/movies.type'
import SearchMoviePage from '@/modules/SearchMoviePage/SearchMoviePage'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
type Props = {
   searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
   const product: MoviesType = await fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${searchParams}`).then((res) =>
      res.json()
   )
   return {
      title: product.data.seoOnPage.titleHead,
      description: product.data.seoOnPage.descriptionHead
   }
}

export default function page() {
   return (
      <Suspense>
         <SearchMoviePage />
      </Suspense>
   )
}
