"use client"

import { getLocalStorage } from "@/lib/utils"
import React, { createContext, useContext, useState, ReactNode, useMemo } from "react"

type User = Queries.IGETRandomUsersResponse
type UserStatus = "pending" | "authorized" | "unauthorized" // we don't use pending cause there's no api for checking user.
type UserContextType = {
  thisUser?: User
  status: UserStatus
  removeUser: () => void
  setUser: (newUser: User) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [thisUser, setThisUser] = useState(getLocalStorage<User>("user"))

  const removeUser = () => setThisUser(undefined)
  const setUser = (newUser: User) => setThisUser(newUser)

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
