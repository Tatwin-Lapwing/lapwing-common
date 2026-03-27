"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function InvestmentThesis() {
  return (
    <section
      id="thesis"
      aria-labelledby="thesis-heading"
      className="bg-cream py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 md:flex-row md:gap-16 lg:gap-24">
        
        {/* Section heading - Editorial side column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-12 shrink-0 md:mb-0 md:w-1/3"
        >
          <h2
            id="thesis-heading"
            className="font-heading text-2xl font-medium text-moss-950 md:text-3xl lg:text-4xl"
          >
            Investment Thesis
          </h2>
          <div className="mt-6 h-[1px] w-12 bg-moss-300" />
        </motion.div>

        {/* Content - Constrained width for optimal reading */}
        <div className="max-w-prose space-y-8 text-lg font-light leading-relaxed text-moss-900 md:text-xl md:leading-loose">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <strong className="font-medium text-moss-950">Nature is now investable.</strong> Emerging investment models enable the restoration of degraded ecosystems and the generation of reliable returns. Lapwing Common sits at the forefront of this opportunity, supporting high-integrity nature restoration projects by blending traditional investment principles with emerging capital models.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nature restoration and compelling financial returns are not merely compatible&mdash;they are inextricably linked. It is no secret that the decline in the UK&rsquo;s nature&mdash;degraded soils, depleted biodiversity and diminished landscapes&mdash;is putting the resilience of UK communities and the economy at risk. Restoring these assets and realising the value created is a huge opportunity. We believe when nature is restored, communities thrive and the economy is strengthened. Lapwing Common is an early mover in this market.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We support projects across the United Kingdom looking to thoughtfully restore habitats such as degraded peatlands, woodland, brownfield and other land not suitable for food production.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>We support projects that generate revenue through:</p>
            <ul className="mt-4 list-inside list-disc space-y-2 pl-2 marker:text-moss-400">
              <li>Biodiversity net gain units</li>
              <li>Carbon credits</li>
              <li>Sustainable land management</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}