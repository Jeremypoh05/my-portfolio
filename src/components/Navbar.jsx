// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const sections = ["home", "about", "experience", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(() => {
    // load theme from localStorage or default to light
    return (
      (typeof window !== "undefined" && localStorage.getItem("theme")) ||
      "light"
    );
  });

  useEffect(() => {
    // apply theme as class on root element for CSS overrides
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
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
    // initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass flex items-center justify-between p-3 rounded-2xl border border-gray-200/40 dark:border-white/6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/60 dark:from-transparent dark:to-transparent">
              <span className="font-semibold tracking-tight text-gray-700 dark:text-gray-100">
                PWK
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {sections.map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  className={`relative text-sm font-medium capitalize pb-1 transition-all ${
                    active === s
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-300"
                  }`}
                >
                  {s}
                  {active === s && (
                    <div className="nav-underline mt-2 absolute left-0 right-0 bottom-0" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/PohWaiKhang-CV.pdf"
              className="hidden md:inline-block px-3 py-2 text-sm rounded-md border border-gray-200/50 glass hover:shadow-md"
              download
            >
              Download CV
            </a>

            <button
              onClick={() =>
                setTheme((t) => (t === "light" ? "dark" : "light"))
              }
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/6"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
