export interface AxiosHttpResponse<T = any> {
  data: T
  msg: string | null
  statusCode: number
  success: boolean
}
export interface HttpResponse<T> {
  code: number
  data: T
  msg: string
}
