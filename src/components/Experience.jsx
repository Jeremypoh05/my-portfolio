// src/components/Experience.jsx
import { motion } from "framer-motion";
import { FiBriefcase, FiAward, FiCalendar } from "react-icons/fi";

const items = [
  {
    type: "work",
    icon: FiBriefcase,
    title: "System Engineer & Support Intern",
    company: "Ferrotec Power Semiconductor Malaysia Sdn.Bhd",
    date: "Mar 2025 – Jun 2025",
    desc: "Provided comprehensive backend support for enterprise applications including U8 ERP, MES, OA System, and NC UClient. Managed user accounts, configured permissions, and troubleshooted critical issues across departments. Utilized Microsoft SQL Server Management Studio and MySQL to write complex SQL queries for production data retrieval, access auditing, and real-time error tracking. Collaborated with Procurement, Warehouse, and Finance teams to ensure smooth system operations and resolve transaction failures. Additionally, managed network security devices including Sangfor firewall configuration, VPN setup, and access control systems.",
    skills: [
      "SQL",
      "ERP/MES",
      "System Support",
      "SSMS",
      "MySQL",
      "Network Security",
    ],
  },
  {
    type: "work",
    icon: FiBriefcase,
    title: "Web Developer Intern",
    company: "Channel Soft PLT, Johor Bahru",
    date: "Oct 2022 – Feb 2023",
    desc: "Developed and enhanced features for the EMenu System, an online menu platform for merchants, using Vue.js and Nuxt.js. Designed and implemented responsive UI components including navigation drawers, user dashboards, and order history pages with dynamic data rendering via REST APIs. Improved user experience by introducing input validation, multi-language switching, and dynamic address management using Vuex and Vuetify. Worked closely with supervisors to debug and optimize complex functionalities including user authentication, order management, and profile editing features.",
    skills: ["Vue.js", "Nuxt.js", "REST API", "Vuex", "Vuetify", "UI/UX"],
  },
  {
    type: "project",
    icon: FiAward,
    title: "SaaS-Based Unified Platform for Client Management",
    company: "Final Year Project - Gold Award Winner",
    date: "Jun 2024 – Jan 2025",
    desc: "Developed a comprehensive multi-tenant SaaS platform that streamlines client management with an integrated website builder and project lifecycle management system. The platform enables efficient management of subaccounts, each representing individual clients or business units, eliminating the need for separate tools. Built with Next.js for the frontend, Prisma ORM for database management, and PostgreSQL for data storage. Implemented features including drag-and-drop website builder, real-time project tracking, client portal, and automated workflow management.",
    skills: ["Next.js", "Prisma", "PostgreSQL", "SaaS", "TypeScript", "Clerk"],
    award:
      "Gold Award - International Invention & Innovative Competition (InIIC) 2024",
    liveDemo: "jplura-official.vercel.app",
  },
  {
    type: "project",
    icon: FiAward,
    title: "Hotel Management System",
    company: "Final Year Project Competition - Champion Award",
    date: "Jun 2022 – Sep 2022",
    desc: "Developed a comprehensive hotel management system that enables users to browse, book, and manage hotel reservations. The system features an intuitive booking interface, room availability management, reservation tracking, and administrative dashboard for hotel staff. Built with PHP Laravel framework for robust backend functionality, combined with HTML, CSS, and JavaScript for an interactive and responsive user interface.",
    skills: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "MySQL"],
    award: "Champion Award - Final Year Project Competition TECHFEST '22",
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
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">Experience & Achievements</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
          My professional journey, key projects, and awards
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20" />

        <div className="space-y-6 lg:space-y-8">
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
              <div className="hidden md:flex absolute left-[46px] top-8 w-7 h-7 items-center justify-center z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-ping" />
                <div className="relative w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-white dark:border-gray-900" />
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                onMouseMove={handleCardMouseMove}
                className="glass-spotlight glass p-6 sm:p-8 md:ml-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                    <div
                      className={`flex-shrink-0 p-3 rounded-xl ${
                        item.type === "project"
                          ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
                          : "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          item.type === "project"
                            ? "text-yellow-500"
                            : "text-blue-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-[var(--text-secondary)]">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] sm:text-right flex-shrink-0">
                    <FiCalendar className="w-4 h-4" />
                    <span className="whitespace-nowrap">{item.date}</span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-sm sm:text-base">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium glass rounded-lg text-[var(--text-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {item.award && (
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                      <FiAward className="w-4 h-4 text-yellow-500" />
                      <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">
                        {item.award}
                      </span>
                    </div>
                    {item.liveDemo && (
                      <a
                        href={`https://${item.liveDemo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass hover:bg-blue-500/10 transition-colors text-xs font-medium text-blue-500"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
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
