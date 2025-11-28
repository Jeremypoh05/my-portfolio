import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import profile_pic from "../assets/images/MyPic.png";
import { div } from "framer-motion/client";

export default function Hero() {
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div classNcla="w-full">
      <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8 pt-18 lg:pt-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 glass rounded-full"
          >
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
            <span className="text-[var(--text-primary)]">Hi, I'm </span>
            <span className="gradient-text block mt-2">Poh Wai Khang</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-[var(--text-secondary)] mb-2 max-w-2xl mx-auto lg:mx-0"
          >
            Web Developer · Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base text-[var(--text-muted)] mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Crafting modern web experiences using React, TypeScript, and
            Node.js - Solving real problems with end-to-end solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              View Projects
              <FiExternalLink className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/PohWaiKhang-CV.pdf"
              download
              className="px-6 py-3 rounded-xl glass font-medium hover:shadow-lg transition-all text-[var(--text-primary)]"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              {
                icon: FiGithub,
                href: "https://github.com/Jeremypoh05",
                label: "GitHub",
              },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/jeremypoh0205",
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: "mailto:Jeremypoh0205@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 glass rounded-xl hover:shadow-lg transition-all text-[var(--text-primary)]"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-sm"
        >
          <motion.div
            whileHover={{ y: -8 }}
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-4 w-full relative group"
          >
            {/* Decorative elements */}

            <div className="relative z-10">
              {/* Image Container */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20">
                  <img
                    src={profile_pic}
                    alt="Poh Wai Khang"
                    className="w-full h-full object-cover "
                  />
                </div>
                {/* Status Badge */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1.5 glass rounded-full flex items-center gap-2 shadow-lg">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className="text-xs font-medium text-[var(--text-primary)]">
                    Available for hire
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-3 pt-2">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-0.5">
                    Poh Wai Khang
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Software Engineering Graduate
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {["React", "Next.js", "TypeScript", "Tailwind"].map(
                    (tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-2.5 py-1 text-xs font-medium glass rounded-lg text-[var(--text-primary)]"
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
