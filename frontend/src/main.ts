document.addEventListener("DOMContentLoaded", () => {
            const uploadBtn = document.getElementById("uploadBtn") as HTMLButtonElement;
            const fileInput = document.getElementById("fileInput") as HTMLInputElement;
            const fileNameDisplay = document.getElementById("fileName") as HTMLParagraphElement;

            uploadBtn.addEventListener("click", () => {
                fileInput.click(); // Abre o seletor de arquivos
            });

            fileInput.addEventListener("change", (event) => {
                        const target = event.target as HTMLInputElement;
                        if (target.files && target.files.length > 0) {
                            fileNameDisplay.textContent = `Arquivo selecionado: ${target.files[0].name}`;
                        } else {
                            fileNameDisplay.textContent = "Nenhum arquivo selecionado";
                        }

                        window.location.href = `descricao.html?chaveAcesso=${dadosNF.chaveAcesso}&emitente=${dadosNF.emitente}&destinatario=${dadosNF.destinatario}&valorTotal=${dadosNF.valorTotal}&dataEmissao=${dadosNF.dataEmissao}&status=${dadosNF.status}`
                    }
                    else {
                        fileNameDisplay.textContent = "Nenhum arquivo selecionado";
                    }

                    });
