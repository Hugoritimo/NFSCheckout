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
    
}






}

