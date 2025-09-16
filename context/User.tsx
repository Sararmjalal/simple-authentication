"use client"

import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/lib/utils"
import { ROUTES } from "@/types/enums/routes"
import { useRouter } from "next/navigation"
import React, { createContext, useContext, useState, ReactNode, useMemo } from "react"

type User = Pick<Queries.IGETRandomUsersResponse, "name" | "email" | "picture">
type UserStatus = "pending" | "authorized" | "unauthorized" // we don't use pending cause there's no api for checking user.
type UserContextType = {
  thisUser?: User
  status: UserStatus
  removeUser: () => void
  setUser: (newUser: User) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const localStorageKey = "session"

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [thisUser, setThisUser] = useState(getLocalStorage<User>(localStorageKey))

  const removeUser = () => {
    setThisUser(undefined)
    removeLocalStorage(localStorageKey)
  }
  const setUser = (newUser: User) => {
    setThisUser(newUser)
    setLocalStorage<User>(localStorageKey, newUser)
  }

  const status: UserStatus = useMemo(() => {
    if (!!thisUser) return "authorized"
    return "unauthorized"
  }, [thisUser])

  return (
    <UserContext.Provider
      value={{
        status,
        setUser,
        thisUser,
        removeUser,
      }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

export const useLogout = () => {
  const { push } = useRouter()
  const { thisUser, removeUser } = useUser()

  const logout = () => {
    if (thisUser) {
      removeUser()
      push(ROUTES.AUTH)
    }
  }

  return { logout }
}