import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: { "Content-type": "application/json" },
});

export const uploadNotaFiscal = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return await api.post("/upload", formData);

}

export default api;