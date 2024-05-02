import axios, { AxiosError, AxiosInstance } from 'axios'

class Http {
   instance: AxiosInstance
   constructor() {
      this.instance = axios.create({
         baseURL: 'https://phimapi.com',
         timeout: 10_000,
         headers: {
            'Content-Type': 'application/json'
         }
      })

      //trước khi server nhận được request từ client gửi lên
      this.instance.interceptors.request.use(
         (config) => config,
         (error) => Promise.reject(error)
      )

      //trước khi nhận response từ server trả về client
      this.instance.interceptors.response.use(
         (response) => {
            return response
         },
         (error: AxiosError) => {
            return Promise.reject(error)
         }
      )
   }
}
const http = new Http().instance
export default http
