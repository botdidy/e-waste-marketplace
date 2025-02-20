import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold flex items-center">
      <span className="text-primary mr-1">♻️</span>
      <span>E-Waste</span>
      <span className="text-primary ml-1">Marketplace</span>
    </Link>
  )
}

