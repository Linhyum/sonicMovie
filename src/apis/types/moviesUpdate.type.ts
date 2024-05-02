export interface MoviesUpdateType {
   status: boolean
   items: Item[]
   pagination: Pagination
}

export interface Item {
   modified: Modified
   _id: string
   name: string
   slug: string
   origin_name: string
   poster_url: string
   thumb_url: string
   year: number
}

export interface Modified {
   time: string
}

export interface Pagination {
   totalItems: number
   totalItemsPerPage: number
   currentPage: number
   totalPages: number
}
