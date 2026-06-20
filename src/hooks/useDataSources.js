import { useState, useEffect } from 'react';
import data from '../data/datasources.json';

export const useDataSources = () => {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSources(data.datasources || []);
      setLoading(false);
    }, 300); // pequeno delay para melhor UX

    return () => clearTimeout(timer);
  }, []);

  return { sources, loading };
};

// Funções auxiliares
export const filterSources = (sources, filters = {}) => {
  return sources.filter(source => {
    if (filters.id && source.id !== filters.id) return false;
    if (filters.featured !== undefined && source.featured !== filters.featured) return false;
    if (filters.theme && source.theme !== filters.theme) return false;
    return true;
  });
};

export const searchSources = (sources, query) => {
  if (!query) return sources;
  const q = query.toLowerCase();
  return sources.filter(s => 
    s.name?.toLowerCase().includes(q) ||
    s.description?.toLowerCase().includes(q) ||
    s.institution?.toLowerCase().includes(q) ||
    s.institution_acronym?.toLowerCase().includes(q) ||
    s.keywords?.some(k => k.toLowerCase().includes(q)) ||
    s.theme?.toLowerCase().includes(q)
  );
};
