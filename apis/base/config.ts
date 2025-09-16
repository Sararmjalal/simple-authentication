import axios from "axios"
import type { AxiosError, AxiosInstance } from "axios"

const API_CONFIG = {
  timeout: 6000,
  baseURL: process.env.NEXT_PUBLIC_SERVER,
} as const

export const apiClient: AxiosInstance = axios.create(API_CONFIG)

apiClient.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)