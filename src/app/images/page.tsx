import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Sidebar from '@/components/sidebar'

export default function ImagesPage() {
  const images = [
    {
        src: "/images/img-1.jpg"
    },
    {
        src: "/images/img-2.jpg"
    },
    {
        src: "/images/img-3.jpg"
    },
    {
        src: "/images/img-4.jpg"
    },
    {
        src: "/images/img-5.jpg"
    },
    {
        src: "/images/img-6.jpg"
    },
    {
        src: "/images/img-7.jpg"
    },
    {
        src: "/images/img-8.jpg"
    },
    {
        src: "/images/img-9.jpg"
    },
    {
        src: "/images/img-10.jpg"
    },
    {
        src: "/images/img-11.jpg"
    },
    {
        src: "/images/img-12.jpg"
    },
    {
        src: "/images/img-13.jpg"
    }
  ]

  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8">
      <article className="prose max-w-none">
        <nav className="flex gap-2 text-sm text-gray-600 mb-8">
          <Link href="/">Home</Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/images">Images</Link>
        </nav>

        <h1 className="text-3xl font-bold mb-6">Temple Gallery</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {images.map((image, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 object-cover w-full h-48"
                />
                <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
                <p className="text-gray-600">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </article>

      <Sidebar />
    </div>
  )
}

