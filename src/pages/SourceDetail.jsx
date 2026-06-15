import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { ArrowLeft, ExternalLink, Clock, Shield, MapPin, Calendar, Database, Loader2 } from "lucide-react";
import CitationGenerator from "../components/detail/CitationGenerator";
import { motion } from "framer-motion";

export default function SourceDetail() {
  const { id } = useParams();
  const [source, setSource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    base44.entities.DataSource.filter({ id })
      .then((res) => {
        if (res.length > 0) {
          setSource(res[0]);
          return base44.entities.DataSource.filter({ theme: res[0].theme });
        }
        return [];
      })
      .then((all) => setRelated(all.filter((s) => s.id !== id).slice(0, 3)))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="pt-14 min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!source) {
    return (
      <div className="pt-14 min-h-screen flex flex-col items-center justify-center gap-4 px-6">
        <h1 className="font-display text-2xl font-extrabold text-foreground">Fonte não encontrada</h1>
        <Link to="/repositorios" className="text-sm text-primary font-heading font-bold uppercase tracking-widest">
          ← Voltar ao diretório
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-14">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            to="/repositorios"
            className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Repositórios
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-primary/10 text-primary">
              {source.institution_acronym}
            </span>
            <span className="px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-secondary text-secondary-foreground">
              {source.theme}
            </span>
            <span className="px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-accent/20 text-foreground">
              {source.reliability_level}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
            {source.name}
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {source.institution}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Descrição
              </h2>
              <p className="font-body text-base text-foreground leading-relaxed">
                {source.description}
              </p>
            </motion.section>

            {source.historical_context && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Contexto Histórico
                </h2>
                <p className="font-body text-base text-foreground leading-relaxed">
                  {source.historical_context}
                </p>
              </motion.section>
            )}

            {/* Metadata Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Metadados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                <div className="bg-background p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Frequência
                    </span>
                  </div>
                  <p className="font-body text-sm text-foreground">{source.update_frequency || "Não informada"}</p>
                </div>

                <div className="bg-background p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Confiabilidade
                    </span>
                  </div>
                  <p className="font-body text-sm text-foreground">{source.reliability_level}</p>
                </div>

                <div className="bg-background p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Cobertura
                    </span>
                  </div>
                  <p className="font-body text-sm text-foreground">{source.coverage || "Nacional"}</p>
                </div>

                <div className="bg-background p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Disponível desde
                    </span>
                  </div>
                  <p className="font-body text-sm text-foreground">{source.available_since || "Não informado"}</p>
                </div>
              </div>
            </motion.section>

            {/* Data Types */}
            {source.data_types?.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Formatos Disponíveis
                </h2>
                <div className="flex flex-wrap gap-2">
                  {source.data_types.map((dt) => (
                    <span key={dt} className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground font-heading text-xs font-semibold">
                      <Database className="w-3.5 h-3.5" />
                      {dt}
                    </span>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Keywords */}
            {source.keywords?.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Palavras-chave
                </h2>
                <div className="flex flex-wrap gap-2">
                  {source.keywords.map((kw) => (
                    <Link
                      key={kw}
                      to={`/repositorios?q=${encodeURIComponent(kw)}`}
                      className="px-3 py-1.5 text-xs font-heading font-semibold bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {kw}
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Related Sources */}
            {related.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  Fontes Relacionadas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
                  {related.map((r) => (
                    <Link key={r.id} to={`/fonte/${r.id}`} className="bg-background p-5 hover:bg-secondary/50 transition-colors">
                      <span className="text-xs font-heading font-bold text-primary mb-2 block">{r.institution_acronym}</span>
                      <p className="font-heading text-sm font-bold text-foreground leading-tight">{r.name}</p>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Access Widget */}
              <div className="border border-primary/30 bg-primary/5 p-6">
                <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                  Acesso Direto
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                  Acesse a plataforma oficial desta fonte de dados governamental.
                </p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Acessar Fonte Oficial
                </a>
                <p className="mt-3 text-xs text-muted-foreground text-center font-body">
                  Você será redirecionado para {source.institution_acronym}
                </p>
              </div>

              {/* Citation Generator */}
              <CitationGenerator source={source} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
