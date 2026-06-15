import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CitationGenerator({ source }) {
  const [format, setFormat] = useState("abnt");
  const [copied, setCopied] = useState(false);

  const currentYear = new Date().getFullYear();
  const accessDate = new Date().toLocaleDateString("pt-BR");

  const citations = {
    abnt: `${source.citation_name || source.institution?.toUpperCase() + ". " + source.name + "."} Disponível em: <${source.url}>. Acesso em: ${accessDate}.`,
    apa: `${source.institution} (${currentYear}). ${source.name}. Recuperado de ${source.url}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(citations[format]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-border bg-background">
      <div className="p-5 border-b border-border">
        <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-foreground mb-4">
          Citação Acadêmica
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setFormat("abnt")}
            className={`px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-widest transition-colors ${
              format === "abnt"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            ABNT
          </button>
          <button
            onClick={() => setFormat("apa")}
            className={`px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-widest transition-colors ${
              format === "apa"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            APA
          </button>
        </div>
      </div>

      <div className="p-5">
        <p className="font-body text-sm text-foreground leading-relaxed bg-secondary/50 p-4 border border-border">
          {citations[format]}
        </p>
        <button
          onClick={handleCopy}
          className="mt-4 flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors w-full justify-center"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copiado
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copiar Citação
            </>
          )}
        </button>
      </div>
    </div>
  );
}
