import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Sidebar from '@/components/sidebar'

export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8">
      <article className="prose max-w-none">
        <nav className="flex gap-2 text-sm text-gray-600 mb-8">
          <Link href="/">Home</Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/contact">Contact</Link>
        </nav>

        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Temple Address</h2>
              <address className="not-italic">
                <p>Sri Kalyana Varadhar Temple</p>
                <p>Temple Street</p>
                <p>City, State PIN</p>
                <p>India</p>
              </address>

              <h2 className="text-xl font-semibold mt-6 mb-4">Contact Information</h2>
              <ul className="space-y-2">
                <li>Phone: +91 XXXXXXXXXX</li>
                <li>Email: info@temple.com</li>
                <li>Office Hours: 6:00 AM to 8:00 PM</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </article>

      <Sidebar />
    </div>
  )
}

