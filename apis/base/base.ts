import { isAxiosError } from "axios"
import { apiClient } from "."
import type { ApiManager, GetFetcherArgs } from "./types"

export const getFetcher = async <TResponse = unknown, TParams = unknown>
  ({ endpoint, params, signal, config }: GetFetcherArgs<TParams>): Promise<ApiManager<TResponse> | undefined> => {
  try {
    const response = await apiClient.get<ApiManager<TResponse>>(endpoint, {
      params,
      signal,
      ...config,
    })
    if (response.data.results) return response.data
  } catch (error) {
    if (isAxiosError(error)) throw Error(error.message, { cause: error.cause })
  }
}