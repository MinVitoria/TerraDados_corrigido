import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Shield, ExternalLink } from "lucide-react";

const reliabilityColor = {
  "Referência Internacional": "bg-accent/20 text-accent-foreground",
  "Oficial Federal": "bg-primary/10 text-primary",
  "Oficial Estadual": "bg-secondary text-secondary-foreground",
  "Dados Consolidados": "bg-muted text-muted-foreground",
  "Dados Preliminares": "bg-muted text-muted-foreground",
};

export default function SourceCard({ source }) {
  return (
    <div className="bg-background border border-border hover:border-primary/30 transition-all duration-300 group">
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-primary/10 text-primary">
            {source.institution_acronym}
          </span>
          <span className={`inline-block px-2 py-0.5 text-xs font-heading font-semibold ${reliabilityColor[source.reliability_level] || "bg-muted text-muted-foreground"}`}>
            {source.reliability_level}
          </span>
        </div>

        <Link to={`/fonte/${source.id}`}>
          <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
            {source.name}
          </h3>
        </Link>

        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {source.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {source.data_types?.map((dt) => (
            <span key={dt} className="px-2 py-0.5 text-xs font-heading bg-secondary text-secondary-foreground">
              {dt}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            {source.update_frequency}
          </div>
          {source.coverage && (
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3" />
              {source.coverage}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/fonte/${source.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Detalhes
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 border border-border text-foreground font-heading text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
