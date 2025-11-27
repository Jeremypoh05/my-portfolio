// src/components/About.jsx
import { motion } from "framer-motion";
import profile_pic from "../assets/iamges/profile_pic.jpg";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="glass p-4 rounded-2xl w-64 text-center">
            <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden border border-gray-200/40">
              <img
                src={profile_pic}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">Poh Wai Khang</h4>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Frontend Developer · Software Engineer</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a Software Engineering graduate with strong experience in React, Next.js and Tailwind CSS. My final year project — a multi-tenant SaaS platform with an integrated website builder — earned the Gold Award at InIIC 2024. I enjoy building polished, user-centered interfaces and improving performance for scalable web apps. I'm actively seeking a Front-End Development internship in Singapore to gain real-world experience and grow into a full-time role.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL"
            ].map((s) => (
              <span key={s} className="px-3 py-2 text-sm glass rounded-lg text-gray-700 dark:text-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
