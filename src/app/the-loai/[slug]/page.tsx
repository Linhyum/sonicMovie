import GenrePage from '@/modules/GenrePage/GenrePage'
import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
   return <GenrePage params={params} />
}
