class Livro:
    def __init__(self, titulo, autor, categoria):
        self.titulo = titulo
        self.autor = autor
        self.categoria = categoria

class Biblioteca:
    def __init__(self):
        self.livros = []

    def adicionar_livro(self, livro):
        self.livros.append(livro)
        print("Livro adicionado com sucesso!")

    def listar_por_categoria(self, categoria):
        livros_por_categoria = [livro for livro in self.livros if livro.categoria == categoria]
        if livros_por_categoria:
            print(f"Livros na categoria '{categoria}':")
            for livro in livros_por_categoria:
                print(f"Título: {livro.titulo}, Autor: {livro.autor}")
        else:
            print(f"Nenhum livro encontrado na categoria '{categoria}'.")

    def buscar_por_autor(self, autor):
        livros_do_autor = [livro for livro in self.livros if livro.autor == autor]
        if livros_do_autor:
            print(f"Livros do autor '{autor}':")
            for livro in livros_do_autor:
                print(f"Título: {livro.titulo}, Categoria: {livro.categoria}")
        else:
            print(f"Nenhum livro encontrado do autor '{autor}'.")

# Criando a biblioteca
biblioteca = Biblioteca()

# Adicionando alguns livros
biblioteca.adicionar_livro(Livro("Aprendendo Python", "João Silva", "Programação"))
biblioteca.adicionar_livro(Livro("História Antiga", "Maria Rodrigues", "História"))
biblioteca.adicionar_livro(Livro("O Mistério do Castelo", "Paulo Santos", "Ficção"))
biblioteca.adicionar_livro(Livro("Python Avançado", "João Silva", "Programação"))

# Listando livros por categoria
biblioteca.listar_por_categoria("Programação")

# Buscando livros por autor
biblioteca.buscar_por_autor("João Silva")
