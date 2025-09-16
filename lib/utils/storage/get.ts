"use client"

export const getLocalStorage = <T>(key: string): T | undefined =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : undefined