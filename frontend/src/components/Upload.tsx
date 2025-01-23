import { useState } from "react";

import api, { uploadNotaFiscal } from "../services/api";

const Upload = () => {

const [file, setFile ] = useState< | null>(null);
const [progress, setProgress] = useState(0);

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
        setFile(e.target.files[0]);
    }
};

const handleUpload = async () => {
    if (!file) return;

const formData = new FormData();
    formData.append("file", file);


    await api.post("/upload" , formData, {
        onUploadProgress: (progressEvent) => {
            const percente = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percent);
        },
    });
    alert("Upload concluído!");

    };

        return (

    <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!file}>Enviar</button>
        {progress > 0 && <progress value={progress} max="100">{progress}%</progress>}
    </div>
    );
};


export default Upload;











}

