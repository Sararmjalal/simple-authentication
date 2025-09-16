"use client"

export const getLocalStorage = <T>(key: string): T | undefined => {
  if (typeof window === "undefined") return
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : undefined
}
