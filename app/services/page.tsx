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

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black to-transparent">
            <Image
              src="/services.webp"
              alt="Our Services"
              fill
              className="object-cover mix-blend-overlay opacity-40"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-[38px] font-bold mb-6">
              Our <span className="text-[#7AE2CF]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We offer a comprehensive range of creative and digital services to help your business grow and succeed in
              the digital age.
            </p>
          </div>
        </div>
      </section>

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

          <div id="eye-catching" className="service-card bg-[#1E1E1E] p-8 rounded-lg">
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
                href="#eye-catching-display"
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
                href="#visual-storytelling-details"
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
                href="#social-media-details"
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
                href="#brand-identity-details"
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
                href="#digital-advertising-details"
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
                href="#digital-advertising-details"
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
                href="#web-design-details"
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
                href="#game-art-details"
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
                href="#editorial-details"
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
                href="#experiential-details"
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
                href="#multimedia-details"
                className="inline-flex items-center text-[#7AE2CF] font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    {/* Eye-Catching Displays for Every Space */}
    <section id="eye-catching-display" className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service11.jpg"
                alt="Social media design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
              Eye-Catching Displays <span className="text-[#7AE2CF]">for Every Space</span>
              </h2>
              <p className="text-gray-300 mb-6">
              We bring your brand to life, both indoors and outdoors, through dynamic digital LED screens and striking static hoardings.
              Whether it’s capturing attention in a bustling city center or commanding presence within high-traffic indoor spaces, our advertising solutions ensure your message is seen and remembered.
              With eye-catching visuals and strategic placements, we transform every display into a powerful tool for visibility and engagement, ensuring your brand stands out wherever it matters most.
              </p>
              <p className="text-gray-300 mb-6">
                Our social media design services are tailored to each platform's unique requirements and audience
                expectations, ensuring maximum engagement and impact.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Platform-Specific Content:</strong> Tailored designs for Instagram, Facebook, LinkedIn,
                    TikTok, and more.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Content Calendars:</strong> Planned visual content strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Animated Posts:</strong> GIFs and short animations for increased engagement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Story & Reel Templates:</strong> Branded templates for consistent storytelling.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Visual Storytelling Details */}
      <section id="visual-storytelling-details" className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
                Visual Storytelling for <span className="text-[#7AE2CF]">Marketing</span>
              </h2>
              <p className="text-gray-300 mb-6">
                We don't just design marketing materials—we craft visual experiences that sell, persuade and ignite
                curiosity. From flyers that spark interest to banners that dominate spaces and emailers that get opened,
                every pixel is purpose-built to connect, convert and captivate. Whether it's online or offline, your
                message gets the spotlight it deserves.
              </p>
              <p className="text-gray-300 mb-6">
                Our visual storytelling approach combines strategic thinking with creative execution to ensure your
                marketing materials not only look great but also achieve your business objectives.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Marketing Collateral:</strong> Brochures, flyers, posters, and other print materials.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Digital Marketing Assets:</strong> Banners, emailers, and digital ads.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Campaign Visuals:</strong> Cohesive visual systems for marketing campaigns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Presentation Design:</strong> Impactful slides and pitch decks.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service1.jpg"
                alt="Visual storytelling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Design Details */}
      <section id="social-media-details" className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service2.jpeg"
                alt="Social media design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
                Scroll-Stopping <span className="text-[#7AE2CF]">Social Media Design</span>
              </h2>
              <p className="text-gray-300 mb-6">
                In a world of thumb-scrolling chaos, we make your brand impossible to ignore. Each social media post is
                a bold expression of your brand crafted with flair, strategy, and a deep understanding of audience
                behavior. Pair it with sharp, punchy captions and you've got content that's not just seen, but
                remembered.
              </p>
              <p className="text-gray-300 mb-6">
                Our social media design services are tailored to each platform's unique requirements and audience
                expectations, ensuring maximum engagement and impact.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Platform-Specific Content:</strong> Tailored designs for Instagram, Facebook, LinkedIn,
                    TikTok, and more.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Content Calendars:</strong> Planned visual content strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Animated Posts:</strong> GIFs and short animations for increased engagement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Story & Reel Templates:</strong> Branded templates for consistent storytelling.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Creation */}
      <section id="brand-identity-creation" className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
              Brand Identity  <span className="text-[#7AE2CF]">Creation</span>
              </h2>
              <p className="text-gray-300 mb-6">
              Your brand is more than a logo-it's a personality a voice. an energy.
              We build that identity from the ground up: designing logos with meaning
              developing brand guidelines with depth, and creating
              visual systems that speak fluently across every touchpoint
              You don't just get a logo—you get a legacy
              </p>
              <p className="text-gray-300 mb-6">
                Our visual storytelling approach combines strategic thinking with creative execution to ensure your
                marketing materials not only look great but also achieve your business objectives.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Marketing Collateral:</strong> Brochures, flyers, posters, and other print materials.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Digital Marketing Assets:</strong> Banners, emailers, and digital ads.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Campaign Visuals:</strong> Cohesive visual systems for marketing campaigns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Presentation Design:</strong> Impactful slides and pitch decks.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service3.png"
                alt="Visual storytelling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Advertising Design */}
      <section id="digital-advertising-design" className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service4.jpeg"
                alt="Social media design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
                Digital Advertising<span className="text-[#7AE2CF]"> Design</span>
              </h2>
              <p className="text-gray-300 mb-6">
              We blend creativity with conversion science to deliver high-performance ad creatives for Google
              Meta. and beyond. Whether static or animated
              every ad is tested for thumb-stopping power. visual
              clarity.and emotional pull. Designed to turn glances into
              clicks andclicks into conversions
              </p>
              <p className="text-gray-300 mb-6">
                Our social media design services are tailored to each platform's unique requirements and audience
                expectations, ensuring maximum engagement and impact.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Platform-Specific Content:</strong> Tailored designs for Instagram, Facebook, LinkedIn,
                    TikTok, and more.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Content Calendars:</strong> Planned visual content strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Animated Posts:</strong> GIFs and short animations for increased engagement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Story & Reel Templates:</strong> Branded templates for consistent storytelling.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event and Invitation Design */}
      <section id="event-and-invitation-design" className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
              Event and <span className="text-[#7AE2CF]">Invitation Design</span>
              </h2>
              <p className="text-gray-300 mb-6">
                We bring elegance and originality to every event touchpoint—be it a corporate gala or a private
                launch, From beautifully crafted digital invitations to
                large scale vent signage, we make sure your events start
                making noise long before they begin.
              </p>
              <p className="text-gray-300 mb-6">
                Our visual storytelling approach combines strategic thinking with creative execution to ensure your
                marketing materials not only look great but also achieve your business objectives.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Marketing Collateral:</strong> Brochures, flyers, posters, and other print materials.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Digital Marketing Assets:</strong> Banners, emailers, and digital ads.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Campaign Visuals:</strong> Cohesive visual systems for marketing campaigns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Presentation Design:</strong> Impactful slides and pitch decks.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service5.webp"
                alt="Visual storytelling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Multimedia Content */}
      <section id="immersive-multimedia-content" className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service6.jpg"
                alt="Social media design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
                Immersive Multimedia <span className="text-[#7AE2CF]">Content</span>
              </h2>
              <p className="text-gray-300 mb-6">
              We craft immersive multimedia experiences that
              blend visuals, audio, and video to tell compelling
              stories. Specializing in video editing, animated
              explainersand compelling visual content. our work is
              designed to captivate, engage and leave a lasting
              impression across digital platforms
              </p>
              <p className="text-gray-300 mb-6">
                Our social media design services are tailored to each platform's unique requirements and audience
                expectations, ensuring maximum engagement and impact.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Platform-Specific Content:</strong> Tailored designs for Instagram, Facebook, LinkedIn,
                    TikTok, and more.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Content Calendars:</strong> Planned visual content strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Animated Posts:</strong> GIFs and short animations for increased engagement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Story & Reel Templates:</strong> Branded templates for consistent storytelling.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Web & UI Visual Elements Design*/}
      <section id="web-visual-elements-design" className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
              Web & UI Visual <span className="text-[#7AE2CF]">Elements Design</span>
              </h2>
              <p className="text-gray-300 mb-6">
              We design the tiny details that make a huge
              difference - hero banners, landing page graphics
              icon systems. and UI visuals that elevate your digital
              presence. Every asset is crafted for clarity. usability
              and on-brand impact.
              </p>
              <p className="text-gray-300 mb-6">
                Our visual storytelling approach combines strategic thinking with creative execution to ensure your
                marketing materials not only look great but also achieve your business objectives.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Marketing Collateral:</strong> Brochures, flyers, posters, and other print materials.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Digital Marketing Assets:</strong> Banners, emailers, and digital ads.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Campaign Visuals:</strong> Cohesive visual systems for marketing campaigns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Presentation Design:</strong> Impactful slides and pitch decks.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service7.jpeg"
                alt="Visual storytelling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial and Print Publication Design */}
      <section id="editorial-and-print-publication-design" className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="service8.jpg"
                alt="Social media design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
              Editorial and Print <span className="text-[#7AE2CF]">Publication Design</span>
              </h2>
              <p className="text-gray-300 mb-6">
              From magzine layouts that demand to be flipped
              through. to book covers that beg to be picked up

              we design for tactile engagement. Visual storytelling
              meets publishing polish, resulting in editorial design that
              feels as goof as it looks
              </p>
              <p className="text-gray-300 mb-6">
                Our social media design services are tailored to each platform's unique requirements and audience
                expectations, ensuring maximum engagement and impact.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Platform-Specific Content:</strong> Tailored designs for Instagram, Facebook, LinkedIn,
                    TikTok, and more.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Content Calendars:</strong> Planned visual content strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Animated Posts:</strong> GIFs and short animations for increased engagement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Story & Reel Templates:</strong> Branded templates for consistent storytelling.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Game Art Design & Art Direction */}
      <section id="game-art-design-and-art-direction" className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
              Game Art Design <span className="text-[#7AE2CF]">& Art Direction</span>
              </h2>
              <p className="text-gray-300 mb-6">
              We turn imagination into gameplay. From
              conceptualizing characters and crafting game
              worlds to designing immersive 2D/3D experiences for
              PC and mobile, we specialize in making every frame of
              your game universe not just playable - but unforgettable
              </p>
              <p className="text-gray-300 mb-6">
                Our visual storytelling approach combines strategic thinking with creative execution to ensure your
                marketing materials not only look great but also achieve your business objectives.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Marketing Collateral:</strong> Brochures, flyers, posters, and other print materials.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Digital Marketing Assets:</strong> Banners, emailers, and digital ads.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Campaign Visuals:</strong> Cohesive visual systems for marketing campaigns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Presentation Design:</strong> Impactful slides and pitch decks.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service9.png"
                alt="Visual storytelling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experiential Design for Events & Exhibitions */}
      <section id="experiential-design" className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/service10.avif"
                alt="Social media design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[34px] font-bold mb-6">
              Experiential Design for <span className="text-[#7AE2CF]">Events & Exhibitions</span>
              </h2>
              <p className="text-gray-300 mb-6">
              We design visuals that shape real - world spaces
              creating booths, baners and branded materials that
              elevate your presence at exhibitions, conferences, and
              pop-ups. We make sure your brand is not just seen - its
              experienced.
              </p>
              <p className="text-gray-300 mb-6">
                Our social media design services are tailored to each platform's unique requirements and audience
                expectations, ensuring maximum engagement and impact.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Platform-Specific Content:</strong> Tailored designs for Instagram, Facebook, LinkedIn,
                    TikTok, and more.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Content Calendars:</strong> Planned visual content strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Animated Posts:</strong> GIFs and short animations for increased engagement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7AE2CF] mr-2">•</span>
                  <span>
                    <strong>Story & Reel Templates:</strong> Branded templates for consistent storytelling.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="GetInTouch" className="py-16 bg-[#1E1E1E]">
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
            <div className="bg-[#252525] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-[#000000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">123 Business Avenue, Creative District, Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-[#000000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+971 4 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#7AE2CF] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-[#000000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@adapt.ae</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#252525] p-8 rounded-lg">
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
    </div>
  )
}
