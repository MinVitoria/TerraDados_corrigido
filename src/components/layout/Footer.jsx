import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-sm font-extrabold tracking-tight uppercase mb-4">
              Terra<span className="text-primary">Dados</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Portal de dados ambientais que conecta pesquisadores acadêmicos a fontes governamentais verificadas e de alta confiabilidade.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-foreground hover:text-primary transition-colors">Início</Link>
              <Link to="/repositorios" className="text-sm text-foreground hover:text-primary transition-colors">Repositórios</Link>
              <Link to="/sobre" className="text-sm text-foreground hover:text-primary transition-colors">Sobre o Projeto</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Institucional
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Este portal é uma ferramenta de curadoria acadêmica. Todos os dados e fontes pertencem às respectivas instituições governamentais.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TerraDados. Dados abertos para pesquisa acadêmica.
          </p>
          <p className="text-xs text-muted-foreground">
            Fontes verificadas de instituições governamentais brasileiras
          </p>
        </div>
      </div>
    </footer>
  );
}
