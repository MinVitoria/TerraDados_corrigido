import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Fontes Governamentais" },
  { value: "8", label: "Temas Ambientais" },
  { value: "100+", label: "Anos de Dados" },
  { value: "100%", label: "Fontes Verificadas" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              {stat.value}
            </p>
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
