import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Raleway } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Impactful Visual Solutions ~ ADAPT UAE",
  description: "Leading Creative Agency & Design Studio in UAE specializing in Brand Strategy, Digital Design, and Interactive Experiences. Expert UI/UX Design Services, Visual Communication, Brand Identity Development, and Digital Transformation. We're your trusted Design Partner for Creative Direction, Product Design, and Digital Branding in Dubai. From Game Design to Corporate Storytelling, our Creative Studio delivers innovative Visual Solutions and Custom Digital Experiences.",
  keywords: [
    "Brand Agency", "Brand Strategy", "Branding Agency Dubai", "Creative Agency",
    "Design Studio UAE", "Digital Design Agency", "UI/UX Design Company",
    "Visual Communication Dubai", "Brand Identity Development", "Digital Branding",
    "Interactive Design", "Product Design", "Game Design", "Creative Direction",
    "Visual Solutions", "Brand Storytelling", "Content Creation UAE", "UX Design",
    "Digital Transformation", "Visual Identity"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-raleway bg-[#1E1E1E] text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
