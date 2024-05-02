import CountryPage from '@/modules/CountryPage/CountryPage'
import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
   return <CountryPage params={params} />
}
