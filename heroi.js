// Definição da Classe 

class Heroi {
    // Variáveis e Propriedades
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    // Método Atacar
    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "realizou um ataque indefinido";
        }

        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


// Dados do Heroi

const nomeHeroi = "";
const idadeHeroi = "";
const tipoHeroi = "";


// Criação do Objeto e Execução 

const aventureiro = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);

// Chamada do Método Atacar 
aventureiro.atacar();

