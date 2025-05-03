"use client";

import { Phone, Mail, MapPin } from "lucide-react";
// import { ContactForm } from "@/components/contact-form";

export default function Map() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

      {/* Map Section */}
      <div className="h-[400px] bg-[#1E1E1E] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3607.5412245124416!2d55.253995!3d25.2712184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x0:0x0!2zMjXCsDE2JzE2LjQiTiA1NcKwMTUnMTQuNCJF!3m2!1d25.2712413!2d55.3363965!4m5!1s0x3e5f42d5be014369:0xea8d634ec59598ef!2sDeira%20-%20Salahuddin%20St%20-%20Al%20Khabaisi%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.2712413!2d55.3363965!5e0!3m2!1sen!2sae!4v1714723955461!5m2!1sen!2sae"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </section>
  );
}
