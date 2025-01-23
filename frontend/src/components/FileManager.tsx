import { useState } from "react";
import { lerArquivo, salvarArquivo } from "../services/filesystem";

const FileManager = () => {
  const [conteudo, setConteudo] = useState("");

  const handleSalvar = async () => {
    if (!conteudo.trim()) {
      alert("O conteúdo está vazio!");
      return;
    }
    await salvarArquivo("meuarquivo.txt", conteudo);
    alert("Arquivo salvo!");
  };

  const handleLer = async () => {
    const data = await lerArquivo("meuarquivo.txt");
    if (data) {
      setConteudo(data);
    } else {
      alert("Erro ao ler o arquivo ou arquivo não encontrado!");
    }
  };

  return (
    <div>
      <textarea
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        placeholder="Digite algo..."
      />
      <button onClick={handleSalvar}>Salvar</button>
      <button onClick={handleLer}>Ler</button>
    </div>
  );
};

export default FileManager;
