import React, { useState, useEffect, useMemo } from "react";
import { Search, Filter, X, Loader2 } from "lucide-react";
import SourceCard from "../components/repository/SourceCard";
import { motion } from "framer-motion";
import { useDataSources, searchSources } from "@/hooks/useDataSources";

const ALL_THEMES = [
  "Clima e Atmosfera",
  "Biodiversidade",
  "Recursos Hídricos",
  "Uso do Solo",
  "Energia e Emissões",
  "Resíduos e Saneamento",
  "Oceanos e Zonas Costeiras",
  "Legislação Ambiental",
];

const ALL_DATA_TYPES = [
  "Planilha", "API", "Vetorial (SHP/GeoJSON)", "Raster (TIFF)",
  "Relatório (PDF)", "Banco de Dados", "Séries Temporais", "Microdados",
];

export default function Repositories() {
  const { sources, loading } = useDataSources();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedDataType, setSelectedDataType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Ler parâmetros da URL (q e tema)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    const tema = params.get("tema") || "";
    setSearchQuery(q);
    setSelectedTheme(tema);
  }, []);

  // Filtragem dos dados
  const filtered = useMemo(() => {
    let result = sources;

    // Busca por texto
    if (searchQuery) {
      result = searchSources(result, searchQuery);
    }

    // Filtro por tema
    if (selectedTheme) {
      result = result.filter(s => s.theme === selectedTheme);
    }

    // Filtro por tipo de dado
    if (selectedDataType) {
      result = result.filter(s => s.data_types?.includes(selectedDataType));
    }

    return result;
  }, [sources, searchQuery, selectedTheme, selectedDataType]);

  const activeFilters = [selectedTheme, selectedDataType].filter(Boolean).length;

  return (
    <div className="pt-14">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Atlas de Repositórios
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Fontes de dados ambientais
          </h1>
          <p className="font-body text-base text-muted-foreground max-w-2xl leading-relaxed">
            Diretório curado de repositórios governamentais brasileiros com dados ambientais para pesquisa acadêmica.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="sticky top-14 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nome, instituição ou palavra-chave..."
                className="w-full bg-secondary/50 border border-border pl-11 pr-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 border text-xs font-heading font-bold uppercase tracking-widest transition-colors ${
                activeFilters > 0
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground hover:bg-secondary"
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              Filtros
              {activeFilters > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-primary text-primary-foreground text-xs">
                  {activeFilters}
                </span>
              )}
            </button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 pb-2 border-t border-border pt-4 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Tema
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ALL_THEMES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTheme(selectedTheme === t ? "" : t)}
                        className={`px-3 py-1.5 text-xs font-heading font-semibold transition-colors ${
                          selectedTheme === t
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Tipo de Dado
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ALL_DATA_TYPES.map((dt) => (
                      <button
                        key={dt}
                        onClick={() => setSelectedDataType(selectedDataType === dt ? "" : dt)}
                        className={`px-3 py-1.5 text-xs font-heading font-semibold transition-colors ${
                          selectedDataType === dt
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {dt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {activeFilters > 0 && (
                <button
                  onClick={() => { 
                    setSelectedTheme(""); 
                    setSelectedDataType(""); 
                  }}
                  className="mt-4 text-xs font-heading font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest"
                >
                  Limpar filtros
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          {loading 
            ? "Carregando..." 
            : `${filtered.length} fonte${filtered.length !== 1 ? "s" : ""} encontrada${filtered.length !== 1 ? "s" : ""}`
          }
        </p>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-heading text-lg font-bold text-foreground mb-2">
              Nenhuma fonte encontrada
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Tente ajustar seus filtros ou termos de busca.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((source, i) => (
              <motion.div
                key={source.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <SourceCard source={source} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
