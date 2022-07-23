import { wrapPromise } from './wrapPromise'

// Standby
function fetchData(url: string) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise(promise)
}

export default fetchData
