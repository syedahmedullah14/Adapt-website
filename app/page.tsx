"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, Lightbulb, Users, Palette, Code, LineChart, MapPin, Phone, Mail } from "lucide-react"
import { useEffect, useRef } from "react"
import Map from "@/components/map"
import ServicesCards from "@/components/ServicesCards"

export default function Home() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      if (mapRef.current && typeof window !== "undefined" && window.google) {
        const location = { lat: 25.2048, lng: 55.2708 } // Dubai coordinates
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
        })

        new window.google.maps.Marker({
          position: location,
          map: map,
          title: "adapt creatives",
        })
      }
    }

    // Load Google Maps API
    const loadGoogleMapsAPI = () => {
      if (typeof window !== "undefined") {
        const script = document.createElement("script")
        script.src = `https://www.google.com/maps/dir//Deira+-+Salahuddin+St+-+Al+Khabaisi+-+Dubai+-+United+Arab+Emirates/@25.2712184,55.253995,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f42d5be014369:0xea8d634ec59598ef!2m2!1d55.3363965!2d25.2712413?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D`
        script.async = true
        script.defer = true
        window.initMap = initMap
        document.head.appendChild(script)
      }
    }

    if (typeof window !== "undefined" && !window.google) {
      loadGoogleMapsAPI()
    } else if (typeof window !== "undefined" && window.google) {
      initMap()
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black to-transparent">
            <Image
              src="/banner.jpg"
              alt="Creative design showcase"
              fill
              className="object-cover mix-blend-overlay opacity-50"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-[38px] font-bold mb-6">
              We Create <span className="text-[#7AE2CF]">Impactful</span> Visual Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A creative design company offering innovative visual solutions for branding, marketing, and digital
              experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary px-8 py-3 rounded-md font-medium text-lg">
                Our Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-md font-medium text-lg border border-white hover:border-[#7AE2CF] hover:text-[#7AE2CF] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              About <span className="text-[#7AE2CF]">Us</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Learn more about who we are and what drives our creative passion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-[30px] font-bold mb-6">
                Company <span className="text-[#7AE2CF]">Overview</span>
              </h3>
              <p className="text-gray-300 mb-6">
                We are a creative design company offering innovative visual solutions for branding, marketing, game
                design, and digital experiences. From designing brand assets and promotional content to developing
                multimedia visuals and game-ready artwork, we help businesses and creators communicate effectively
                through impactful, purpose-driven design.
              </p>
              <p className="text-gray-300 mb-8">
                Our team of experienced designers, developers, and strategists are passionate about creating impactful
                brand experiences that drive results and help businesses stand out in today's competitive market.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline">
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about2.webp"
                alt="Our creative team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              Our <span className="text-[#7AE2CF]">Mission</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our mission is to empower brands, businesses, and creators by delivering innovative, high-quality visual
              solutions that captivate audiences and elevate experiences. Through thoughtful design, strategic
              creativity, and a deep passion for storytelling—across marketing, branding, digital content, and game
              design—we strive to transform ideas into impactful visual identities and engaging digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#252525] p-8 rounded-lg text-center">
              <div className="bg-[#7AE2CF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of creativity and technology to deliver innovative solutions that set
                our clients apart.
              </p>
            </div>

            <div className="bg-[#252525] p-8 rounded-lg text-center">
              <div className="bg-[#7AE2CF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of collaboration, working closely with our clients to understand their vision
                and bring it to life.
              </p>
            </div>

            <div className="bg-[#252525] p-8 rounded-lg text-center">
              <div className="bg-[#7AE2CF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We are committed to excellence in every aspect of our work, from concept to execution, ensuring the
                highest quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesCards />
      <section className="py-20 bg-[#252525]">
        {/* <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              We Provide the Best <span className="text-[#7AE2CF]">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of creative and digital services to help your business grow and succeed in
              the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Branding</h3>
              <p className="text-gray-300 mb-6">
                Your brand is more than a logo—it's a personality, a voice, an energy. We build that identity from the
                ground up: designing logos with meaning, developing brand guidelines with depth, and creating visual
                systems that speak fluently across every touchpoint.
              </p>
              <Link
                href="/services#brand-identity"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Web Design</h3>
              <p className="text-gray-300 mb-6">
                We design the tiny details that make a huge difference - hero banners, landing page graphics, icon
                systems, and UI visuals that elevate your digital presence. Every asset is crafted for clarity,
                usability, and on-brand impact.
              </p>
              <Link
                href="/services#web-design"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <LineChart className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-300 mb-6">
                We blend creativity with conversion science to deliver high-performance ad creatives for Google, Meta,
                and beyond. Whether static or animated, every ad is tested for thumb-stopping power, visual clarity, and
                emotional pull.
              </p>
              <Link
                href="/services#digital-advertising"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Social Media Management</h3>
              <p className="text-gray-300 mb-6">
                In a world of thumb-scrolling chaos, we make your brand impossible to ignore. Each social media post is
                a bold expression of your brand crafted with flair, strategy, and a deep understanding of audience
                behavior.
              </p>
              <Link
                href="/services#social-media"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Palette className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-300 mb-6">
                We craft immersive multimedia experiences that blend visuals, audio, and video to tell compelling
                stories. Specializing in video editing, animated explainers, and compelling visual content designed to
                captivate and engage.
              </p>
              <Link
                href="/services#visual-storytelling"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div> */}

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary px-8 py-3 rounded-md font-medium inline-block">
              View All Services
            </Link>
          </div>
        {/* </div> */}
      </section>

      {/* Stats Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#7AE2CF] text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-300">Years of Experience</p>
            </div>
            <div>
              <div className="text-[#7AE2CF] text-4xl font-bold mb-2">150+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-[#7AE2CF] text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div>
              <div className="text-[#7AE2CF] text-4xl font-bold mb-2">15+</div>
              <p className="text-gray-300">Industry Awards</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              Get In <span className="text-[#7AE2CF]">Touch</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to transform your brand? Let's discuss how our services can help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#1E1E1E] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-[#000000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">Office No. MF-44, malik Nasrat Rahmanian Building Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-[#000000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+971 58 237 0533</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-[#000000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@adapt.ad</p>
                    <p className="text-gray-300">shriyams.adapt@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1E1E1E] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="contact-form space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full p-3 rounded-md" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full p-3 rounded-md" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full p-3 rounded-md" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 rounded-md"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary px-6 py-3 rounded-md font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <Map/>
    </div>
  )
}
