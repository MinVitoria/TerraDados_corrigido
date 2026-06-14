import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ heroImage }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/repositorios?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate("/repositorios");
    }
  };

  const suggestions = [
    "Desmatamento na Amazônia",
    "Qualidade da água",
    "Emissões de CO₂",
    "Biodiversidade marinha",
    "Uso do solo",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className={`absolute inset-0 bg-foreground/60 transition-all duration-700 ${focused ? "backdrop-blur-md bg-foreground/75" : ""}`} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-heading text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/60 mb-6">
            Portal de dados ambientais para pesquisa acadêmica
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight mb-8">
            Dados que fundamentam
            <br />
            <span className="text-primary-foreground/80">a ciência ambiental</span>
          </h1>

          <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Acesso curado a repositórios governamentais brasileiros com dados verificados para pesquisa acadêmica em meio ambiente.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-2xl mx-auto"
        >
          <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-none overflow-hidden transition-all duration-300 focus-within:bg-white/15 focus-within:border-white/40">
            <Search className="w-5 h-5 text-white/50 ml-5 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              placeholder="Buscar fontes de dados governamentais..."
              className="flex-1 bg-transparent text-white placeholder:text-white/40 font-body text-base px-4 py-5 outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-5 bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              <span className="hidden sm:inline">Pesquisar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {focused && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-foreground/90 backdrop-blur-xl border border-white/10"
            >
              <p className="px-5 py-3 text-xs font-heading font-semibold uppercase tracking-widest text-white/40 border-b border-white/10">
                Sugestões
              </p>
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setQuery(s);
                    navigate(`/repositorios?q=${encodeURIComponent(s)}`);
                  }}
                  className="w-full text-left px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors font-body"
                >
                  {s}
                </button>
              ))}
            </motion.div>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {["INPE", "IBGE", "ANA", "MMA", "INMET"].map((tag) => (
            <button
              key={tag}
              onClick={() => navigate(`/repositorios?q=${tag}`)}
              className="px-4 py-2 text-xs font-heading font-bold uppercase tracking-widest text-white/50 border border-white/15 hover:text-white hover:border-white/40 transition-all"
            >
              {tag}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
