import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { cn } from "@/lib/utils"  // You'll need to add this utility

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elegant Sarees',
  description: 'Discover the beauty of traditional Indian attire',
}

function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Elegant Sarees</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/collection" className="hover:underline">Collection</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Elegant Sarees</h3>
          <p>Bringing the beauty of Indian tradition to your wardrobe.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/collection" className="hover:underline">Collection</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>123 Saree Street, Textile City</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@elegantsarees.com</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 text-center">
        <p>&copy; Elegant Sarees. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}