'use client'
import MoivePage from '@/modules/MoviePage/MoviePage'
import React from 'react'

export default function CountryPage({ params }: { params: { slug: string } }) {
   return <MoivePage key='countryPage' type={params.slug} name='quoc-gia' />
}
