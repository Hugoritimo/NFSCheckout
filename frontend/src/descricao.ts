document.addEventListener("DOMContentLoaded" , () => {


    const params = new URLSearchParams(window.location.search);

// Obtendo os parâmetros da URL
    const chaveAcesso = params.get("chaveAcesso") || "-";
    const emitente = params.get("emitente") || "-";
    const destinatario = params.get("destinatario") || "-";
    const valorTotal = params.get("valorToal") || "-";
    const chaveAcesso = params.get("dataEmissao") || "-";
    const status = params.get("status") || "-";
// Preenchendo os dados página
    document.getElementById("chaveAcesso")!.textContent = chaveAcesso;
    document.getElementById("emitente")!.textContent = emitente;
    document.getElementById("destinatario")!.textContent = emitente;
    document.getElementById("valorTotal")!.textContent = emitente;
    document.getElementById("dataEmissao")!.textContent = emitente;
    document.getElementById("status")!.textContent = status;
// Botão de voltar para a página incial 
    document.getElementById("voltarBtn")!.addEventListener("click", () => {
        windows.location.href = "index.html";
    });
});