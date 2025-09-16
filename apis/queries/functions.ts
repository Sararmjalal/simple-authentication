import { getFetcher } from "../base";
import { API_ROUTES } from "@/types/enums/apiRoutes";

export const GETRandomUsers = async (params: Queries.IGETRandomUsersRequest) =>
  await getFetcher<Queries.IGETRandomUsersResponse>({ endpoint: API_ROUTES.GET_RANDOM_USERS, params })