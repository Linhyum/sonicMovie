import SearchMoviePage from '@/modules/SearchMoviePage/SearchMoviePage'
import React, { Suspense } from 'react'

export default function page() {
   return (
      <Suspense>
         <SearchMoviePage />
      </Suspense>
   )
}
