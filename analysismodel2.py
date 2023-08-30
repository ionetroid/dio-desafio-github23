import pandas as pd

# Criando um DataFrame de exemplo
data = {
    'Nome': ['Alice', 'Bob', 'Carol', 'David', 'Emma'],
    'Idade': [25, 30, 22, 28, 23],
    'Salário': [50000, 60000, 45000, 55000, 48000]
}

df = pd.DataFrame(data)

# Exibindo as primeiras linhas do DataFrame
print("Primeiras linhas do DataFrame:")
print(df.head())

# Resumo estatístico do DataFrame
print("\nResumo estatístico:")
print(df.describe())

# Filtrando os dados
print("\nPessoas com salário acima de 50000:")
print(df[df['Salário'] > 50000])

# Ordenando os dados por idade
print("\nDados ordenados por idade:")
print(df.sort_values(by='Idade'))

# Média de idade
media_idade =
