import re
import sys

def extrair_dados(texto):
    # Usando expressões regulares para extrair os dados
    rf = re.search(r'Nº RF:(\d+)', texto).group(1)
    contrato = re.search(r'Nº Contrato:(\d+)', texto).group(1)
    pedido_item = re.search(r'Nº Pedido/item:(\d+/\d+)', texto).group(1)
    frs = re.search(r'Nº FRS:(\d+)', texto).group(1)
    periodo = re.search(r'Período Medição :(\d{2}.\d{2}.\d{4}) a (\d{2}.\d{2}.\d{4})', texto).groups()

    # Formatar a string conforme solicitado
    dados_formatados = f'/ RF: {rf} / CONTRATO: {contrato} / PEDIDO: {pedido_item} 
    / FRS: {frs} / PERÍODO DE MEDIÇÃO: {periodo[0]} a {periodo[1]} /'

    return dados_formatados

# Lendo o texto da entrada padrão (stdin)
texto = sys.argv[1]
dados_formatados = extrair_dados(texto)
print(dados_formatados)
