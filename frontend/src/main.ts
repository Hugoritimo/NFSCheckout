document.addEventListener("DOMContentLoaded", () => {
    const uploadBtn = document.getElementById("uploadBtn") as HTMLButtonElement;
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    const fileNameDisplay = document.getElementById("fileName") as HTMLParagraphElement;

    uploadBtn.addEventListener("click", () => {
        fileInput.click(); // Abre o seletor de arquivos
    });

    fileInput.addEventListener("change", async (event) => {
        const target = event.target as HTMLInputElement;

        if (target.files && target.files.length > 0) {
            const file = target.files[0];
            fileNameDisplay.textContent = `Arquivo selecionado: ${file.name}`;

            try {
                // Criando um FormData para enviar o arquivo ao backend
                const formData = new FormData();
                formData.append("file", file);

                // Enviar para o backend Spring Boot (Ajuste a URL conforme necessário)
                const response = await fetch("http://localhost:8080/api/upload", {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {
                    const nota = await response.json();

                    // Redireciona para a página de descrição com os dados da NF
                    window.location.href = `descricao.html?id=${nota.id}`;
                } else {
                    alert("Erro ao enviar a Nota Fiscal.");
                }
            } catch (error) {
                console.error("Erro ao conectar com o backend:", error);
            }

        } else {
            fileNameDisplay.textContent = "Nenhum arquivo selecionado";
        }
    });
});
