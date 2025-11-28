import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiArrowRight,
} from "react-icons/fi";
import { useState, useRef } from "react";
import profile_pic from "../assets/images/MyPic.png";

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  // 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

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

    // Spotlight effect
    const card = e.currentTarget;
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${xPercent}%`);
    card.style.setProperty("--mouse-y", `${yPercent}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-12 pt-22 lg:pt-24">
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
            className="inline-block px-4 py-2 mb-6 glass rounded-full relative overflow-hidden group"
          >
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
            <span className="text-sm font-medium text-[var(--text-secondary)] relative z-10">
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
            Crafting modern web experiences using React, TypeScript, and Node.js
            - Solving real problems with end-to-end solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            {/* Magnetic Glow Button */}
            <AnimatedBorderButton href="#projects">
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </AnimatedBorderButton>

            {/* Glass Button with Border Animation */}
            <AnimatedBorderButton href="/PohWaiKhang-CV.pdf" download>
              Download CV
            </AnimatedBorderButton>
          </motion.div>

          {/* Social Links with Glow Effect */}
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
                color: "from-gray-500 to-gray-700",
              },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/jeremypoh0205",
                label: "LinkedIn",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: FiMail,
                href: "mailto:Jeremypoh0205@gmail.com",
                label: "Email",
                color: "from-purple-500 to-pink-500",
              },
            ].map(({ icon: Icon, href, label, color }) => (
              <GlowButton key={label} href={href} color={color} label={label}>
                <Icon className="w-5 h-5" />
              </GlowButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual Card - 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-sm"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="glass-spotlight glass p-4 w-full relative group"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            <div className="relative z-10 bg-[var(--card-bg)] rounded-2xl p-4">
              {/* Image Container */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20">
                  <div className="w-full aspect-square bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                    <img
                      src={profile_pic}
                      alt="Poh Wai Khang"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Status Badge with Pulse */}
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

                {/* Tech Stack with Shimmer */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {["React", "Next.js", "TypeScript", "Tailwind"].map(
                    (tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2.5 py-1 text-xs font-medium glass rounded-lg text-[var(--text-primary)] relative overflow-hidden group/tech"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/tech:translate-x-full transition-transform duration-1000" />
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

// Magnetic Button Component
function MagneticButton({ children, href }) {
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg overflow-hidden group"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-white/20 blur-xl" />
      </div>
      {children}
    </motion.a>
  );
}

// Animated Border Button
function AnimatedBorderButton({ children, href, download }) {
  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 rounded-xl glass font-medium text-[var(--text-primary)] overflow-hidden group"
    >
      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ padding: "2px" }}
      >
        <div className="w-full h-full bg-[var(--card-bg)] rounded-xl flex items-center justify-center">
          <span className="relative z-10">{children}</span>
        </div>
      </div>
      <span className="relative z-10 group-hover:opacity-0">{children}</span>
    </motion.a>
  );
}

// Glow Button Component
function GlowButton({ children, href, label, color }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative p-3 glass rounded-xl text-[var(--text-primary)] group"
      aria-label={label}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-50 blur-lg transition-opacity`}
      />
      <div className="relative z-10">{children}</div>
    </motion.a>
  );
}
