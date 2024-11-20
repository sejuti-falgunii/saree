import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { sarees } from '@/app/data/sarees'  // Import from shared location

export default function Collection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sarees.map((saree) => (
          <Card key={saree.id} className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-96"> {/* Adjusted container height */}
              <Image
                src={saree.image}
                alt={saree.name}
                layout="fill"
                objectFit="contain" /* Ensures the image is fully visible */
                className="absolute top-0 left-0"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{saree.name}</h3>
              <p className="text-muted-foreground mb-2">{saree.description}</p>
              <p className="text-lg font-bold mb-4">₹{saree.price.toLocaleString()}</p>
              <Button asChild className="w-full">
                <Link href={`/collection/${saree.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
