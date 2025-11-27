// src/components/Experience.jsx
import { motion } from "framer-motion";

const items = [
  {
    title: "System Engineer & Support Intern — Ferrotec",
    date: "Mar 2025 – Jun 2025",
    desc: "Supported ERP/MES systems, SQL queries for production data, VPN & firewall support."
  },
  {
    title: "Web Dev Intern — Channel Soft",
    date: "Oct 2022 – Feb 2023",
    desc: "Developed EMenu features with Vue/Nuxt, implemented responsive UI components and API integration."
  },
  {
    title: "FYP — SaaS-Based Unified Platform (Gold Award)",
    date: "Jun 2024 – Jan 2025",
    desc: "Multi-tenant SaaS with website builder and project lifecycle management (Next.js, Prisma)."
  }
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Experience</h2>
      <div className="space-y-4">
        {items.map((it, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-4 rounded-lg tilt-card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{it.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{it.desc}</p>
              </div>
              <div className="text-sm text-gray-400">{it.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
