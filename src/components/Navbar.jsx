// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "experience", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
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
      const scrollPos = window.scrollY + 220;
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass flex items-center justify-between p-3 md:p-4 shadow-lg">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                <span className="font-bold text-white text-sm">PWK</span>
              </div>
              <span className="hidden sm:block font-semibold text-[var(--text-primary)]">
                Portfolio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  className="relative px-4 py-2 rounded-lg transition-colors"
                >
                  <span
                    className={`relative z-10 text-sm font-medium capitalize transition-colors ${
                      active === s
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
                </a>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <a
                href="/PohWaiKhang-CV.pdf"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium glass rounded-lg hover:shadow-md transition-all text-[var(--text-primary)]"
                download
              >
                <FiDownload className="w-4 h-4" />
                <span>CV</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setTheme((t) => (t === "light" ? "dark" : "light"))
                }
                className="p-2.5 rounded-lg hover:bg-[var(--spotlight)] transition-colors text-[var(--text-primary)]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <FiSun className="w-5 h-5" />
                ) : (
                  <FiMoon className="w-5 h-5" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="md:hidden p-2.5 rounded-lg hover:bg-[var(--spotlight)] transition-colors text-[var(--text-primary)]"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiMenu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-20 right-4 bottom-4 w-64 glass z-50 md:hidden p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {sections.map((s, idx) => (
                  <motion.a
                    key={s}
                    href={`#${s}`}
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`px-4 py-3 rounded-lg capitalize font-medium transition-all ${
                      active === s
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--spotlight)]"
                    }`}
                  >
                    {s}
                  </motion.a>
                ))}
                <motion.a
                  href="/PohWaiKhang-CV.pdf"
                  download
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: sections.length * 0.1 }}
                  className="mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center hover:shadow-lg transition-all"
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
