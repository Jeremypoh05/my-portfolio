import { motion } from "framer-motion";
// src/components/Contact.jsx

export default function Contact() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Contact
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        I'm available for internships and freelance opportunities. Earliest
        start date: Immediate.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="mailto:Jeremypoh0205@gmail.com"
          className="px-4 py-2 rounded-md bg-gray-900 text-white"
        >
          Email me
        </a>
        <a
          href="https://www.linkedin.com/in/jeremypoh0205"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md glass"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
