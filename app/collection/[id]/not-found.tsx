import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Saree Not Found</h2>
      <p className="text-xl mb-8">We couldn't find the saree you're looking for.</p>
      <Button asChild>
        <Link href="/collection">Return to Collection</Link>
      </Button>
    </div>
  )
}