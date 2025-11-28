// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const contactMethods = [
  {
    icon: FiMail,
    label: "Email",
    value: "Jeremypoh0205@gmail.com",
    href: "mailto:Jeremypoh0205@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Poh Wai Khang",
    href: "https://www.linkedin.com/in/jeremypoh0205",
    color: "text-blue-600",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+60 11-1630 5241",
    href: "https://wa.me/601116305241",
    color: "text-green-500",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "https://github.com/Jeremypoh05",
    href: "https://github.com/Jeremypoh05",
    color: "text-gray-400",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Malaysia",
    color: "text-emerald-500",
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
    <div className="w-full">
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
          I am currently available for immediate Full-Time Web
          Developer/Software Engineer positions. Send me an email and I look forward
          to discussing your team's needs.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info - 简化设计 */}
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

            <div className="space-y-3">
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
                      className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all group"
                    >
                      <div className="flex-shrink-0">
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[var(--text-muted)] mb-0.5">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)]">
                      <div className="flex-shrink-0">
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[var(--text-muted)] mb-0.5">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium text-[var(--text-primary)] truncate">
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
            className="glass-spotlight glass p-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-3 glass rounded-full">
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
              I'm actively seeking web development opportunities in
              Singapore. Whether it's an internship, freelance project, or
              full-time role, I'd love to hear from you!
            </p>
          </div>

          <div className="space-y-3">
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
              href="https://wa.me/601116305241"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
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
