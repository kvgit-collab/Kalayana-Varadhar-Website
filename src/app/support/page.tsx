import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Sidebar from '@/components/sidebar'

export default function SupportPage() {
  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8">
      <article className="prose max-w-none">
        <nav className="flex gap-2 text-sm text-gray-600 mb-8">
          <Link href="/">Home</Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/support">Support</Link>
        </nav>

        <h1 className="text-3xl font-bold mb-6">Support Us</h1>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Support Our Temple</h2>
              <p className="mb-4">
                Your generous contributions help us maintain and improve our temple facilities. All donations are used for:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Temple maintenance and renovations</li>
                <li>Daily pujas and special ceremonies</li>
                <li>Community services and religious education</li>
                <li>Festivals and cultural events</li>
              </ul>
              <Button size="lg" className="w-full md:w-auto">
                Make a Donation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Other Ways to Support</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Volunteer</h3>
                  <p>Join our team of volunteers to help with temple activities and events.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Sponsor Programs</h3>
                  <p>Sponsor religious ceremonies, cultural programs, or educational initiatives.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Spread Awareness</h3>
                  <p>Help us reach more people by sharing our message with your community.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </article>

      <Sidebar />
    </div>
  )
}

