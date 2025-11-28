import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload, FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "experience", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
          <div className="glass flex items-center justify-between p-3 md:p-4 shadow-lg">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
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
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  onClick={(e) => handleNavClick(e, s)}
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

      {/* Mobile Menu - Fixed to viewport center with proper scrolling */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
              style={{ position: 'fixed' }}
            />
            
            {/* Menu Container - Fixed to viewport */}
            <div className="fixed inset-0 z-[70] md:hidden flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-md max-h-[80vh] glass shadow-2xl rounded-2xl pointer-events-auto"
              >
                <div className="overflow-y-auto max-h-[80vh] p-6">
                  <div className="flex flex-col gap-2">
                    {sections.map((s, idx) => (
                      <motion.a
                        key={s}
                        href={`#${s}`}
                        onClick={(e) => handleNavClick(e, s)}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
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
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: sections.length * 0.05 }}
                      className="mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <FiDownload className="w-4 h-4" />
                      <span>Download CV</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}