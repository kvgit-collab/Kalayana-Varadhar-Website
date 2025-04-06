import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Sidebar from '@/components/sidebar'

export default function ImagesPage() {
  const images = [
    {
      title: "Temple Front View",
      description: "Main entrance of Sri Kalyana Varadhar Temple",
      src: "/images/temple-front.jpg"
    },
    {
      title: "Festival Celebrations",
      description: "Annual Brahmotsavam celebrations",
      src: "/images/festival.jpg"
    },
    {
      title: "Temple Architecture",
      description: "Ancient sculptures and architecture",
      src: "/images/architecture.jpg"
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

