import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { AxiosHttpResponse } from './types'
import { parseParam } from './util'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const instance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
})

instance.interceptors.request.use((config) => {
  // add token

  return config
})

instance.interceptors.response.use(
  (res: AxiosResponse<AxiosHttpResponse>) => {
    return res.data as any as AxiosResponse<AxiosHttpResponse>
  },
  (err) => {
    const response = err.response

    const errCode = response?.status

    switch (errCode) {
      case 400:
        console.log('Bad request')
        break
      case 401:
      case 403:
        console.log('Request error, permission problem')
        break
      case 404:
        console.log('Request error, resource not found')
        break
      case 405:
        console.log('Requested method not allowed')
        break
      case 408:
        console.log('The request timeout')
        break
      case 500:
        console.log('Server side error')
        break
      case 501:
        console.log('Network not implemented')
        break
      case 502:
        console.log('Network error')
        break
      case 503:
        console.log('Service unavailable')
        break
      case 504:
        console.log('Network timeout')
        break
      default:
        console.log('Unknown error', errCode, err)
    }

    throw err
  }
)

const queryMethods = {
  get: <T>(url: string, params: Record<string, any> = {}): Promise<AxiosHttpResponse<T>> => {
    return instance.get(url + parseParam(params))
  },
  post: <T = any>(url: string, data: any): Promise<AxiosHttpResponse<T>> => {
    return instance.post(url, data)
  },
  put: <T = any>(url: string, data: any): Promise<AxiosHttpResponse<T>> => {
    return instance.put(url, data)
  },
  delete: <T = any>(url: string): Promise<AxiosHttpResponse<T>> => {
    return instance.delete(url)
  },
  patch: <T = any>(url: string, params: any): Promise<AxiosHttpResponse<T>> => {
    return instance.patch(url, params)
  },
}
export { instance }
export default queryMethods
