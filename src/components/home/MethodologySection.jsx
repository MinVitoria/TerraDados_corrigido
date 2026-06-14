import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BookOpen, Link2, FileText } from "lucide-react";

const steps = [
  {
    icon: ShieldCheck,
    title: "Verificação de Origem",
    desc: "Cada fonte é verificada quanto à sua autenticidade institucional e respaldo legal.",
  },
  {
    icon: BookOpen,
    title: "Contexto Acadêmico",
    desc: "Fornecemos o contexto histórico e a relevância científica de cada base de dados.",
  },
  {
    icon: Link2,
    title: "Acesso Direto",
    desc: "Links diretos para as plataformas oficiais, sem intermediários ou filtros.",
  },
  {
    icon: FileText,
    title: "Citação Automática",
    desc: "Gere citações ABNT e APA prontas para uso em trabalhos acadêmicos.",
  },
];

export default function MethodologySection({ soilImage }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={soilImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Metodologia
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
            Rigor científico em cada etapa
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Nosso processo de curadoria garante que cada fonte listada atende aos padrões de confiabilidade exigidos pela comunidade acadêmica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-display text-xs font-bold text-muted-foreground/40">
                    0{i + 1}
                  </span>
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
