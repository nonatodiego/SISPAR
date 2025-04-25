// Importa a biblioteca axios para realizar requisições HTTP
import axios from "axios";

// Criando uma instância do axios com a URL base da API
const api = axios.create({
    baseURL: "http://localhost:5000",

});

export default api; // Exporta a instância do axios para ser utilizada em outros arquivos

