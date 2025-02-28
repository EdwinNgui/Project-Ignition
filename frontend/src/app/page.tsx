// Imports
import Link from "next/link"

// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Landing Page goes here</h1>
      <Link href="/dashboard" className="block py-2">Dashboard</Link>
    </div>
  )
}
