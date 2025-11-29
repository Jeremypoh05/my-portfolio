import { useEffect, useState, useRef } from "react";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiDownload,
  FiArrowUp,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "experience", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    return (
      (typeof window !== "undefined" && localStorage.getItem("theme")) ||
      "light"
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      // Change navbar style when scrolled
      setScrolled(window.scrollY > 50);

      // Show back to top button when scrolled down
      setShowBackToTop(window.scrollY > 400);

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop;
        const h = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + h) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            animate={{
              boxShadow: scrolled
                ? "0 10px 40px rgba(0, 0, 0, 0.1)"
                : "0 4px 20px rgba(0, 0, 0, 0.05)",
            }}
            className="glass flex items-center justify-between p-3 md:p-4 relative overflow-hidden group"
          >
            {/* Animated gradient border on hover */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />

            <div className="relative z-10 flex items-center justify-between w-full">
              {/* Logo with magnetic effect */}
              <MagneticDiv>
                <motion.a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 group/logo"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg relative overflow-hidden"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/logo:translate-x-full transition-transform duration-700" />
                    <span className="font-bold text-white text-sm relative z-10">
                      PWK
                    </span>
                  </motion.div>
                  <span className="hidden sm:block font-semibold text-[var(--text-primary)] group-hover/logo:gradient-text transition-all">
                    Portfolio
                  </span>
                </motion.a>
              </MagneticDiv>

              {/* Desktop Navigation with enhanced effects */}
              <div className="hidden md:flex items-center gap-1">
                {sections.map((s) => (
                  <motion.a
                    key={s}
                    href={`#${s}`}
                    onClick={(e) => handleNavClick(e, s)}
                    whileHover={{ y: -2 }}
                    className="relative px-4 py-2 rounded-lg transition-colors group/nav"
                  >
                    <span
                      className={`relative z-10 text-sm font-medium capitalize transition-colors ${
                        active === s
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-secondary)] group-hover/nav:text-[var(--text-primary)]"
                      }`}
                    >
                      {s}
                    </span>
                    {active === s && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {/* Hover underline */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "70%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Right Section with enhanced buttons */}
              <div className="flex items-center gap-2">
                {/* CV Button with shimmer */}
                <motion.a
                  href="/PohWaiKhang-CV.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium glass rounded-lg hover:shadow-md transition-all text-[var(--text-primary)] relative overflow-hidden group/cv"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cv:translate-x-full transition-transform duration-700" />
                  <FiDownload className="w-4 h-4 relative z-10 group-hover/cv:rotate-12 transition-transform" />
                  <span className="relative z-10">CV</span>
                </motion.a>

                {/* Theme Toggle with rotation */}
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 180 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setTheme((t) => (t === "light" ? "dark" : "light"))
                  }
                  className="p-2.5 rounded-lg hover:bg-[var(--spotlight)] transition-colors text-[var(--text-primary)] relative overflow-hidden group/theme"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 opacity-0 group-hover/theme:opacity-100 transition-opacity rounded-lg" />
                  {theme === "dark" ? (
                    <FiSun className="w-5 h-5 relative z-10" />
                  ) : (
                    <FiMoon className="w-5 h-5 relative z-10" />
                  )}
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMenu}
                  className="md:hidden p-2.5 rounded-lg hover:bg-[var(--spotlight)] transition-colors text-[var(--text-primary)]"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiX className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMenu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Menu Container */}
            <div className="fixed inset-0 z-[70] md:hidden flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.9, opacity: 0, rotateX: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-md max-h-[80vh] glass shadow-2xl rounded-2xl pointer-events-auto relative overflow-hidden group"
              >
                {/* Gradient border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-50 blur-sm" />

                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />

                <div className="overflow-y-auto max-h-[80vh] p-6 relative z-10">
                  <div className="flex flex-col gap-2">
                    {sections.map((s, idx) => (
                      <motion.a
                        key={s}
                        href={`#${s}`}
                        onClick={(e) => handleNavClick(e, s)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className={`px-4 py-3 rounded-lg capitalize font-medium transition-all relative overflow-hidden group/item ${
                          active === s
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-[var(--text-primary)]"
                            : "text-[var(--text-secondary)] hover:bg-[var(--spotlight)]"
                        }`}
                      >
                        {/* Shimmer on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10">{s}</span>
                      </motion.a>
                    ))}
                    <motion.a
                      href="/PohWaiKhang-CV.pdf"
                      download
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: sections.length * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center hover:shadow-lg transition-all flex items-center justify-center gap-2 relative overflow-hidden group/download"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/download:opacity-100 transition-opacity blur-xl" />
                      <FiDownload className="w-4 h-4 relative z-10 group-hover/download:rotate-12 transition-transform" />
                      <span className="relative z-10">Download CV</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all relative overflow-hidden group/back"
          >
            {/* Pulse ring */}
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
            />

            {/* Glow */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/back:opacity-100 transition-opacity blur-xl" />

            <FiArrowUp className="w-5 h-5 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
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
