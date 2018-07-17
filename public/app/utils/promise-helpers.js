export const handleStatus = res => res.ok
  ? res.json()
  : Promise.reject(res.statusText)

export const log = param => {
  console.log(param)
  return param
}

export const timeoutPromise = (time, promise) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('tempo limite atingido ' + time)), time)
  })
  return Promise.race([timeout, promise])
}

export const delay = miliseconds => data => new Promise((resolve, reject) => {
  setTimeout(() => resolve(data), miliseconds)
})

export const retry = (retries, milliseconds, fn) => fn().catch(err => {
  console.log(retries)
  return delay(milliseconds)().then(() => retries > 1
    ? retry(--retries, milliseconds, fn)
    : Promise.reject(err))
})
