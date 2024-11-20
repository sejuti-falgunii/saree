import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { sarees } from '@/app/data/sarees'

export function generateStaticParams() {
  return sarees.map((saree) => ({
    id: saree.id.toString(),
  }))
}

export default async function SareePage({
    params,
  }: {
    params: { id: string };
  }) {
    // Parse the ID safely
    const sareeId = parseInt(params?.id ?? "", 10);
  
    // Handle invalid ID
    if (isNaN(sareeId)) {
      notFound();
    }
  
    // Find the saree
    const saree = sarees.find((s) => s.id === sareeId);
  
    // Handle saree not found
    if (!saree) {
      notFound();
    }
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/collection" className="text-primary hover:underline mb-4 inline-block">
            &larr; Back to Collection
          </Link>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="relative aspect-square">
              <Image
                src={"/"+saree.image}
                alt={saree.name}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{saree.name}</h1>
              <p className="text-2xl font-bold text-primary">₹{saree.price.toLocaleString()}</p>
              <div className="space-y-2">
                <Button size="lg" className="w-full">Add to Cart</Button>
                <Button variant="outline" size="lg" className="w-full">
                  Buy Now
                </Button>
              </div>
              <div className="pt-6 space-y-4">
                <h2 className="text-xl font-semibold">Product Details</h2>
                <p className="text-muted-foreground">
                  This exquisite {saree.name} is a masterpiece of traditional craftsmanship. 
                  Meticulously woven with the finest {saree.material} threads, it showcases 
                  intricate {saree.pattern} patterns that reflect centuries of artisanal expertise.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Material: {saree.material}</li>
                  <li>Pattern: {saree.pattern}</li>
                  <li>Occasion: {saree.occasion}</li>
                  <li>Blouse Piece: Included</li>
                  <li>Care: Dry clean only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  