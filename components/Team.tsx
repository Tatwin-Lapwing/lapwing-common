"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  initials: string;
  role: string;
  linkedIn: string;
}

const team: TeamMember[] = [
  {
    name: "Edward Kerr",
    initials: "EK",
    role: "Co-Founder",
    linkedIn: "#", // TODO: Replace with real LinkedIn profile URL
  },
  {
    name: "Tatwin Owen Edmunds",
    initials: "TE",
    role: "Co-Founder",
    linkedIn: "#", // TODO: Replace with real LinkedIn profile URL
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="bg-moss-950 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="team-heading"
            className="font-heading text-3xl text-cream md:text-4xl lg:text-5xl"
          >
            Our Team
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-moss-500" />
        </motion.div>

        {/* Team grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/*
                TODO: Replace placeholder with real team photo.
                Use next/image with fill prop:
                  <Image src="/team/edward-kerr.jpg" alt="..." fill className="object-cover" />
              */}
              <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-moss-800 transition-all duration-500 group-hover:bg-moss-700">
                <span
                  className="font-heading text-7xl text-moss-600/40 transition-colors duration-500 group-hover:text-moss-500/40"
                  aria-hidden="true"
                >
                  {member.initials}
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <h3 className="font-heading text-2xl text-cream">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-earth-400">{member.role}</p>
                </div>

                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-earth-400 transition-colors hover:text-cream"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
