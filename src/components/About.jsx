// src/components/About.jsx
import { motion } from "framer-motion";
import { FiAward, FiCode, FiTarget } from "react-icons/fi";
import profile_pic from "../assets/images/profile_pic.jpg";

const stats = [
  { icon: FiCode, label: "Projects", value: "10+" },
  { icon: FiAward, label: "Awards", value: "Gold" },
  { icon: FiTarget, label: "Experience", value: "2+ Years" },
];

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Prisma", level: 75 },
  { name: "PostgreSQL", level: 70 },
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
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          Passionate developer with a love for creating beautiful, functional
          web experiences
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Frontend Developer · Software Engineer
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
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              I'm a Software Engineering graduate with strong experience in
              React, Next.js and Tailwind CSS. My final year project — a
              multi-tenant SaaS platform with an integrated website builder —
              earned the{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                Gold Award at InIIC 2024
              </span>
              .
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I enjoy building polished, user-centered interfaces and improving
              performance for scalable web apps. I'm actively seeking a{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                Front-End Development internship in Singapore
              </span>{" "}
              to gain real-world experience and grow into a full-time role.
            </p>
          </div>

          {/* Skills */}
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
    </div>
  );
}
