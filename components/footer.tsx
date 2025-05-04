import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#000000] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="text-[#7AE2CF] font-bold mb-6">
            <Image
              src="/adapt.png"
              alt="Creative design showcase"
              width={80}
              height={20}
              className="object-contain"
            />
            </div>
            <p className="text-gray-400 mb-6">
              A creative design company offering innovative visual solutions for branding, marketing, game design, and
              digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#7AE2CF]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#7AE2CF]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#7AE2CF]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#7AE2CF]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#7AE2CF]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#7AE2CF]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#7AE2CF]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#visual-storytelling" className="text-gray-400 hover:text-[#7AE2CF]">
                  Visual Storytelling
                </Link>
              </li>
              <li>
                <Link href="/services#social-media" className="text-gray-400 hover:text-[#7AE2CF]">
                  Social Media Design
                </Link>
              </li>
              <li>
                <Link href="/services#brand-identity" className="text-gray-400 hover:text-[#7AE2CF]">
                  Brand Identity Creation
                </Link>
              </li>
              <li>
                <Link href="/services#digital-advertising" className="text-gray-400 hover:text-[#7AE2CF]">
                  Digital Advertising
                </Link>
              </li>
              <li>
                <Link href="/services#web-design" className="text-gray-400 hover:text-[#7AE2CF]">
                  Web & UI Design
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#7AE2CF] mr-3 mt-1" />
                <span className="text-gray-400">Office No. MF-44, malik Nasrat Rahmanian Building Deira, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#7AE2CF] mr-3" />
                <span className="text-gray-400">+971 58 237 0533</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#7AE2CF] mr-3" />
                <span className="text-gray-400">info@adapt.ad <br />shriyams.adapt@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Adapt Marketing LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
