"use client"

import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/lib/utils"
import { ROUTES } from "@/types/enums/routes"
import { useRouter } from "next/navigation"
import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react"

type User = Pick<Queries.IGETRandomUsersResponse, "name" | "email" | "picture">
type UserStatus = "pending" | "authorized" | "unauthorized"

type UserContextType = {
  thisUser: User
  status: Exclude<UserStatus, "pending">
  removeUser: () => void
  setUser: (newUser: User) => void
} |
{
  thisUser: undefined
  status: "pending"
  removeUser: () => void
  setUser: (newUser: User) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const localStorageKey = "session"

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [thisUser, setThisUser] = useState<User | undefined>(undefined)

  const removeUser = () => {
    setThisUser(undefined)
    removeLocalStorage(localStorageKey)
  }
  const setUser = (newUser: User) => {
    setThisUser(newUser)
    setLocalStorage<User>(localStorageKey, newUser)
  }

  useEffect(() => {
    const storageUser = getLocalStorage<User>(localStorageKey) || {} as User
    if (!thisUser && storageUser)
      setThisUser(storageUser)
  }, [thisUser])

  const status: UserStatus = useMemo(() => {
    if (!thisUser) return "pending"
    if (thisUser.email) return "authorized"
    return "unauthorized"
  }, [thisUser])

  return (
    <UserContext.Provider
      value={
        thisUser
          ? { thisUser, status: status as Exclude<UserStatus, "pending">, setUser, removeUser }
          : { thisUser: undefined, status: "pending", setUser, removeUser }
      }>
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