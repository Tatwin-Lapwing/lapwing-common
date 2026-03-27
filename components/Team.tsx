"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  image: string;
  role: string;
  linkedIn: string;
}

const team: TeamMember[] = [
  {
    name: "Tatwin Owen Edmunds",
    image: "/team/tatwin.jpg",
    role: "Co-Founder",
    linkedIn: "https://www.linkedin.com/in/tatwin-owen-edmunds-7b708b46/", 
  },
  {
    name: "Edward Kerr",
    image: "/team/edward.jpg",
    role: "Co-Founder",
    linkedIn: "https://www.linkedin.com/in/edwardkerr-me/", 
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
      className="bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center md:items-start md:text-left"
        >
          <h2
            id="team-heading"
            className="font-heading text-2xl font-medium text-moss-950 md:text-3xl lg:text-4xl"
          >
            Our Team
          </h2>
          <div className="mt-6 h-[1px] w-12 bg-moss-300" />
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-earth-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-2xl text-moss-950">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-moss-600">
                    {member.role}
                  </p>
                </div>

                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-moss-400 transition-colors hover:text-moss-900"
                >
                  <LinkedInIcon className="mt-1 h-5 w-5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}