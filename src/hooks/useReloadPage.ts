'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useReloadPage() {
   const [currentPage, setCurrentPage] = useState<number>(1)
   // const router = useRouter()
   // const pathname = usePathname()
   // useEffect(() => {
   //    if (currentPage === 1) {
   //       // Lần đầu truy cập, redirect về trang 1
   //       router.push(`${pathname}?page=1`)
   //    }
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [currentPage])
   return { setCurrentPage, currentPage }
}
