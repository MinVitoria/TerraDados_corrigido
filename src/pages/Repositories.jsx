import { useDataSources, filterSources, searchSources } from "@/hooks/useDataSources";

export default function Repositories() {
  const { sources, loading } = useDataSources();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedDataType, setSelectedDataType] = useState("");

  // ... resto do estado

  const filtered = React.useMemo(() => {
    let result = sources;

    if (searchQuery) {
      result = searchSources(result, searchQuery);
    }
    if (selectedTheme) {
      result = filterSources(result, { theme: selectedTheme });
    }
    if (selectedDataType) {
      result = result.filter(s => s.data_types?.includes(selectedDataType));
    }

    return result;
  }, [sources, searchQuery, selectedTheme, selectedDataType]);

  // ... resto do componente igual
}
