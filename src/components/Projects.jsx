// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiAward } from "react-icons/fi";

const projects = [
  {
    title: "SaaS-Based Unified Platform",
    subtitle: "Final Year Project",
    desc: "Multi-tenant SaaS with integrated website builder and Kanban project management. Earned Gold Award at InIIC 2024.",
    link: "https://jplura-official.vercel.app",
    github: "#",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    featured: true,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "EMenu System",
    subtitle: "E-Commerce Platform",
    desc: "Online merchant menu platform with responsive UI and real-time order management.",
    link: "#",
    github: "#",
    tags: ["Vue.js", "Nuxt.js", "API Integration"],
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Spotify Clone",
    subtitle: "Music Streaming App",
    desc: "Full-featured music player with playlist management and audio playback controls.",
    link: "#",
    github: "#",
    tags: ["React", "Spotify API", "Tailwind"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Branding",
    desc: "Modern, responsive portfolio showcasing projects and skills with smooth animations.",
    link: "#",
    github: "#",
    tags: ["React", "Framer Motion", "Tailwind"],
    gradient: "from-purple-500 to-indigo-600",
  },
];

export default function Projects() {
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          A collection of my recent work and side projects
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            onMouseMove={handleCardMouseMove}
            className={`glass-spotlight glass p-6 sm:p-8 group relative ${
              project.featured ? "sm:col-span-2" : ""
            }`}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}
            />

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg">
                <FiAward className="w-4 h-4 text-white" />
                <span className="text-xs font-bold text-white">Gold Award</span>
              </div>
            )}

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 glass rounded-lg hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-600/10 transition-all text-[var(--text-primary)]"
                    aria-label="View project"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 glass rounded-lg hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-600/10 transition-all text-[var(--text-primary)]"
                    aria-label="View GitHub"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Description */}
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-xs font-medium glass rounded-lg text-[var(--text-primary)]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Hover Effect Line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium hover:shadow-lg transition-all text-[var(--text-primary)]"
        >
          View All Projects
          <FiExternalLink className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  );
}
