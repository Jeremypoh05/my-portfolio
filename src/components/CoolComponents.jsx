// src/components/CoolComponents.jsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

// 1. Magnetic Button - 磁吸按钮
export function MagneticButton({ children, href, onClick, className = "" }) {
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

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg overflow-hidden group ${className}`}
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-white/20 blur-xl" />
      </div>
      <span className="relative z-10">{children}</span>
    </Component>
  );
}

// 2. Shimmer Button - 闪光按钮
export function ShimmerButton({ children, href, onClick, className = "" }) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-xl glass font-medium text-[var(--text-primary)] overflow-hidden group ${className}`}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <span className="relative z-10">{children}</span>
    </Component>
  );
}

// 3. Glow Card - 发光卡片
export function GlowCard({
  children,
  className = "",
  glowColor = "from-blue-500 to-purple-600",
}) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      className={`glass-spotlight glass relative group ${className}`}
    >
      {/* Animated border glow */}
      <div
        className={`absolute -inset-[1px] bg-gradient-to-r ${glowColor} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// 4. 3D Tilt Card - 3D倾斜卡片
export function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      className={`glass ${className}`}
    >
      {children}
    </motion.div>
  );
}

// 5. Animated Border Button - 动态边框按钮
export function AnimatedBorderButton({
  children,
  href,
  onClick,
  className = "",
}) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-xl overflow-hidden group ${className}`}
    >
      {/* Rotating border */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-[-2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {/* Inner background */}
      <div className="absolute inset-[2px] bg-[var(--card-bg)] rounded-xl" />
      <span className="relative z-10 font-medium text-[var(--text-primary)]">
        {children}
      </span>
    </Component>
  );
}

// 6. Ripple Button - 波纹按钮
export function RippleButton({ children, href, onClick, className = "" }) {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    onClick?.(e);
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={addRipple}
      className={`relative px-6 py-3 rounded-xl glass font-medium text-[var(--text-primary)] overflow-hidden ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}

// 7. Floating Card - 悬浮卡片
export function FloatingCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      animate={{
        y: [0, -10, 0],
      }}
    //   transition={{
    //     duration: 3,
    //     repeat: Infinity,
    //     ease: "easeInOut",
    //   }}
      className={`glass ${className}`}
    >
      {children}
    </motion.div>
  );
}

// 8. Gradient Border Card - 渐变边框卡片
export function GradientBorderCard({ children, className = "" }) {
  return (
    <div
      className={`relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ${className}`}
    >
      <div className="bg-[var(--card-bg)] rounded-2xl p-6">{children}</div>
    </div>
  );
}

// 9. Spotlight Button - 聚光灯按钮
export function SpotlightButton({ children, href, onClick, className = "" }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-xl glass font-medium text-[var(--text-primary)] overflow-hidden ${className}`}
      style={{
        "--spotlight-x": `${position.x}%`,
        "--spotlight-y": `${position.y}%`,
      }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle 100px at var(--spotlight-x) var(--spotlight-y), rgba(59, 130, 246, 0.3), transparent)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
