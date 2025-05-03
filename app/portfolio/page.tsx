import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black to-transparent">
            <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Our Portfolio"
              fill
              className="object-cover mix-blend-overlay opacity-40"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#F9D71C]">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our collection of work that showcases our creativity, expertise, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury Brand Identity</h3>
                <p className="text-gray-300 mb-4">
                  A comprehensive brand identity for a luxury fashion brand, including logo design, visual identity, and
                  brand guidelines.
                </p>
                <Link
                  href="/portfolio/project-1"
                  className="inline-flex items-center text-[#F9D71C] font-medium hover:underline"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Website</h3>
                <p className="text-gray-300 mb-4">
                  A user-friendly e-commerce website with a focus on user experience, responsive design, and seamless
                  checkout process.
                </p>
                <Link
                  href="/portfolio/project-2"
                  className="inline-flex items-center text-[#F9D71C] font-medium hover:underline"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Restaurant Branding</h3>
                <p className="text-gray-300 mb-4">
                  A complete branding package for a high-end restaurant, including logo, menu design, signage, and
                  marketing materials.
                </p>
                <Link
                  href="/portfolio/project-3"
                  className="inline-flex items-center text-[#F9D71C] font-medium hover:underline"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 4"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mobile App Design</h3>
                <p className="text-gray-300 mb-4">
                  A sleek and intuitive mobile app design for a fitness tracking application, focusing on user
                  experience and visual appeal.
                </p>
                <Link
                  href="/portfolio/project-4"
                  className="inline-flex items-center text-[#F9D71C] font-medium hover:underline"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 5"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Corporate Identity</h3>
                <p className="text-gray-300 mb-4">
                  A professional corporate identity for a financial services firm, including logo, stationery, and
                  marketing collateral.
                </p>
                <Link
                  href="/portfolio/project-5"
                  className="inline-flex items-center text-[#F9D71C] font-medium hover:underline"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project 6"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Social Media Campaign</h3>
                <p className="text-gray-300 mb-4">
                  A comprehensive social media campaign for a product launch, including strategy, content creation, and
                  performance analysis.
                </p>
                <Link
                  href="/portfolio/project-6"
                  className="inline-flex items-center text-[#F9D71C] font-medium hover:underline"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Client <span className="text-[#F9D71C]">Testimonials</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#252525] p-8 rounded-lg">
              <div className="text-[#F9D71C] text-4xl font-serif mb-4">"</div>
              <p className="text-gray-300 mb-6">
                Working with adapt was a game-changer for our brand. Their creative approach and attention to detail
                transformed our visual identity and helped us connect with our target audience in meaningful ways.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Thompson</h4>
                  <p className="text-gray-400 text-sm">Marketing Director, Luxury Brand</p>
                </div>
              </div>
            </div>

            <div className="bg-[#252525] p-8 rounded-lg">
              <div className="text-[#F9D71C] text-4xl font-serif mb-4">"</div>
              <p className="text-gray-300 mb-6">
                The team at adapt exceeded our expectations at every turn. Their strategic approach to our website
                redesign resulted in a significant increase in user engagement and conversions.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">CEO, Tech Startup</p>
                </div>
              </div>
            </div>

            <div className="bg-[#252525] p-8 rounded-lg">
              <div className="text-[#F9D71C] text-4xl font-serif mb-4">"</div>
              <p className="text-gray-300 mb-6">
                adapt's creative vision and technical expertise were instrumental in the success of our product launch.
                Their comprehensive approach to branding and digital marketing helped us stand out in a crowded market.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Aisha Al-Mansouri</h4>
                  <p className="text-gray-400 text-sm">Founder, Retail Brand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing together. Contact us to discuss your project and how we can
              help bring your vision to life.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-3 rounded-md font-medium inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
