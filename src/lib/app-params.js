// 1. Definimos o caminho exato para o seu "banco de dados" local
const DATA_SOURCE_PATH = 'src/data/datasources.json';

// 2. Criamos uma função pronta para buscar os dados desse arquivo
export const fetchGovernamentalData = async () => {
    try {
        const response = await fetch(DATA_SOURCE_PATH);
        
        if (!response.ok) {
            throw new Error(`Erro ao carregar arquivo: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Erro ao acessar os dados governamentais em datasources.json:", error);
        return []; // Retorna uma lista vazia para não quebrar o site caso dê erro
    }
}

// 3. Exportamos os parâmetros do app (agora bem mais simples e sem base44)
export const appParams = {
    dataSourceUrl: DATA_SOURCE_PATH,
    
    // Mantemos a url atual caso você precise em alguma outra parte do site
    currentUrl: typeof window !== 'undefined' ? window.location.href : '',
    
    isNode: typeof window === 'undefined'
};
