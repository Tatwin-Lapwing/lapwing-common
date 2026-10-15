"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center bg-earth-50 px-6 pt-24 overflow-hidden"
    >
      {/* Watercolour Frame Background */}
      {/* mix-blend-multiply melts the white background of the image into your earth-50 background */}
      <div className="absolute inset-0 z-0 mix-blend-multiply opacity-90">
        <Image
          src="/hero-frame.png" 
          alt="Watercolour illustration of an ancient UK woodland framing the page"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
      </div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <h1 className="font-heading text-4xl max-w-2xl font-normal leading-tight tracking-tight text-moss-950 md:text-6xl">
          Investing in the restoration of Britain&rsquo;s natural heritage.
        </h1>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-moss-900 md:text-xl">
          A UK-based specialist loans company dedicated to ecological recovery, sustainable land management, and enduring returns.
        </p>
      </motion.div>
    </section>
  );
}
