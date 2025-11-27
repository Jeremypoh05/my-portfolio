// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS-Based Unified Platform (FYP) — Gold Award",
    desc: "Multi-tenant SaaS with integrated website builder and Kanban project management.",
    link: "https://jplura-official.vercel.app",
  },
  {
    title: "EMenu System",
    desc: "Online merchant menu platform (Vue/Nuxt).",
    link: "#",
  },
  {
    title: "Spotify Clone",
    desc: "Music player UI & playback features.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
            className="glass p-4 rounded-2xl tilt-card block"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
              {p.desc}
            </p>
            <div className="mt-4 text-xs text-gray-400">View →</div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
