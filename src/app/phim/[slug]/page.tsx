import MovieDetail from '@/modules/MovieDetail/MovieDetail'
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

// export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
//    // read route params
//    const id = params.slug

//    // fetch data
//    const product = await fetch(`https://.../${id}`).then((res) => res.json())

//    // optionally access and extend (rather than replace) parent metadata
//    const previousImages = (await parent).openGraph?.images || []

//    return {
//       title: product.title,
//       openGraph: {
//          images: ['/some-specific-page-image.jpg', ...previousImages]
//       }
//    }
// }

export default function page({ params }: { params: { slug: string } }) {
   return <MovieDetail params={params} />
}
