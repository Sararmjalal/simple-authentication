export const ROUTES = {
  HOME: "/",
  AUTH: "/auth",
  DASHBOARD: "/dashboard"
}
export const PRIVATE_ROUTES = [ROUTES.DASHBOARD]
export const PUBLIC_ROUTES = [ROUTES.HOME, ROUTES.AUTH]