import { useState, useEffect } from 'react';
import jsonData from '../data/datasources.json';

export const useDataSources = () => {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (jsonData && jsonData.datasources) {
        setSources(jsonData.datasources);
      } else {
        console.error("JSON não possui 'datasources'");
        setSources([]);
      }
    } catch (err) {
      console.error("Erro ao carregar datasources.json:", err);
      setError(err.message);
      setSources([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { sources, loading, error };
};

export const filterSources = (sources, filters = {}) => {
  return sources.filter(source => {
    if (filters.id && source.id !== filters.id) return false;
    if (filters.featured !== undefined && source.featured !== filters.featured) return false;
    if (filters.theme && source.theme !== filters.theme) return false;
    return true;
  });
};

export const searchSources = (sources, query) => {
  if (!query?.trim()) return sources;
  const q = query.toLowerCase().trim();
  return sources.filter(s => 
    s.name?.toLowerCase().includes(q) ||
    s.description?.toLowerCase().includes(q) ||
    s.institution?.toLowerCase().includes(q) ||
    s.institution_acronym?.toLowerCase().includes(q) ||
    s.theme?.toLowerCase().includes(q) ||
    s.keywords?.some(k => k.toLowerCase().includes(q))
  );
};
