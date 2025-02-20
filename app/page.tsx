import Link from "next/link"
import { Button } from "@/components/ui/button"
import RecycleAnimation from "@/components/RecycleAnimation"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="w-full max-w-4xl">
        <RecycleAnimation />
      </div>
      <h1 className="text-4xl font-bold mb-4">Welcome to E-Waste Marketplace</h1>
      <p className="text-xl mb-8">Trade, Donate, Recycle - Manage Electronic Waste Responsibly</p>
      <div className="flex gap-4">
        <Link href="/marketplace">
          <Button>Browse Marketplace</Button>
        </Link>
        <Link href="/list-item">
          <Button variant="outline">List an Item</Button>
        </Link>
      </div>
    </div>
  )
}

