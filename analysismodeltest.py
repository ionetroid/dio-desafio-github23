import pandas as pd

# Carregar o arquivo CSV em um DataFrame
data = pd.read_csv('seu_arquivo.csv')

# Visualizar as primeiras linhas do DataFrame
print(data.head())

# Resumo estatístico do DataFrame
print(data.describe())

# Contar o número de ocorrências em uma coluna
print(data['coluna'].value_counts())

# Filtrar dados com base em condições
filtered_data = data[data['coluna'] > 10]

# Agrupar e resumir dados
grouped_data = data.groupby('coluna')['outra_coluna'].mean()

# Gráfico de barras
data['coluna'].value_counts().plot(kind='bar')

# Gráfico de dispersão
data.plot.scatter(x='coluna1', y='coluna2')

# Salvar o DataFrame modificado em um novo arquivo CSV
filtered_data.to_csv('novo_arquivo.csv', index=False)
