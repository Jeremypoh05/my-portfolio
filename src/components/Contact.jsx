// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from "react-icons/fi";

const contactMethods = [
  {
    icon: FiMail,
    label: "Email",
    value: "Jeremypoh0205@gmail.com",
    href: "mailto:Jeremypoh0205@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "jeremypoh0205",
    href: "https://www.linkedin.com/in/jeremypoh0205",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "Your GitHub",
    href: "#",
    gradient: "from-gray-700 to-gray-500",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Singapore",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Contact() {
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
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          I'm available for internships and freelance opportunities. Let's build
          something amazing together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 p-4 glass rounded-xl hover:shadow-lg transition-all group"
                    >
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${method.gradient} bg-opacity-10`}
                      >
                        <method.icon
                          className={`w-5 h-5 bg-gradient-to-br ${method.gradient} bg-clip-text text-transparent`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[var(--text-muted)] mb-1">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium text-[var(--text-primary)] group-hover:gradient-text transition-all">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass rounded-xl">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${method.gradient} bg-opacity-10`}
                      >
                        <method.icon
                          className={`w-5 h-5 bg-gradient-to-br ${method.gradient} bg-clip-text text-transparent`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[var(--text-muted)] mb-1">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium text-[var(--text-primary)]">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 sm:p-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass rounded-full">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                Available Now
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              Ready to start immediately
            </p>
          </motion.div>
        </motion.div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onMouseMove={handleCardMouseMove}
          className="glass-spotlight glass p-6 sm:p-8 flex flex-col justify-center"
        >
          <div className="text-center mb-8">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 mb-4">
              <FiSend className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              Let's Work Together
            </h3>
            <p className="text-[var(--text-secondary)] max-w-md mx-auto">
              I'm actively seeking front-end development opportunities in
              Singapore. Whether it's an internship, freelance project, or
              full-time role, I'd love to hear from you!
            </p>
          </div>

          <div className="space-y-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:Jeremypoh0205@gmail.com"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <FiMail className="w-5 h-5" />
              Send me an email
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/jeremypoh0205"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl glass font-medium hover:shadow-lg transition-all text-[var(--text-primary)]"
            >
              <FiLinkedin className="w-5 h-5" />
              Connect on LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/PohWaiKhang-CV.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl glass font-medium hover:shadow-lg transition-all text-[var(--text-primary)]"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-[var(--text-muted)]">
          © 2025 Poh Wai Khang. Built with React & Tailwind CSS
        </p>
      </motion.div>
    </div>
  );
}
