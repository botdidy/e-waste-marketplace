import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">E-Waste Marketplace</Link>
        <nav>
          <ul className="flex gap-4">
            <li><Link href="/marketplace">Marketplace</Link></li>
            <li><Link href="/recyclers">Recyclers</Link></li>
            <li><Link href="/guides">Repair Guides</Link></li>
            <li><Link href="/impact">Your Impact</Link></li>
          </ul>
        </nav>
        <Button>Sign In</Button>
      </div>
    </header>
  )
}