import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Lightbulb,
  LineChart,
  Smartphone,
  MapPin,
  Phone,
  Mail,
  Monitor,
  ImageIcon,
  Gamepad2,
  Megaphone,
  Newspaper,
} from "lucide-react"
const ServicesCards = () => {
  return (
    <div>
        {/* Services Overview */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[34px] font-bold mb-4">
              What We <span className="text-[#7AE2CF]">Offer</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our services are designed to help businesses create meaningful connections with their audiences through
              strategic design and innovative thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div id="eye-catching-display" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Eye-Catching Displays for Every Space</h3>
              <p className="text-gray-300 mb-6">
              We bring your brand to life, both indoors and outdoors, through dynamic digital LED screens and striking static hoardings. 
              Whether it’s capturing attention in a bustling city center or commanding presence within high-traffic indoor spaces, 
              our advertising solutions ensure your message is seen and remembered.
              </p>
              <Link
                href="/services#eye-catching-display"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="visual-storytelling" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Megaphone className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visual Storytelling for Marketing</h3>
              <p className="text-gray-300 mb-6">
                We don't just design marketing materials—we craft visual experiences that sell, persuade and ignite
                curiosity. From flyers that spark interest to banners that dominate spaces and emailers that get opened,
                every pixel is purpose-built to connect, convert and captivate.
              </p>
              <Link
                href="/services#visual-storytelling-details"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="social-media" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <ImageIcon className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Scroll-Stopping Social Media Design</h3>
              <p className="text-gray-300 mb-6">
                In a world of thumb-scrolling chaos, we make your brand impossible to ignore. Each social media post is
                a bold expression of your brand crafted with flair, strategy, and a deep understanding of audience
                behavior.
              </p>
              <Link
                href="/services#social-media-details"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="brand-identity" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Brand Identity Creation</h3>
              <p className="text-gray-300 mb-6">
                Your brand is more than a logo—it's a personality, a voice, an energy. We build that identity from the
                ground up: designing logos with meaning, developing brand guidelines with depth, and creating visual
                systems that speak fluently across every touchpoint.
              </p>
              <Link
                href="/services#brand-identity-creation"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="digital-advertising" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <LineChart className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Advertising Design</h3>
              <p className="text-gray-300 mb-6">
                We blend creativity with conversion science to deliver high-performance ad creatives for Google, Meta,
                and beyond. Whether static or animated, every ad is tested for thumb-stopping power, visual clarity, and
                emotional pull.
              </p>
              <Link
                href="/services#digital-advertising-design"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>


            <div id="digital-advertising" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <LineChart className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Event and Invitation Design</h3>
              <p className="text-gray-300 mb-6">
              We bring elegance and originality to every event touchpoint—be it a corporate gala or a private launch, 
              From beautifully crafted digital invitations to large scale vent signage, we make sure your events start
              making noise long before they begin
              </p>
              <Link
                href="/services#event-and-invitation-design"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="web-design" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Web & UI Visual Elements Design</h3>
              <p className="text-gray-300 mb-6">
                We design the tiny details that make a huge difference - hero banners, landing page graphics, icon
                systems, and UI visuals that elevate your digital presence. Every asset is crafted for clarity,
                usability, and on-brand impact.
              </p>
              <Link
                href="/services#web-visual-elements-design"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="game-art" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Gamepad2 className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Game Art Design & Art Direction</h3>
              <p className="text-gray-300 mb-6">
                We turn imagination into gameplay. From conceptualizing characters and crafting game worlds to designing
                immersive 2D/3D experiences for PC and mobile, we specialize in making every frame of your game universe
                not just playable - but unforgettable.
              </p>
              <Link
                href="/services#game-art-design-and-art-direction"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="editorial" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Newspaper className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Editorial and Print Publication Design</h3>
              <p className="text-gray-300 mb-6">
                From magazine layouts that demand to be flipped through, to book covers that beg to be picked up, we
                design for tactile engagement. Visual storytelling meets publishing polish, resulting in editorial
                design that feels as good as it looks.
              </p>
              <Link
                href="/services#editorial-and-print-publication-design"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="experiential" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Experiential Design for Events & Exhibitions</h3>
              <p className="text-gray-300 mb-6">
                We design visuals that shape real-world spaces, creating booths, banners, and branded materials that
                elevate your presence at exhibitions, conferences, and pop-ups. We make sure your brand is not just seen
                - it's experienced.
              </p>
              <Link
                href="/services#experiential-design"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div id="multimedia" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
              <div className="bg-[#7AE2CF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Immersive Multimedia Content</h3>
              <p className="text-gray-300 mb-6">
                We craft immersive multimedia experiences that blend visuals, audio, and video to tell compelling
                stories. Specializing in video editing, animated explainers and compelling visual content, our work is
                designed to captivate, engage and leave a lasting impression across digital platforms.
              </p>
              <Link
                href="/services#immersive-multimedia-content"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesCards