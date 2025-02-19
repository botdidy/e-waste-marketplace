import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// ... rest of the file remains the same

// This would typically come from an API
const items = [
  { id: 1, name: 'iPhone X', condition: 'Used', price: 200, type: 'Sell' },
  { id: 2, name: 'Samsung TV', condition: 'For parts', price: 50, type: 'Recycle' },
  { id: 3, name: 'Dell Laptop', condition: 'Working', price: 0, type: 'Donate' },
]

export default function Marketplace() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">E-Waste Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.condition}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${item.price}</p>
              <p className="text-muted-foreground">{item.type}</p>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}