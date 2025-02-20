"use client"

import { useState } from "react"
import { recyclers } from "@/data/recyclers"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Recyclers() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRecyclers = recyclers.filter(
    (recycler) =>
      recycler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recycler.acceptedItems.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">E-Waste Recyclers</h1>
      <Input
        type="text"
        placeholder="Search by name or accepted items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecyclers.map((recycler) => (
          <Card key={recycler.id}>
            <CardHeader>
              <CardTitle>{recycler.name}</CardTitle>
              <CardDescription>{recycler.address}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Phone:</strong> {recycler.phone}
              </p>
              <p>
                <strong>Accepted Items:</strong> {recycler.acceptedItems.join(", ")}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={recycler.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

