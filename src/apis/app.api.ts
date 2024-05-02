import { CountriesType } from '@/apis/types/countries.type'
import { GenreType } from '@/apis/types/genres.type'
import { MovieDetailType } from '@/apis/types/movieDetail.type'
import { MoviesType } from '@/apis/types/movies.type'
import { MoviesUpdateType } from '@/apis/types/moviesUpdate.type'
import http from '@/utils/http'

export const getGenres = () => http.get<GenreType[]>('/the-loai')
export const getCountries = () => http.get<CountriesType[]>('/quoc-gia')
export const getMoviesUpdate = () => http.get<MoviesUpdateType>('/danh-sach/phim-moi-cap-nhat?page=1')
export const getMovies = (type: string, page: number, limit: number, name: string) =>
   http.get<MoviesType>(`/v1/api/${name}/${type}?page=${page}&limit=${limit}`)
export const getMovieDetail = (slug: string) => http.get<MovieDetailType>(`/phim/${slug}`)
export const getSearchMovies = (keyword: string) => http.get<MoviesType>(`/v1/api/tim-kiem?keyword=${keyword}`)
