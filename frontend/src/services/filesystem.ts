/*************  ✨ Codeium Command 🌟  *************/
import { BaseDirectory, readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";

export async function salvarArquivo(nome: string, conteudo: string) {
    try {
        await fs.writeTextFile(nome, conteudo, { dir: fs.BaseDirectory.Document });
        console.log("Arquivo salvo com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar arquivo:", error);
    }
}

export async function lerArquivo(nome: string) {
    try {
        const data = await fs.readTextFile(nome, { dir: fs.BaseDirectory.Document });
        console.log("Conteúdo do arquivo:", data);
        return data;
    } catch (error) {
        console.error("Erro ao ler arquivo:", error);
        return "";
    }
}
