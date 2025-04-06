import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import Sidebar from '@/components/sidebar'

export default function HomePage() {
  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8">
      <article className="prose max-w-none">
        <nav className="flex gap-2 text-sm text-gray-600 mb-8">
          <Link href="/">Home</Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/announcements">Announcements</Link>
          <ArrowRight className="w-4 h-4" />
          <span>Sri Kalyana Varadhar Perumal Appeal</span>
        </nav>

        <h1 className="text-3xl font-bold mb-6">
          Sri Kalyana Varadhar Perumal Appeal
        </h1>

        <div className="text-sm text-gray-600 mb-8">
          <span>Announcements</span>
          <span className="mx-2">•</span>
          <span>Dec 3, 2022</span>
        </div>

        <div className="space-y-4">
          <p>॥ श्री ॥</p>
          
          <p className="font-semibold">SRI LAKSHMI VARAHA PARABRAHMANE NAMA:</p>
          
          <p className="font-semibold">SRIMATHE RAMANUJAYA NAMA: SRIMATHE NIGAMANTHA MAHA DESIKAYA NAMA:</p>
          
          <p className="font-semibold">SRIMATHE SRIVAN SADAKOPA SRI RANGANATHA YATHINDRA MAHA DESIKAYA NAMA:</p>

          <div className="my-8">
            <Image
              src="/images/deity.jpg"
              alt="Temple Deities"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </article>

      <Sidebar />
    </div>
  )
}

