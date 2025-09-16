"use client"

import { useUser } from "./User"
import { usePathname, useRouter } from "next/navigation"
import { PRIVATE_ROUTES, ROUTES } from "@/types/enums/routes"
import React, { createContext, ReactNode, useEffect, useMemo } from "react"

const RestrictionContext = createContext<null>(null)

export const RestrictionProvider = ({ children }: { children: ReactNode }) => {

  const { status } = useUser()
  const { push } = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === "authorized" && pathname.includes(ROUTES.AUTH))
      push(ROUTES.DASHBOARD)
    if (status === "unauthorized" && PRIVATE_ROUTES.includes(pathname))
      push(ROUTES.AUTH)
  }, [pathname, status])

  return (
    <RestrictionContext.Provider value={null}>
      {children}
    </RestrictionContext.Provider>
  )
}