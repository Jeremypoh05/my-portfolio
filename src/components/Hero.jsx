// src/components/Hero.jsx
import { motion } from "framer-motion";
import profile_pic from "../assets/iamges/profile_pic.jpg";

export default function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-12 py-12">
      {/* Left text */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Poh Wai Khang
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Front-End Developer · Software Engineer
          <span className="block mt-2 text-sm text-gray-500 dark:text-gray-400">
            Building clean, performant user interfaces — modern React,
            TypeScript, and Tailwind.
          </span>
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/PohWaiKhang-CV.pdf"
            className="px-5 py-3 rounded-md glass border border-gray-200/40 dark:border-white/6 text-sm font-medium hover:shadow-lg"
            download
          >
            Download CV
          </a>

          <a
            href="#projects"
            className="px-5 py-3 rounded-md bg-gray-900 text-white text-sm font-medium hover:opacity-95"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Right visual card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="flex-1 flex justify-center"
      >
        <div className="tilt-card glass p-6 max-w-sm w-full">
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img
                src={profile_pic}
                alt="profile"
                className="w-full h-56 object-contain bg-black/10"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Poh Wai Khang
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                Software Engineering Graduate • Front-End Dev
              </p>

              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                  React
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
