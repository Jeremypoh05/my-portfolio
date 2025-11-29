import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub, FiAward, FiStar } from "react-icons/fi";
import { useRef, useState } from "react";

const projects = [
  {
    title:
      "SaaS-Based Unified Platform for Client Management with Integrated Website Builder & Project Life Cycle Management ",
    subtitle: "Final Year Project",
    desc: "Multi-tenant SaaS with integrated website builder and Kanban project management. Earned Gold Award at InIIC 2024.",
    link: "https://jplura-official.vercel.app",
    github:
      "https://github.com/Jeremypoh05/JPlura-SaaS-Project-Management-Website-Builder",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind", "SaaS", "Stripe"],
    featured: true,
    gradient: "from-blue-500 via-purple-500 to-pink-600",
    iconBg: "from-blue-500/20 to-purple-600/20",
  },
  {
    title: "EMenu System",
    subtitle: "E-Commerce Platform",
    desc: "Online merchant menu platform with responsive UI and real-time order management.",
    link: "https://emenu.com.my/mygrocery",
    github: "https://github.com/Jeremypoh05/Emenu",
    tags: ["Vue.js", "Nuxt.js", "API Integration"],
    gradient: "from-green-500 to-teal-600",
    iconBg: "from-green-500/20 to-teal-600/20",
  },
  {
    title: "Discord Clone",
    subtitle: "Chat Application",
    desc: "Full-stack real-time chat application featuring direct messaging, voice channels, and server management.",
    link: "https://discord-production-cc86.up.railway.app",
    github: "https://github.com/Jeremypoh05/discord",
    tags: ["Next.js", "Web Socket", "Tailwind"],
    gradient: "from-purple-500 to-indigo-600",
    iconBg: "from-purple-500/20 to-indigo-600/20",
  },
  {
    title: "Spotify Clone",
    subtitle: "Music Streaming App",
    desc: "Full-featured music player with playlist management and audio playback controls.",
    link: "https://spotify-project-six.vercel.app/",
    github: "https://github.com/Jeremypoh05/spotify-project",
    tags: ["Next.js", "Typescript", "Tailwind"],
    gradient: "from-pink-500 to-rose-600",
    iconBg: "from-pink-500/20 to-rose-600/20",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Branding",
    desc: "Modern, responsive portfolio showcasing projects and skills with smooth animations.",
    link: "https://my-portfolio-jp1.s3.ap-southeast-1.amazonaws.com/index.html",
    github: "https://github.com/Jeremypoh05/my-portfolio",
    tags: ["React", "Framer Motion", "Tailwind"],
    gradient: "from-orange-500 to-red-600",
    iconBg: "from-orange-500/20 to-red-600/20",
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
    <div className="w-full">
      {/* Header with floating animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />

        <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
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
            className={project.featured ? "sm:col-span-2" : ""}
          >
            {project.featured ? (
              <FeaturedProjectCard
                project={project}
                handleCardMouseMove={handleCardMouseMove}
              />
            ) : (
              <ProjectCard
                project={project}
                handleCardMouseMove={handleCardMouseMove}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Featured Project Card (3D Tilt + Extra Effects)
function FeaturedProjectCard({ project, handleCardMouseMove }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    // Spotlight
    handleCardMouseMove(e);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -12 }}
      className="glass-spotlight glass p-6 sm:p-8 relative overflow-hidden group"
    >
      {/* Animated gradient border */}
      <div
        className={`absolute -inset-[2px] bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500`}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {/* Background gradient glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}
      />

      <div className="relative z-10">
        {/* Header with Gold Award Badge */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <div className="flex-1 min-w-0">
            <motion.h3
              whileHover={{ x: 5 }}
              className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-2 group-hover:gradient-text transition-all"
            >
              {project.title}
            </motion.h3>
            <p className="text-sm text-[var(--text-muted)] flex items-center gap-2">
              {project.subtitle}
              <FiStar className="w-4 h-4 text-yellow-500" />
            </p>
          </div>

          {/* Gold Award Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm group/badge relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700" />

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiAward className="w-4 h-4 text-yellow-500 relative z-10" />
            </motion.div>
            <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 whitespace-nowrap relative z-10">
              Gold Award
            </span>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-base">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIdx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: tagIdx * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 text-xs font-medium glass rounded-lg text-[var(--text-primary)] cursor-pointer relative overflow-hidden group/tag"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/tag:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">{tag}</span>
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <MagneticButton href={project.link}>
            <div className="flex items-center gap-2">
              <FiExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </div>
          </MagneticButton>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 glass rounded-lg hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-600/10 transition-all text-sm font-medium text-[var(--text-primary)] flex items-center gap-2 group/git relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/git:translate-x-full transition-transform duration-700" />
            <FiGithub className="w-4 h-4 relative z-10 group-hover/git:rotate-12 transition-transform" />
            <span className="relative z-10">GitHub</span>
          </motion.a>
        </div>

        {/* Hover Effect Line */}
        <div
          className={`mt-6 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-full`}
        />
      </div>
    </motion.div>
  );
}

// Regular Project Card
function ProjectCard({ project, handleCardMouseMove }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onMouseMove={handleCardMouseMove}
      className="glass-spotlight glass p-6 sm:p-8 group relative h-full overflow-hidden"
    >
      {/* Gradient border */}
      <div
        className={`absolute -inset-[1px] bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`}
      />

      {/* Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <motion.h3
              whileHover={{ x: 5 }}
              className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1 group-hover:gradient-text transition-all break-words"
            >
              {project.title}
            </motion.h3>
            <p className="text-sm text-[var(--text-muted)]">
              {project.subtitle}
            </p>
          </div>

          {/* Icons */}
          <div className="flex gap-2 flex-shrink-0">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`p-2 glass rounded-lg hover:bg-gradient-to-br ${project.iconBg} transition-all text-[var(--text-primary)] group/icon relative overflow-hidden`}
              aria-label="View project"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/icon:translate-x-full transition-transform duration-500" />
              <FiExternalLink className="w-5 h-5 relative z-10" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 glass rounded-lg hover:bg-gradient-to-br ${project.iconBg} transition-all text-[var(--text-primary)] group/icon relative overflow-hidden`}
              aria-label="View GitHub"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/icon:translate-x-full transition-transform duration-500" />
              <FiGithub className="w-5 h-5 relative z-10" />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIdx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: tagIdx * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 text-xs font-medium glass rounded-lg text-[var(--text-primary)] cursor-pointer relative overflow-hidden group/tag"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/tag:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">{tag}</span>
            </motion.span>
          ))}
        </div>

        {/* Hover Effect Line */}
        <div
          className={`mt-4 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-full`}
        />
      </div>
    </motion.div>
  );
}

// Magnetic Button Component
function MagneticButton({ children, href }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg overflow-hidden group/mag"
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover/mag:opacity-100 transition-opacity" />
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover/mag:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-white/20 blur-xl" />
      </div>
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
