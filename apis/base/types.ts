import type { AxiosRequestConfig, AxiosError as BaseAxiosError } from "axios"

type BaseFetcherArgs = {
  signal?: AbortSignal
  config?: AxiosRequestConfig
}

export type GetFetcherArgs<TParams = unknown> = BaseFetcherArgs & {
  endpoint: string
  params?: TParams
}

export interface ApiManager<T = unknown> {
  results: T[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}