import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/sidebar'

export default function IntroductionPage() {
  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8">
      <article className="prose max-w-none">
        <nav className="flex gap-2 text-sm text-gray-600 mb-8">
          <Link href="/">Home</Link>
          <ArrowRight className="w-4 h-4" />
          <Link href="/introduction">Introduction</Link>
        </nav>

        <h1 className="text-3xl font-bold mb-6">Introduction</h1>

        <div className="text-sm text-gray-600 mb-8">
          <span>General</span>
          <span className="mx-2">•</span>
          <span>Dec 3, 2024</span>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Srivaishnavam Parambaryam, Traditions & The Culture that stands Class apart from others
          </h2>

          <div className="flex justify-center my-8">
            <Image
              src="/images/om-symbol.svg"
              alt="Om Symbol"
              width={100}
              height={100}
              className="text-blue-600"
            />
          </div>

          <h3 className="text-lg font-semibold">
            Essence of Sanathana Dharma & Srivaihnavam Practices, an Introduction to this website contents.
          </h3>

          <p>
            I dedicate these pages to my father Late Sri T. S. Ramabathrachariar, (of Mukkur) Ex. Village Magistrate, Ladavaram Village, Arcot Taluk, (formerly with Walajah Taluk but now in Arcot Taluk) North Arcot District in Tamilnadu] whose teachings on Srivaishnavam & Srivaishnvism were very instrumental in bringing out these pages.
          </p>

          <p>
            Though this site is mainly for the beginners, others too might find these pages very useful, I hope. A new section in the FAQ, for asking any questions related to the Lifestyles and Religion – Srivaishnsvism is added for the readers benefit.
          </p>

          <p>
            All the other sites are dedicated to the Azhwaars (the 12 great Gurus or teachers who propagated ethics and values of Srivaishnavam in poetic scripts named Divyaprabhandham which is purely in Tamil and known as Dravida Sagaram), Aacharyans (the Gurus), Divya Prabhandam, Divya Kshetrams or 108 Divya Desam (the sacred places or sanctuaries where the temples of Lord Shri Mahavishnu are located), Sri Ramanuja (a great scholar and founder of the Visishtaathvaitham), Sri Desikar (a great scholar who propagated VISHISHTAATHVAITHAM and the founder Guru of Shri Ahobila Mutt), Emperumaall (Lord Vishnu Himself), All sorts of Srivaishnavam materials such as slokhas, Vedas, Temples, Gods and Goddesses.
          </p>

          <p>
            But none of these sites give the reasons and inner meaning for practicing the rituals. If rationale thoughts are just posted, the younger generation will surely understand, benefit and appreciate it. They might even follow the system more authentically. Here I am not giving any versus or slokhas, but only giving the inner meaning of Srivaishnsvism & Srivaishnavam culture and its practices.
          </p>

          <p>
            In these pages, I try to give a fair picture of Srivaishnsvism, Pride, Rituals and its reasons & beliefs in brief. In simple words the Srivaishnavam culture and its practices are explained in detail.
          </p>
        </div>
      </article>

      <Sidebar />
    </div>
  )
}

