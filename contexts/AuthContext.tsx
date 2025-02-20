"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"

type User = {
  id: number
  name: string
  email: string
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)

  const login = async (email: string, password: string) => {
    // This is a mock login. In a real app, you'd validate against a backend.
    if (email === "user@example.com" && password === "password") {
      setUser({ id: 1, name: "John Doe", email: "user@example.com" })
    } else {
      throw new Error("Invalid credentials")
    }
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

