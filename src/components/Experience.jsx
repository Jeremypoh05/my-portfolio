import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiBriefcase, FiAward, FiCalendar, FiExternalLink } from "react-icons/fi";
import { useRef, useState } from "react";

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
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    type: "work",
    icon: FiBriefcase,
    title: "Web Developer Intern",
    company: "Channel Soft PLT, Johor Bahru",
    date: "Oct 2022 – Feb 2023",
    desc: "Developed and enhanced features for the EMenu System, an online menu platform for merchants, using Vue.js and Nuxt.js. Designed and implemented responsive UI components including navigation drawers, user dashboards, and order history pages with dynamic data rendering via REST APIs. Improved user experience by introducing input validation, multi-language switching, and dynamic address management using Vuex and Vuetify. Worked closely with supervisors to debug and optimize complex functionalities including user authentication, order management, and profile editing features.",
    skills: ["Vue.js", "Nuxt.js", "REST API", "Vuex", "Vuetify", "UI/UX"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    type: "project",
    icon: FiAward,
    title: "SaaS-Based Unified Platform for Client Management",
    company: "Final Year Project - Gold Award Winner",
    date: "Jun 2024 – Jan 2025",
    desc: "Developed a comprehensive multi-tenant SaaS platform that streamlines client management with an integrated website builder and project lifecycle management system. The platform enables efficient management of subaccounts, each representing individual clients or business units, eliminating the need for separate tools. Built with Next.js for the frontend, Prisma ORM for database management, and PostgreSQL for data storage. Implemented features including drag-and-drop website builder, real-time project tracking, client portal, and automated workflow management.",
    skills: ["Next.js", "Prisma", "PostgreSQL", "SaaS", "TypeScript", "Clerk"],
    award: "Gold Award - International Invention & Innovative Competition (InIIC) 2024",
    liveDemo: "jplura-official.vercel.app",
    gradient: "from-purple-500 to-pink-600",
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
    gradient: "from-orange-500 to-red-600",
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
      {/* Header with floating effect */}
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
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative">
          <span className="gradient-text">Experience & Achievements</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
          My professional journey, key projects, and awards
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Enhanced Timeline Line with gradient */}
        <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-[2px] overflow-hidden">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
          />
          {/* Animated glow */}
          <motion.div
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 w-full h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent blur-sm"
          />
        </div>

        <div className="space-y-6 lg:space-y-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              {/* Enhanced Timeline Dot with pulse */}
              <div className="hidden md:flex absolute left-[46px] top-8 w-7 h-7 items-center justify-center z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-full blur-md`}
                />
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  className={`relative w-4 h-4 bg-gradient-to-br ${item.gradient} rounded-full border-2 border-white dark:border-gray-900 shadow-lg`}
                />
              </div>

              {/* 3D Tilt Card */}
              <TiltCard3D>
                <motion.div
                  whileHover={{ y: -4 }}
                  onMouseMove={handleCardMouseMove}
                  className="glass-spotlight glass p-6 sm:p-8 md:ml-24 relative overflow-hidden group"
                >
                  {/* Gradient border on hover */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                        {/* Icon with magnetic effect */}
                        <MagneticDiv>
                          <div
                            className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20 group-hover:scale-110 transition-transform cursor-pointer shadow-lg`}
                          >
                            <item.icon
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                                item.type === "project"
                                  ? "text-yellow-500"
                                  : "text-white-500"
                              }`}
                            />
                          </div>
                        </MagneticDiv>

                        <div className="flex-1 min-w-0">
                          <motion.h3
                            whileHover={{ x: 5 }}
                            className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1 cursor-pointer"
                          >
                            {item.title}
                          </motion.h3>
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

                    {/* Skills with shimmer effect */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.skills.map((skill, skillIdx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 text-xs font-medium glass rounded-lg text-[var(--text-primary)] cursor-pointer relative overflow-hidden group/skill"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700" />
                          <span className="relative z-10">{skill}</span>
                        </motion.span>
                      ))}
                    </div>

                    {/* Award and Demo with enhanced styling */}
                    {item.award && (
                      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 relative overflow-hidden group/award cursor-pointer"
                        >
                          {/* Shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent -translate-x-full group-hover/award:translate-x-full transition-transform duration-700" />
                          
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <FiAward className="w-4 h-4 text-yellow-500 relative z-10" />
                          </motion.div>
                          <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 relative z-10">
                            {item.award}
                          </span>
                        </motion.div>

                        {item.liveDemo && (
                          <motion.a
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            href={`https://${item.liveDemo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass hover:bg-blue-500/10 transition-all text-xs font-medium text-blue-500 group/demo relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover/demo:translate-x-full transition-transform duration-700" />
                            
                            <FiExternalLink className="w-4 h-4 relative z-10 group-hover/demo:rotate-12 transition-transform" />
                            <span className="relative z-10">Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
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
    setPosition({ x: x * 0.2, y: y * 0.2 });
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