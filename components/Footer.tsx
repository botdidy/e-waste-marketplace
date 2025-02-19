import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 E-Waste Marketplace</p>
        <nav>
          <ul className="flex gap-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}