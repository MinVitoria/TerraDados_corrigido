import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Repositórios", path: "/repositorios" },
  { label: "Sobre", path: "/sobre" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2">
        Pular para o conteúdo principal
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <Link to="/" className="font-display text-sm font-extrabold tracking-tight text-foreground uppercase">
            Terra<span className="text-primary">Dados</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-xs font-semibold uppercase tracking-widest transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/repositorios"
              className="hidden md:flex items-center gap-2 text-xs font-heading font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              Buscar
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-foreground"
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 p-2 text-foreground"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-display text-4xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
