"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { marketplaceItems } from "@/data/marketplaceItems"

export default function ListItem() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    condition: "",
    price: "",
    type: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: marketplaceItems.length + 1,
      name: formData.name,
      condition: formData.condition,
      price: Number.parseFloat(formData.price),
      type: formData.type,
    }
    marketplaceItems.push(newItem)
    router.push("/marketplace")
  }

  return (
    <div className="container mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">List an Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Item Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="condition">Condition</Label>
          <Select name="condition" onValueChange={(value) => handleSelectChange("condition", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="like-new">Like New</SelectItem>
              <SelectItem value="used">Used</SelectItem>
              <SelectItem value="for-parts">For Parts</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="type">Listing Type</Label>
          <Select name="type" onValueChange={(value) => handleSelectChange("type", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sell">Sell</SelectItem>
              <SelectItem value="donate">Donate</SelectItem>
              <SelectItem value="recycle">Recycle</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <Button type="submit">List Item</Button>
      </form>
    </div>
  )
}

