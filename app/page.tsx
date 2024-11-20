'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Star, ChevronLeft, ChevronRight, ShoppingBag, Heart, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [email, setEmail] = useState('')
  const [currentSareeIndex, setCurrentSareeIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('banarasi')

  const testimonials = [
    { name: "Priya S.", text: "The quality of these sarees is unmatched. I felt like royalty at my sister's wedding!", rating: 5 },
    { name: "Anita R.", text: "Elegant Sarees offers an amazing variety. I found the perfect Banarasi silk for my anniversary.", rating: 5 },
    { name: "Meera K.", text: "The customer service is exceptional. They helped me choose the perfect saree for my body type.", rating: 4 },
  ]

  const featuredCollections = [
    { name: "Wedding Collection", image: "/images/saree3.jpg", description: "Stunning sarees for your special day" },
    { name: "Silk Wonders", image: "/images/saree4.jpg", description: "Luxurious silk sarees for every occasion" },
    { name: "Casual Elegance", image: "/images/saree5.jpg", description: "Comfortable and stylish everyday wear" },
  ]

  const sareeTypes = [
    { name: "Banarasi", description: "Opulent silk sarees from Varanasi", image: "/images/saree2.jpg" },
    { name: "Kanjivaram", description: "Traditional silk sarees from Tamil Nadu", image: "/images/saree1.jpg" },
    { name: "Chanderi", description: "Lightweight, sheer sarees from Madhya Pradesh", image: "/images/saree5.jpg" },
    { name: "Bandhani", description: "Vibrant tie-dye sarees from Gujarat and Rajasthan", image: "/images/saree6.jpg" },
  ]

  const instagramPosts = [
    { image: "/images/insta1.jpg", likes: 1234, comments: 56 },
    { image: "/images/insta2.jpg", likes: 2345, comments: 78 },
    { image: "/images/insta3.jpg", likes: 3456, comments: 90 },
    { image: "/images/insta4.jpg", likes: 4567, comments: 123 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSareeIndex((prevIndex) => (prevIndex + 1) % sareeTypes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log(`Subscribed with email: ${email}`)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            src="/images/hero.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white p-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">
              Discover Timeless Elegance
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
              Adorn yourself in the finest handcrafted sarees from across India
            </p>
            <div className="animate-fade-in">
              <Button asChild size="lg" className="group">
                <Link href="/collection">
                  Explore Our Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        <section className="py-16 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCollections.map((collection, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button variant="secondary">View Collection</Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                    <p className="text-gray-600">{collection.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Best Sellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group"
                >
                  <div className="relative w-full h-80">
                    <Image
                      src={`/images/saree${i}.jpg`}
                      alt={`Best Seller Saree ${i}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-primary text-white">Best Seller</Badge>
                    </div>
                    <div className="absolute bottom-2 right-2 flex space-x-2">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Exquisite Saree {i}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹12,999</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Explore Saree Types</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {sareeTypes.map((type) => (
                <Button
                  key={type.name}
                  variant={activeTab === type.name.toLowerCase() ? "default" : "outline"}
                  onClick={() => setActiveTab(type.name.toLowerCase())}
                >
                  {type.name}
                </Button>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src={sareeTypes.find(type => type.name.toLowerCase() === activeTab)?.image || sareeTypes[0].image}
                  alt={activeTab}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Sarees</h3>
                <p className="text-gray-600 mb-6">
                  {sareeTypes.find(type => type.name.toLowerCase() === activeTab)?.description || sareeTypes[0].description}
                </p>
                <Button asChild>
                  <Link href={`/collection/${activeTab}`}>
                    Shop {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Sarees
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Elegant Sarees?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Authentic Craftsmanship", description: "Each saree is meticulously handcrafted by skilled artisans, preserving traditional techniques.", icon: "👘" },
                { title: "Curated Collection", description: "We personally select each piece to ensure the highest quality and most stunning designs.", icon: "🎨" },
                { title: "Exceptional Service", description: "Our team of experts is here to help you find the perfect saree for any occasion.", icon: "🌟" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 relative">
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                <div className="transition-opacity duration-300">
                  <blockquote className="text-xl italic mb-4">"{testimonials[currentTestimonial].text}"</blockquote>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                    <div className="flex">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                        <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Saree of the Month</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-96 transition-opacity duration-500">
                  <Image
                    src={sareeTypes[currentSareeIndex].image}
                    alt={sareeTypes[currentSareeIndex].name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="transition-opacity duration-500">
                  <h3 className="text-2xl font-semibold mb-4">{sareeTypes[currentSareeIndex].name} Saree</h3>
                  <p className="text-gray-600 mb-6">{sareeTypes[currentSareeIndex].description}</p>
                  <Button asChild>
                    <Link href={`/collection/${sareeTypes[currentSareeIndex].name.toLowerCase()}`}>
                      Shop Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Follow Us on Instagram</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {instagramPosts.map((post, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={`Instagram post ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <p className="font-semibold">{post.likes} likes</p>
                      <p>{post.comments} comments</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <a href="https://www.instagram.com/elegantsarees" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow Us on Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Our Latest Collections</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and styling tips.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-auto bg-white text-black"
              />
              <Button type="submit" size="lg" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}