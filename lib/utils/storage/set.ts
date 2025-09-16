"use client"

export const setLocalStorage = <T>(key: string, data: T) => {
  if (typeof window === "undefined") return
  localStorage.setItem(key, JSON.stringify(data))
}