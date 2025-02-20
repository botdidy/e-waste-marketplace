"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "./Logo"
import { useAuth } from "@/contexts/AuthContext"

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Logo />
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link href="/recyclers">Recyclers</Link>
            </li>
            <li>
              <Link href="/guides">Repair Guides</Link>
            </li>
            <li>
              <Link href="/impact">Your Impact</Link>
            </li>
          </ul>
        </nav>
        {user ? (
          <div className="flex items-center gap-4">
            <span>Welcome, {user.name}</span>
            <Button onClick={logout}>Sign Out</Button>
          </div>
        ) : (
          <Link href="/signin">
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </header>
  )
}

