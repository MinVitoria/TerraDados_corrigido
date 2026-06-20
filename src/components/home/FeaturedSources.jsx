import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Shield, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useDataSources, filterSources } from "@/hooks/useDataSources";

const dataTypeIcon = { /* ... mantenha o mesmo */ };

export default function FeaturedSources() {
  const { sources, loading } = useDataSources();

  const featured = filterSources(sources, { featured: true });

  if (loading) {
    return (
      <section className="py-24 px-6 flex justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      {/* ... resto do código igual, só muda a parte dos dados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {featured.slice(0, 6).map((source, i) => (
          // ... mesmo card de antes
        ))}
      </div>
    </section>
  );
}
