"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function InvestmentThesis() {
  return (
    <section
      id="thesis"
      aria-labelledby="thesis-heading"
      className="bg-cream py-24 md:min-h-screen md:flex md:items-center md:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="thesis-heading"
            className="font-heading text-3xl text-moss-900 md:text-4xl lg:text-5xl"
          >
            Investment Thesis
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-moss-500" />
        </motion.div>

        {/* Content — TODO: Replace placeholder text with real copy */}
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-moss-800/90">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Britain&rsquo;s natural landscapes stand at a critical inflection
            point. Decades of agricultural intensification have degraded soils,
            depleted biodiversity, and diminished the ecosystem services on
            which communities and economies depend. Lapwing Common was founded
            on the conviction that ecological restoration and compelling
            financial returns are not merely compatible&mdash;they are
            inextricably linked.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our strategy targets land assets across the United Kingdom with high
            restoration potential: degraded peatlands, non-native low species
            woodland, brownfield and other land not suitable for food
            production. Through a combination of natural capital appreciation,
            biodiversity net gain credits, carbon sequestration revenue, and
            sustainable land management, we generate multi-layered returns that
            compound over time.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We believe that capital deployed into nature today will define the
            landscape&mdash;both literal and financial&mdash;of tomorrow. By
            aligning investor interests with ecological imperatives, Lapwing
            Common aims to deliver enduring value: for investors, for
            communities, and for the ecosystems that sustain us all.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
