"use client"

export const removeLocalStorage = (key: string) => {
  if (typeof window === "undefined") return
  localStorage.removeItem(key)
}