// ## Pilha de Cartas

// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let baralhoDeCartas = ["A", "K", "J", "Q"]
let opcao = ""

do{
    opcao = prompt(
        "Baralho de Cartas\n" +
        baralhoDeCartas +
    
        "\n\nDigite a opção desejada"+
    
        "\n\n1) Adicionar uma carta" +
        "\n2) Remover uma carta" +
        "\n3) Sair"
    )
    switch(opcao){
        case "1":
            baralhoDeCartas.unshift(prompt("Qual carta deseja adicionar ? "))
            break
        case "2":
            cartaRemovida = baralhoDeCartas.shift()
            alert("A carta " + cartaRemovida + " foi removida")
            break
        case "3":
            alert("Fechando....")
            break
        default:
            alert("COMANDO INVALIDO")
    }

}while(opcao !== "3")
