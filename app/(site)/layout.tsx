import Link from "next/link"
import "../globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My Personal Website",
  description: "Generated by NextJS 13 + Sanity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
        <header className="max-w-5xl mx-auto bg-white px-4 py-5 top-0 sticky">
          <Link className="bg-gradient-to-l from-orange-400 via-red-500 to-purple-700 bg-clip-text text-transparent text-2xl drop-shadow font-extrabold p-4" href={'/'}> @heblopez </Link>
        </header>
        <main className="max-w-5xl mx-auto px-8 py-16">{children}</main>
      </body>
    </html>
  )
}