import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, Target } from "lucide-react"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black to-transparent">
            <Image
              src="/about.jpg"
              alt="About adapt"
              fill
              className="object-cover mix-blend-overlay opacity-40"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex">
            <h1 className="text-4xl md:text-[38px] font-bold mb-4">
              We <span className="text-[#7AE2CF]">are</span>
            </h1>
            <Image
              src="/adapt2.png"
              alt="adapt logo"
              width={120}
              height={20}
              className="object-contain mb-4 ml-1"
            />
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              We are a creative design company dedicated to helping businesses transform their brand identity and
              digital presence through innovative design and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
                About <span className="text-[#7AE2CF]">Us</span>
              </h2>
              <p className="text-gray-300 mb-6">
                We are a creative design company offering innovative visual solutions for branding, marketing, game
                design, and digital experiences. From designing brand assets and promotional content to developing
                multimedia visuals and game-ready artwork, we help businesses and creators communicate effectively
                through impactful, purpose-driven design.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey has been defined by a commitment to excellence, innovation, and a deep understanding of our
                clients' needs. We believe that great design is not just about aesthetics, but about solving problems
                and creating connections that drive business growth.
              </p>
              <p className="text-gray-300">
                Today, we continue to push the boundaries of creative design, helping businesses of all sizes stand out
                in an increasingly competitive market.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/about2.webp" alt="Our journey" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-bold mb-6">
              Our <span className="text-[#7AE2CF]">Mission</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-12">
              Our mission is to empower brands, businesses, and creators by delivering innovative, high-quality visual
              solutions that captivate audiences and elevate experiences. Through thoughtful design, strategic
              creativity, and a deep passion for storytelling—across marketing, branding, digital content, and game
              design—we strive to transform ideas into impactful visual identities and engaging digital products.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-gray-300">
                To be the leading creative agency known for transformative visual solutions that set new standards in
                design excellence and digital innovation across the region.
              </p>
            </div>

            <div className="bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-gray-300">
                We promise to deliver innovative, high-quality visual solutions that not only meet but exceed our
                clients' expectations, helping them achieve their business objectives through impactful design.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              Our <span className="text-[#7AE2CF]">Values</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core principles guide our work and define our approach to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-[#7AE2CF] mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-300">We strive for excellence in everything we do, from concept to execution.</p>
            </div>

            <div className="p-6">
              <div className="text-[#7AE2CF] mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-300">We embrace innovation and creative thinking to solve complex challenges.</p>
            </div>

            <div className="p-6">
              <div className="text-[#7AE2CF] mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-300">
                We operate with honesty, transparency, and ethical standards in all our relationships.
              </p>
            </div>

            <div className="p-6">
              <div className="text-[#7AE2CF] mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of collaboration, both within our team and with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              Meet Our <span className="text-[#7AE2CF]">Team</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our talented team of creative professionals is dedicated to delivering exceptional results for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#252525] rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-[#7AE2CF] mb-4">Creative Director</p>
                <p className="text-gray-300 text-sm">
                  With over 15 years of experience in branding and design, Sarah leads our creative team with vision and
                  expertise.
                </p>
              </div>
            </div>

            <div className="bg-[#252525] rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Chen</h3>
                <p className="text-[#7AE2CF] mb-4">Technical Director</p>
                <p className="text-gray-300 text-sm">
                  David brings technical expertise and innovation to our digital solutions, ensuring seamless user
                  experiences.
                </p>
              </div>
            </div>

            <div className="bg-[#252525] rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Maya Patel</h3>
                <p className="text-[#7AE2CF] mb-4">Strategy Director</p>
                <p className="text-gray-300 text-sm">
                  Maya develops effective marketing strategies that connect brands with their target audiences.
                </p>
              </div>
            </div>

            <div className="bg-[#252525] rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Alex Rodriguez</h3>
                <p className="text-[#7AE2CF] mb-4">Design Lead</p>
                <p className="text-gray-300 text-sm">
                  Alex combines creativity with strategic thinking to create impactful visual identities for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-[34px] font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create impactful brand experiences that help your business stand out and succeed.
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
