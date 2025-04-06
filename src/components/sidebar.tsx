import Link from 'next/link'
import { Input } from '@/components/ui/input'

export default function Sidebar() {
  return (
    <aside className="space-y-8">
     
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </li>
          <li className="flex justify-between">
            <Link href="/announcements" className="text-blue-600 hover:underline">
              Announcements
            </Link>
          </li>
          <li className="flex justify-between">
            <Link href="/images" className="text-blue-600 hover:underline">
              Images
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

