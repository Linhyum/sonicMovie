'use client'
import { Item } from '@/apis/types/movies.type'
import useLocalStorage from '@/hooks/useLocalStorage'
import React, { createContext, useState } from 'react'

interface AppContextInterface {
   favouriteMovie: Item[]
   setFavouriteMovie: React.Dispatch<React.SetStateAction<Item[]>>
}

const initialAppContext: AppContextInterface = {
   favouriteMovie: [],
   setFavouriteMovie: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

//khi không truyền value vào AppProvider thì cái initialAppContext của AppContext sẽ được sử dụng
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const [favouriteMovie, setFavouriteMovie] = useLocalStorage<Item[]>('favouriteMovie', [])
   return <AppContext.Provider value={{ favouriteMovie, setFavouriteMovie }}>{children}</AppContext.Provider>
}
