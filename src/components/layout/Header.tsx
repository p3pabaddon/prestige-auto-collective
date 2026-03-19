import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/about", label: "About" },
  { to: "/quality", label: "Quality" },
  { to: "/financing", label: "Financing" },
  { to: "/blog", label: "Journal" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-subtle">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          PRESTIGE<span className="text-muted-foreground font-normal ml-1">AUTO</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/inventory"
            className="text-sm font-medium px-6 py-2.5 rounded-lg bg-foreground text-background hover:bg-primary transition-colors duration-300"
          >
            Browse Cars
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-subtle overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-display ${
                    location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/inventory"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center text-sm font-medium px-6 py-3 rounded-lg bg-foreground text-background"
              >
                Browse Cars
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
