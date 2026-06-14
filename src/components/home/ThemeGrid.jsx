import React from "react";
import { Link } from "react-router-dom";
import { Cloud, Trees, Droplets, MapPin, Flame, Trash2, Waves, Scale } from "lucide-react";
import { motion } from "framer-motion";

const themes = [
  { name: "Clima e Atmosfera", icon: Cloud, desc: "Dados meteorológicos e climatológicos" },
  { name: "Biodiversidade", icon: Trees, desc: "Fauna, flora e unidades de conservação" },
  { name: "Recursos Hídricos", icon: Droplets, desc: "Hidrologia e qualidade da água" },
  { name: "Uso do Solo", icon: MapPin, desc: "Desmatamento e cobertura vegetal" },
  { name: "Energia e Emissões", icon: Flame, desc: "Matriz energética e gases de efeito estufa" },
  { name: "Resíduos e Saneamento", icon: Trash2, desc: "Gestão de resíduos sólidos" },
  { name: "Oceanos e Zonas Costeiras", icon: Waves, desc: "Biodiversidade marinha e ZEE" },
  { name: "Legislação Ambiental", icon: Scale, desc: "Leis, normas e regulamentação" },
];

export default function ThemeGrid() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Áreas temáticas
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Navegue por tema
            <br />
            <span className="text-primary">de pesquisa</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {themes.map((theme, i) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/repositorios?tema=${encodeURIComponent(theme.name)}`}
                  className="block bg-background p-8 md:p-10 hover:bg-secondary/50 transition-all duration-300 group h-full"
                >
                  <Icon className="w-6 h-6 text-primary mb-6 group-hover:translate-x-1 transition-transform" />
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground mb-2">
                    {theme.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {theme.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
