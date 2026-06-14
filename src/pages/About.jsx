import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FOREST_IMAGE = "https://media.base44.com/images/public/6a2dc1d745b60383a960bb0c/9f17c6cb7_generated_06604fe4.png";
const WATERSHED_IMAGE = "https://media.base44.com/images/public/6a2dc1d745b60383a960bb0c/533ab9257_generated_05cdd849.png";

export default function About() {
  return (
    <div className="pt-14">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Sobre o Projeto
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
            A ponte entre observação
            <br />
            <span className="text-primary">e rigor acadêmico</span>
          </h1>
        </div>
      </div>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Missão
            </h2>
            <p className="font-body text-lg text-foreground leading-relaxed mb-6">
              O TerraDados nasceu da necessidade de centralizar e organizar o acesso a dados ambientais governamentais brasileiros, eliminando a fricção entre o pesquisador acadêmico e as fontes oficiais de informação.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              O Brasil possui um dos mais ricos acervos de dados ambientais do mundo, distribuídos entre dezenas de instituições federais, estaduais e redes colaborativas. Encontrar, validar e citar essas fontes é um processo que consome tempo valioso de pesquisadores.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Nosso trabalho é curar essas fontes, fornecer contexto acadêmico e histórico, e oferecer ferramentas que acelerem o fluxo de trabalho científico — da pergunta de pesquisa à citação no artigo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={FOREST_IMAGE}
              alt="Vista zenital de copa de floresta tropical densa, mostrando a textura contínua do dossel"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 backdrop-blur-sm p-4">
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-white/60">
                Dossel florestal — Vista zenital
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-12">
            Princípios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                num: "01",
                title: "Transparência Radical",
                desc: "Todas as fontes são governamentais ou de instituições de pesquisa reconhecidas. Nunca intermediamos ou filtramos dados — apenas facilitamos o acesso.",
              },
              {
                num: "02",
                title: "Rigor Acadêmico",
                desc: "Cada fonte é acompanhada de contexto histórico, avaliação de confiabilidade e metadados que permitem ao pesquisador avaliar a adequação aos seus objetivos.",
              },
              {
                num: "03",
                title: "Acesso Aberto",
                desc: "Todos os dados referenciados são de acesso público, em conformidade com a Lei de Acesso à Informação (LAI) e os princípios de dados abertos governamentais.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 md:p-10"
              >
                <span className="font-display text-3xl font-extrabold text-muted-foreground/20 mb-4 block">
                  {p.num}
                </span>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={WATERSHED_IMAGE}
              alt="Vista de satélite de bacia hidrográfica no cerrado brasileiro"
              className="w-full aspect-video object-cover"
            />
            <div className="bg-foreground/80 p-4">
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-white/60">
                Bacia hidrográfica — Cerrado
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Instituições Referenciadas
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Fontes verificadas das principais instituições brasileiras de dados ambientais:
            </p>
            <div className="space-y-4">
              {[
                { acronym: "INPE", name: "Instituto Nacional de Pesquisas Espaciais" },
                { acronym: "IBGE", name: "Instituto Brasileiro de Geografia e Estatística" },
                { acronym: "ANA", name: "Agência Nacional de Águas e Saneamento Básico" },
                { acronym: "MMA", name: "Ministério do Meio Ambiente e Mudança do Clima" },
                { acronym: "INMET", name: "Instituto Nacional de Meteorologia" },
                { acronym: "ICMBio", name: "Instituto Chico Mendes de Conservação da Biodiversidade" },
                { acronym: "MCTI", name: "Ministério da Ciência, Tecnologia e Inovações" },
                { acronym: "EPE", name: "Empresa de Pesquisa Energética" },
              ].map((inst) => (
                <div key={inst.acronym} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-primary w-16 flex-shrink-0">
                    {inst.acronym}
                  </span>
                  <span className="font-body text-sm text-foreground">{inst.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            Comece sua pesquisa
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Explore o diretório completo de fontes governamentais e encontre os dados que fundamentam sua pesquisa.
          </p>
          <Link
            to="/repositorios"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Explorar Repositórios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
