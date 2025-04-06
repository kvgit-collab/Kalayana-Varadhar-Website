import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-[#1e4c7a] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Image
          src="/placeholder.svg"
          alt="Left Emblem"
          width={80}
          height={80}
          className="object-contain"
        />
        <h1 className="text-3xl font-bold text-center">
          Sri Kalyana Varadar Temple
        </h1>
        <Image
          src="/placeholder.svg"
          alt="Right Emblem"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
    </header>
  )
}

