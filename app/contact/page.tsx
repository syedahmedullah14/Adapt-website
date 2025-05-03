"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Contact() {
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
        // script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
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
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-[38px] font-bold mb-4">
              Get In <span className="text-[#7AE2CF]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind? We'd love to hear from you. Get in touch with our team to discuss how we can help
              bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#252525] p-8 rounded-lg">
              <h2 className="text-2xl md:text-[30px] font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-[#000000]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Office</h3>
                    <p className="text-gray-300">Office No. MF-44, malik Nasrat Rahmanian Building</p>
                    <p className="text-gray-300">Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-6 w-6 text-[#000000]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-gray-300">+971 58 237 0533</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-6 w-6 text-[#000000]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-300">info@adapt.ad</p>
                    <p className="text-gray-300">shriyams.adapt@outlook.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Working Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-gray-300">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-gray-300">10:00 AM - 2:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-gray-300">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#252525] p-8 rounded-lg">
              <h2 className="text-2xl md:text-[30px] font-bold mb-6">Send Us a Message</h2>
              <form className="contact-form space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full p-3 rounded-md" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-md"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Phone
                  </label>
                  <input type="tel" id="phone" className="w-full p-3 rounded-md" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full p-3 rounded-md" placeholder="Subject" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 rounded-md"
                    placeholder="Your message"
                    required
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
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              Find <span className="text-[#7AE2CF]">Us</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Visit our office to meet our team and discuss your project in person.
            </p>
          </div>

          <div className="h-[400px] bg-[#1E1E1E] rounded-lg overflow-hidden">
            <div ref={mapRef} className="w-full h-full">
              {/* Google Maps will be loaded here */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              Frequently Asked <span className="text-[#7AE2CF]">Questions</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#252525] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">What services do you offer?</h3>
              <p className="text-gray-300">
                We offer a comprehensive range of creative and digital services including branding, digital solutions,
                marketing strategy, graphic design, web development, and creative consulting.
              </p>
            </div>

            <div className="bg-[#252525] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-300">
                Project timelines vary depending on the scope and complexity. A simple branding project might take 2-4
                weeks, while a comprehensive website development could take 8-12 weeks. We'll provide a detailed
                timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-[#252525] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">What is your design process?</h3>
              <p className="text-gray-300">
                Our design process typically includes discovery, research, concept development, design, implementation,
                and launch. We collaborate closely with clients throughout each phase to ensure the final product meets
                their objectives.
              </p>
            </div>

            <div className="bg-[#252525] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Do you work with clients outside of the UAE?</h3>
              <p className="text-gray-300">
                Yes, we work with clients globally. While we're based in Dubai, we have experience working with
                international clients across various industries and time zones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
