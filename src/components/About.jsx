import { motion } from "framer-motion";
import {
  FiAward,
  FiCode,
  FiTarget,
  FiUsers,
  FiMessageCircle,
  FiCoffee,
  FiMusic,
  FiBook,
  FiCamera,
} from "react-icons/fi";
import profile_pic from "../assets/images/MyPic.png";

const stats = [
  { icon: FiCode, label: "Projects", value: "5+" },
  { icon: FiTarget, label: "Experience", value: "1 Year" },
];

const skills = [
  { name: "React", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 70 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Laravel", level: 75 },
  { name: "PostgreSQL", level: 60 },
  { name: "Java", level: 65 },
  { name: "Phyton", level: 60 },
];

const softSkills = [
  {
    icon: FiCode,
    name: "Problem Solving",
    description: "Debug & optimize complex issues",
  },
  {
    icon: FiUsers,
    name: "Team Collaboration",
    description: "Work effectively in agile teams",
  },
  {
    icon: FiTarget,
    name: "Attention to Detail",
    description: "Deliver polished, bug-free code",
  },
];

const languages = [
  { name: "English", proficiency: "Professional" },
  { name: "Chinese", proficiency: "Native" },
  { name: "Malay", proficiency: "Conversational" },
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
    icon: FiBook,
    name: "Reading Tech Blogs",
    color: "from-green-500 to-teal-500",
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
          Passionate developer with a love for creating beautiful, functional
          web experiences
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Profile Info */}
          <div
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 text-center"
          >
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50" />
              <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-white/20">
                <img
                  src={profile_pic}
                  alt="Poh Wai Khang"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              Poh Wai Khang
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mb-6 font-bold">
              Web Developer · Software Engineer
            </p>

            {/* Stats */}
            <div className="space-y-3">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between p-3 glass rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg">
                      <Icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {label}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6"
          >
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <span className="text-xl">🎯</span>
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map(({ icon: Icon, name, color }, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent)]/30 transition-all group"
                >
                  <div
                    className={`p-3 bg-gradient-to-br ${color} bg-opacity-20 rounded-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-center text-[var(--text-secondary)] font-medium leading-tight">
                    {name}
                  </span>
                </motion.div>
              ))}
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
          {/* Bio */}
          <div
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <span className="text-2xl">💼</span>
              My Journey
            </h3>
            <div className="space-y-3 text-base text-[var(--text-secondary)] leading-relaxed text-justify">
              <p>
                I'm a Software Engineering graduate with practical experience in
                building modern web applications using React, Next.js, and
                Tailwind CSS. My Final Year Project was an all-in-one
                multi-tenant SaaS platform that combines project lifecycle
                management with a built-in drag-and-drop website builder. This
                unified system helps businesses manage projects and client
                websites without relying on multiple tools, and it earned the{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  Gold Award at International Invention & Innovative Competition
                  2024
                </span>
                .
              </p>
              <p>
                I enjoy crafting polished, user-focused interfaces for scalable
                web applications. I am currently seeking a{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  full-time Front-End or Full-Stack Developer position in
                  Singapore
                </span>{" "}
                where I can contribute to production-level projects while
                continuously developing my technical expertise.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map(({ name, level }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {name}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Soft Skills & Languages */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onMouseMove={handleCardMouseMove}
          className="glass-spotlight glass p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Soft Skills
          </h3>
          <div className="space-y-4">
            {softSkills.map(({ icon: Icon, name, description }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent)]/30 transition-all"
              >
                <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                    {name}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onMouseMove={handleCardMouseMove}
          className="glass-spotlight glass p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            Languages
          </h3>
          <div className="space-y-4">
            {languages.map(({ name, proficiency }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent)]/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-lg">
                    <FiMessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {name}
                  </span>
                </div>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-teal-600/10 border border-green-500/20 text-green-600 dark:text-green-400">
                  {proficiency}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
