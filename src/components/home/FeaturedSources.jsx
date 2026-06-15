import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { ArrowUpRight, Database, Clock, Shield, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const dataTypeIcon = {
  "Planilha": "📊",
  "API": "🔗",
  "Vetorial (SHP/GeoJSON)": "🗺️",
  "Raster (TIFF)": "🛰️",
  "Relatório (PDF)": "📄",
  "Banco de Dados": "🗄️",
  "Séries Temporais": "📈",
  "Microdados": "🔬",
};

export default function FeaturedSources() {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.DataSource.filter({ featured: true })
      .then(setSources)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 flex justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Repositórios em destaque
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Fontes de referência
            </h2>
          </div>
          <Link
            to="/repositorios"
            className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
          >
            Ver todos os repositórios
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {sources.slice(0, 6).map((source, i) => (
            <motion.div
              key={source.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/fonte/${source.id}`}
                className="block bg-background p-8 hover:bg-secondary/50 transition-all duration-300 group h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-primary/10 text-primary">
                    {source.institution_acronym}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-heading text-base font-bold text-foreground mb-3 leading-tight">
                  {source.name}
                </h3>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {source.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {source.data_types?.slice(0, 3).map((dt) => (
                    <span key={dt} className="text-xs text-muted-foreground font-heading">
                      {dataTypeIcon[dt] || "📁"} {dt.split(" ")[0]}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {source.update_frequency}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Shield className="w-3 h-3" />
                    {source.reliability_level}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
