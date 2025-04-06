'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const navItems = [
  { title: 'Introduction', href: '/introduction' },
  { title: 'Support Us', href: '/support' },
  { title: 'Images', href: '/images' },
  { title: 'Announcements', href: '/announcements' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-[#337ab7] text-white py-2">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <li
              key={item.title}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 hover:text-gray-200"
              >
                {item.title}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

