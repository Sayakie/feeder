import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

export type AxiosConfig = Pick<
  AxiosRequestConfig,
  'baseURL' | 'timeout' | 'timeoutErrorMessage'
>

/**
 * Creates an axios instance.
 *
 * @param {AxiosRequestConfig | string} options Helper that instance can conjugate what is default request url.
 * @returns {AxiosInstance}
 */
export const useAxios = (
  options: AxiosRequestConfig | string
): AxiosInstance => {
  if (typeof options === 'string') options = { baseURL: options }
  else if (typeof options !== 'object')
    throw new TypeError('options must be typeof string or object!')

  return axios.create({
    baseURL: options.baseURL,
    timeout: options.timeout || 5000,
    timeoutErrorMessage: options.timeoutErrorMessage || 'Timed out.'
  })
}
