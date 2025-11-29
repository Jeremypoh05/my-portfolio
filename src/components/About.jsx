import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiAward,
  FiCode,
  FiTarget,
  FiUsers,
  FiMessageCircle,
  FiMusic,
  FiCamera,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { FaBasketballBall } from "react-icons/fa";
import { useRef, useState } from "react";
import profile_pic from "../assets/images/MyPic.png";

const stats = [
  {
    icon: FiCode,
    label: "Projects",
    value: "5+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiTarget,
    label: "Experience",
    value: "1 Year",
    color: "from-purple-500 to-pink-500",
  },
];

const skills = [
  { name: "React", level: 80, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Language" },
  { name: "Tailwind CSS", level: 90, category: "Styling" },
  { name: "Laravel", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 60, category: "Database" },
  { name: "Java", level: 65, category: "Language" },
  { name: "Python", level: 60, category: "Language" },
];

const softSkills = [
  {
    icon: FiCode,
    name: "Problem Solving",
    description: "Debug & optimize complex issues",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiUsers,
    name: "Team Collaboration",
    description: "Work effectively in agile teams",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FiTarget,
    name: "Attention to Detail",
    description: "Deliver polished, bug-free code",
    color: "from-green-500 to-teal-500",
  },
];

const languages = [
  { name: "English", proficiency: "Professional", level: 85 },
  { name: "Chinese", proficiency: "Native", level: 100 },
  { name: "Malay", proficiency: "Conversational", level: 70 },
];

const hobbies = [
  {
    icon: FiCode,
    name: "Coding Side Projects",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiMusic,
    name: "Music & Concerts",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FaBasketballBall,
    name: "Play Basketball",
    color: "from-red-500 to-red-800",
  },
  { icon: FiCamera, name: "Photography", color: "from-orange-500 to-red-500" },
];

export default function About() {
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
        {/* Decorative elements */}
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
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
          Passionate developer with a love for creating beautiful, functional
          web experiences
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Profile Card with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Profile Info - 3D Tilt Card */}
          <TiltCard3D>
            <div className="glass-spotlight glass p-6 text-center relative overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="relative inline-block mb-4">
                  {/* Rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50"
                  />

                  <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-white/20">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                      <img
                        src={profile_pic}
                        alt="Poh Wai Khang"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Poh Wai Khang
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-6 font-bold">
                  Web Developer · Software Engineer
                </p>

                {/* Stats with magnetic effect */}
                <div className="space-y-3">
                  {stats.map(({ icon: Icon, label, value, color }) => (
                    <MagneticDiv key={label}>
                      <div className="flex items-center justify-between p-3 glass rounded-lg group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 bg-gradient-to-br ${color} bg-opacity-20 rounded-lg group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-[var(--text-secondary)]">
                            {label}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-[var(--text-primary)]">
                          {value}
                        </span>
                      </div>
                    </MagneticDiv>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard3D>

          {/* Hobbies with shimmer effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 relative overflow-hidden group"
          >
            {/* Animated border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl"
                >
                  🎯
                </motion.span>
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {hobbies.map(({ icon: Icon, name, color }, idx) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent)]/30 transition-all group/hobby cursor-pointer relative overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/hobby:translate-x-full transition-transform duration-1000" />

                    <div
                      className={`p-3 bg-gradient-to-br ${color} bg-opacity-20 rounded-lg group-hover/hobby:scale-110 transition-transform relative`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-center text-[var(--text-secondary)] font-medium leading-tight relative z-10">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bio & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Bio with glow effect */}
          <div
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 sm:p-8 relative overflow-hidden group"
          >
            {/* Glow border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                My Journey
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed text-justify">
                <p>
                  I'm a Software Engineering graduate with practical experience
                  in building modern web applications using React, Next.js, and
                  Tailwind CSS. My Final Year Project was an all-in-one
                  multi-tenant SaaS platform that combines project lifecycle
                  management with a built-in drag-and-drop website builder. This
                  unified system helps businesses manage projects and client
                  websites without relying on multiple tools, and it earned the{" "}
                  <span className="font-semibold text-[var(--text-primary)] relative inline-block group/award">
                    <FiStar className="inline w-4 h-4 text-yellow-500 mb-1" />{" "}
                    Gold Award at International Invention & Innovative
                    Competition 2024
                  </span>
                  .
                </p>
                <p>
                  I enjoy crafting polished, user-focused interfaces for
                  scalable web applications. I am currently seeking a{" "}
                  <span className="font-semibold text-[var(--text-primary)] relative">
                    <FiTrendingUp className="inline w-4 h-4 text-green-500 mb-1" />{" "}
                    full-time Front-End or Full-Stack Developer position in
                    Singapore
                  </span>{" "}
                  where I can contribute to production-level projects while
                  continuously developing my technical expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills with animated bars */}
          <div
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 sm:p-8 relative overflow-hidden group"
          >
            {/* Glow border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map(({ name, level, category }, idx) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="space-y-2 p-3 rounded-lg bg-[var(--card-bg)]/50 border border-[var(--glass-border)] hover:border-[var(--accent)]/30 transition-all group/skill"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          {name}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] ml-2">
                          {category}
                        </span>
                      </div>
                      <span className="text-xs text-[var(--text-muted)] font-semibold">
                        {level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                          delay: idx * 0.05,
                        }}
                        className="h-full relative"
                      >
                        {/* Animated gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                        {/* Shine effect */}
                        <motion.div
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: idx * 0.1,
                          }}
                          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Soft Skills & Languages */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
        {/* Soft Skills with glow cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onMouseMove={handleCardMouseMove}
          className="glass-spotlight glass p-6 sm:p-8 relative overflow-hidden group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map(
                ({ icon: Icon, name, description, color }, idx) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent)]/30 transition-all group/soft relative overflow-hidden cursor-pointer"
                  >
                    {/* Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/soft:translate-x-full transition-transform duration-1000" />

                    <div
                      className={`flex-shrink-0 p-2.5 bg-gradient-to-br ${color} bg-opacity-20 rounded-lg group-hover/soft:scale-110 transition-transform relative z-10`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0 relative z-10">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                        {name}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Languages with progress rings */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onMouseMove={handleCardMouseMove}
          className="glass-spotlight glass p-6 sm:p-8 relative overflow-hidden group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <span className="text-2xl">🌐</span>
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map(({ name, proficiency, level }, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group/lang cursor-pointer"
                >
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent)]/30 transition-all relative overflow-hidden">
                    {/* Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/lang:translate-x-full transition-transform duration-1000" />

                    <div className="flex items-center gap-3 relative z-10">
                      <div className="p-2.5 bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-lg group-hover/lang:scale-110 transition-transform">
                        <FiMessageCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        {name}
                      </span>
                    </div>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-teal-600/10 border border-green-500/20 text-green-600 dark:text-green-400 relative z-10">
                      {proficiency}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-2 h-1.5 bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: idx * 0.1,
                      }}
                      className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full relative"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 3D Tilt Card Component
function TiltCard3D({ children }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
      className="group"
    >
      {children}
    </motion.div>
  );
}

// Magnetic Div Component
function MagneticDiv({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
