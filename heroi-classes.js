# Definindo a classe Heroi
class Heroi:
    # Método construtor da classe
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    # Método para determinar o ataque com base no tipo
    def atacar(self):
        # Verificar o tipo de herói e definir o ataque
        if self.tipo == "mago":
            ataque = "magia"
        elif self.tipo == "guerreiro":
            ataque = "espada"
        elif self.tipo == "monge":
            ataque = "artes marciais"
        elif self.tipo == "ninja":
            ataque = "shuriken"
        else:
            ataque = "ataque desconhecido"  # Caso seja um tipo não reconhecido
        
        # Exibir a mensagem de ataque
        print(f"O {self.tipo} atacou usando {ataque}")

# Exemplo de uso:
heroi1 = Heroi("Merlin", 150, "mago")
heroi1.atacar()  # Saída: O mago atacou usando magia

heroi2 = Heroi("Conan", 35, "guerreiro")
heroi2.atacar()  # Saída: O guerreiro atacou usando espada

heroi3 = Heroi("Bruce Lee", 32, "monge")
heroi3.atacar()  # Saída: O monge atacou usando artes marciais

heroi4 = Heroi("Naruto", 20, "ninja")
heroi4.atacar()  # Saída: O ninja atacou usando shuriken
