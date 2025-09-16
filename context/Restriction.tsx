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

  const isInRestrictedPath = useMemo(() => {
    return PRIVATE_ROUTES.includes(pathname)
  }, [pathname])

  useEffect(() => {
    if (status === "unauthorized" && isInRestrictedPath)
      push(ROUTES.AUTH)
  }, [isInRestrictedPath, status])

  return (
    <RestrictionContext.Provider value={null}>
      {children}
    </RestrictionContext.Provider>
  )
}