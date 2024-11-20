import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Elegant Sarees</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/placeholder.svg?height=600&width=800&text=Our Story"
            alt="Our Story"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Elegant Sarees was founded with a passion for preserving and promoting the rich tradition of Indian sarees. 
            Our journey began in a small workshop, where skilled artisans crafted exquisite sarees with love and dedication.
          </p>
          <p className="mb-4">
            Today, we are proud to offer a wide range of handcrafted sarees from various regions of India, 
            each telling a unique story of cultural heritage and artistic excellence.
          </p>
          <p>
            Our mission is to bring the beauty of Indian sarees to customers worldwide, 
            ensuring that every woman can experience the grace and elegance of this timeless attire.
          </p>
        </div>
      </div>
    </div>
  )
}