import http from './index'
import { HttpResponse } from './types'

// example
export const getUserApi = (example: string): Promise<HttpResponse<any>> => {
  return http.get(`/example/${example}`) as any
}

export function queryEthCall() {
  return http.get(`/ethcall`) as any
}

export function queryThirdData() {
  return http.get(`https://run.mocky.io/v3/d6ac91ac-6dab-4ff0-a08e-9348d7deed51`) as any
}
