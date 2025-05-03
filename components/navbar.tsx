"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-[#1E1E1E] border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <div className="text-[#7AE2CF] font-bold">
            <div className="text-2xl">adapt</div>
            <div className="text-sm">creatives</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="primary-bg h-20 w-16 flex items-center justify-center mr-4">
            <Link href="/" className={`nav-link text-[black] font-medium ${pathname === "/" ? "" : ""}`}>
              HOME
            </Link>
          </div>
          <Link href="/about" className={`nav-link mx-4 font-medium ${pathname === "/about" ? "active" : ""}`}>
            ABOUT
          </Link>
          <div className="relative mx-4">
            <button
              className={`nav-link flex items-center font-medium ${pathname.startsWith("/services") ? "active" : ""}`}
              onClick={toggleServices}
            >
              SERVICES <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#252525] shadow-lg rounded-md overflow-hidden">
                <Link href="/services#visual-storytelling" className="block px-4 py-2 hover:bg-[#333333]">
                  Visual Storytelling for Marketing
                </Link>
                <Link href="/services#social-media" className="block px-4 py-2 hover:bg-[#333333]">
                  Social Media Design
                </Link>
                <Link href="/services#brand-identity" className="block px-4 py-2 hover:bg-[#333333]">
                  Brand Identity Creation
                </Link>
                <Link href="/services#digital-advertising" className="block px-4 py-2 hover:bg-[#333333]">
                  Digital Advertising Design
                </Link>
                <Link href="/services#web-design" className="block px-4 py-2 hover:bg-[#333333]">
                  Web & UI Design
                </Link>
              </div>
            )}
          </div>
          <span className="mx-2">|</span>
          <Link href="/contact" className={`nav-link ml-4 font-medium ${pathname === "/contact" ? "active" : ""}`}>
            GET IN TOUCH
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#252525] p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className={`nav-link font-medium ${pathname === "/" ? "text-[#7AE2CF]" : ""}`}>
              HOME
            </Link>
            <Link href="/about" className={`nav-link font-medium ${pathname === "/about" ? "text-[#7AE2CF]" : ""}`}>
              ABOUT
            </Link>
            <div>
              <button
                className={`nav-link flex items-center font-medium ${pathname.startsWith("/services") ? "text-[#7AE2CF]" : ""}`}
                onClick={toggleServices}
              >
                SERVICES <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/services#visual-storytelling" className="block hover:text-[#7AE2CF]">
                    Visual Storytelling for Marketing
                  </Link>
                  <Link href="/services#social-media" className="block hover:text-[#7AE2CF]">
                    Social Media Design
                  </Link>
                  <Link href="/services#brand-identity" className="block hover:text-[#7AE2CF]">
                    Brand Identity Creation
                  </Link>
                  <Link href="/services#digital-advertising" className="block hover:text-[#7AE2CF]">
                    Digital Advertising Design
                  </Link>
                  <Link href="/services#web-design" className="block hover:text-[#7AE2CF]">
                    Web & UI Design
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className={`nav-link font-medium ${pathname === "/contact" ? "text-[#7AE2CF]" : ""}`}>
              GET IN TOUCH
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
