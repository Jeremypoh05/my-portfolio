import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiSend,
  FiDownload,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";

const contactMethods = [
  {
    icon: FiMail,
    label: "Email",
    value: "Jeremypoh0205@gmail.com",
    href: "mailto:Jeremypoh0205@gmail.com",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Poh Wai Khang",
    href: "https://www.linkedin.com/in/jeremypoh0205",
    color: "from-blue-600 to-blue-700",
    iconColor: "text-zinc-300",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+60 11-1630 5241",
    href: "https://wa.me/601116305241",
    color: "from-green-500 to-emerald-600",
    iconColor: "text-green-500",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "https://github.com/Jeremypoh05",
    href: "https://github.com/Jeremypoh05",
    color: "from-gray-500 to-gray-700",
    iconColor: "text-gray-400",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Malaysia",
    color: "from-pink-300 to-rose-500",
    iconColor: "text-rose-500",
  },
];

const quickActions = [
  {
    icon: FiMail,
    label: "Send me an email",
    href: "mailto:Jeremypoh0205@gmail.com",
    gradient: "from-blue-500 to-purple-600",
    hoverGradient: "from-blue-600 to-purple-700",
  },
  {
    icon: FaWhatsapp,
    label: "Chat on WhatsApp",
    href: "https://wa.me/601116305241",
    gradient: "from-green-500 to-emerald-600",
    hoverGradient: "from-green-600 to-emerald-700",
  },
  {
    icon: FiLinkedin,
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/jeremypoh0205",
    gradient: "glass",
    isGlass: true,
  },
  {
    icon: FiDownload,
    label: "Download CV",
    href: "/PohWaiKhang-CV.pdf",
    gradient: "glass",
    isGlass: true,
    download: true,
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
      {/* Header with floating animation */}
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
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />

        <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
          I am currently available for immediate Full-Time Web
          Developer/Software Engineer positions. Send me an email and I look
          forward to discussing your team's needs.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Contact Methods Card */}
          <TiltCard3D>
            <div
              onMouseMove={handleCardMouseMove}
              className="glass-spotlight glass p-6 sm:p-8 relative overflow-hidden group"
            >
              {/* Gradient border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                  <span className="text-2xl">📬</span>
                  Contact Information
                </h3>

                <div className="space-y-3">
                  {contactMethods.map((method, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {method.href ? (
                        <MagneticDiv>
                          <a
                            href={method.href}
                            target={
                              method.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              method.href.startsWith("http")
                                ? "noreferrer"
                                : undefined
                            }
                            className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all group/contact relative overflow-hidden"
                          >
                            {/* Shimmer on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/contact:translate-x-full transition-transform duration-700" />

                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className={`flex-shrink-0 p-2.5 bg-gradient-to-br ${method.color} bg-opacity-20 rounded-lg relative z-10`}
                            >
                              <method.icon
                                className={`w-5 h-5 ${method.iconColor}`}
                              />
                            </motion.div>
                            <div className="flex-1 min-w-0 relative z-10">
                              <p className="text-xs text-[var(--text-muted)] mb-0.5">
                                {method.label}
                              </p>
                              <p className="text-sm font-medium text-[var(--text-primary)] group-hover/contact:gradient-text transition-all truncate">
                                {method.value}
                              </p>
                            </div>
                          </a>
                        </MagneticDiv>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] relative overflow-hidden group/contact">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/contact:translate-x-full transition-transform duration-700" />

                          <div
                            className={`flex-shrink-0 p-2.5 bg-gradient-to-br ${method.color} bg-opacity-20 rounded-lg relative z-10`}
                          >
                            <method.icon
                              className={`w-5 h-5 ${method.iconColor}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0 relative z-10">
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
            </div>
          </TiltCard3D>

          {/* Availability Card with pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={handleCardMouseMove}
            className="glass-spotlight glass p-6 text-center relative overflow-hidden group"
          >
            {/* Gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-3 glass rounded-full"
              >
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  Available Now
                </span>
              </motion.div>
              <p className="text-sm text-[var(--text-secondary)]">
                Ready to start immediately
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Contact CTA with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <TiltCard3D>
            <div
              onMouseMove={handleCardMouseMove}
              className="glass-spotlight glass p-6 sm:p-8 flex flex-col justify-center h-full relative overflow-hidden group"
            >
              {/* Gradient border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 mb-4 relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50" />
                    <FiSend className="w-8 h-8 text-blue-500 relative z-10" />
                  </motion.div>

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
                  {quickActions.map((action, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {action.isGlass ? (
                        <ShimmerButton
                          href={action.href}
                          download={action.download}
                          icon={action.icon}
                        >
                          {action.label}
                        </ShimmerButton>
                      ) : (
                        <MagneticButton
                          href={action.href}
                          gradient={action.gradient}
                          icon={action.icon}
                        >
                          {action.label}
                        </MagneticButton>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard3D>
        </motion.div>
      </div>

      {/* Footer with gradient line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center relative"
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent mb-8" />
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="text-sm text-[var(--text-muted)] inline-block cursor-default"
        >
          © 2025 Poh Wai Khang. Built with React & Tailwind CSS ✨
        </motion.p>
      </motion.div>
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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
    setPosition({ x: x * 0.15, y: y * 0.15 });
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

// Magnetic Button Component
function MagneticButton({ children, href, gradient, icon: Icon }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r ${gradient} text-white font-medium shadow-lg overflow-hidden group/mag relative`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/mag:opacity-100 transition-opacity blur-xl" />

      <Icon className="w-5 h-5 relative z-10 group-hover/mag:rotate-12 transition-transform" />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

// Shimmer Button Component
function ShimmerButton({ children, href, download, icon: Icon }) {
  return (
    <motion.a
      href={href}
      download={download}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl glass font-medium hover:shadow-lg transition-all text-[var(--text-primary)] relative overflow-hidden group/shimmer"
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/shimmer:translate-x-full transition-transform duration-1000" />

      <Icon className="w-5 h-5 relative z-10 group-hover/shimmer:rotate-12 transition-transform" />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
