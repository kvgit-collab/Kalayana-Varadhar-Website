import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Sidebar from '@/components/sidebar'

export default function AnnouncementsPage() {
  const announcements = [
    {
      title: "Poojas and festivals conducted",
      content: "The festivals and Utsavas conducted in this village in the past were patronized by the village of the people and surrounding villages. The festival of temples of Shiva and Narayana were notable for their grandeur and divine atmosphere. It is told that in the past the deities of these temples and surrounding villages used to assemble at the banks of Paalaar (பாலாறு நதி) during the month of Maasi Masam (மாசி மாதம்) for Theerthavari (தீர்த்தவாரி). Further, 30 days Dhanur Pooja and 10 days Desikar Utsavam in Purataasi month (புரட்டாசி மாதம்) were celebrated in a grand manner by the residence of Agraharam and other streets in Sri Kalyanavaradhar Temple. "
    }
  ]

  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8">
      <article className="prose max-w-none">
        <nav className="flex gap-2 text-sm text-gray-600 mb-8">
          <Link href="/">Home</Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/announcements">Announcements</Link>
        </nav>

        <h1 className="text-3xl font-bold mb-6">Temple Announcements</h1>

        <div className="space-y-6">
          {announcements.map((announcement, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{announcement.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{announcement.date}</p>
                <p>{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </article>

      <Sidebar />
    </div>
  )
}

