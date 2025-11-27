// src/components/Experience.jsx
import { motion } from "framer-motion";
import { FiBriefcase, FiAward, FiCalendar } from "react-icons/fi";

const items = [
  {
    type: "work",
    icon: FiBriefcase,
    title: "System Engineer & Support Intern",
    company: "Ferrotec",
    date: "Mar 2025 – Jun 2025",
    desc: "Supported ERP/MES systems, SQL queries for production data, VPN & firewall support.",
    skills: ["SQL", "ERP/MES", "System Support"],
  },
  {
    type: "work",
    icon: FiBriefcase,
    title: "Web Dev Intern",
    company: "Channel Soft",
    date: "Oct 2022 – Feb 2023",
    desc: "Developed EMenu features with Vue/Nuxt, implemented responsive UI components and API integration.",
    skills: ["Vue.js", "Nuxt.js", "API Integration"],
  },
  {
    type: "project",
    icon: FiAward,
    title: "SaaS-Based Unified Platform",
    company: "Final Year Project - Gold Award",
    date: "Jun 2024 – Jan 2025",
    desc: "Multi-tenant SaaS with website builder and project lifecycle management (Next.js, Prisma).",
    skills: ["Next.js", "Prisma", "PostgreSQL", "SaaS"],
  },
];

export default function Experience() {
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
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          My professional journey and key achievements
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20" />

        <div className="space-y-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-[46px] top-8 w-7 h-7 items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-ping" />
                <div className="relative w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-white dark:border-gray-900" />
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                onMouseMove={handleCardMouseMove}
                className="glass-spotlight glass p-6 sm:p-8 md:ml-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        item.type === "project"
                          ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
                          : "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
                      }`}
                    >
                      <item.icon
                        className={`w-6 h-6 ${
                          item.type === "project"
                            ? "text-yellow-500"
                            : "text-blue-500"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-[var(--text-secondary)]">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] sm:text-right">
                    <FiCalendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium glass rounded-lg text-[var(--text-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {item.type === "project" && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                    <FiAward className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">
                      Gold Award Winner
                    </span>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
