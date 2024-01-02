// ## Cadastro de Imóveis

// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

// - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// - O menu deve ter a opção de salvar um imóvel.
// - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//     - Nome do proprietário.
//     - Quantidade de quartos.
//     - Quantidade de banheiros.
//     - Se possui garagem.
// - O menu também deve ter a opção de mostrar todos os imóveis salvos.

let imoveis = []
let opcao = ""

do{
    let listarImoveis = ""  
    for(indice = 0; indice < imoveis.length; indice++){
        listarImoveis += 
        "Proprietario: " + imoveis[indice].proprietario +
        "\nQuartos: " + imoveis[indice].quartos +
        "\nBanheiros: " + imoveis[indice].banheiros +
        "\nGaragem: " + imoveis[indice].garagem +
        "\n\n"
    }
    opcao = prompt("\n\nImoveis cadastrados " + imoveis.length +
    "\n\nDigite a opção desejada\n" +
    
    "\n1) Salvar imóvel" + 
    "\n2) Listar imóveis cadastrado" +
    "\n3) Sair"
    )
    switch(opcao){
        case "1":
        let imovel = {}
        imovel.proprietario = prompt("Digite o nome do proprietario: ")
        imovel.quartos = prompt("Digite a quantidade de quartos: ")
        imovel.banheiros = prompt("Digite a quantidade de banheiros: ")
        imovel.garagem = prompt("Possui garagem: ?")
        
        imoveis.push(imovel)
        
        break
        case "2":
            alert(listarImoveis)
        break
        case "3":
            alert("Encerrando...")
        break
        default:
           alert("Comando inválido")
    }
    


}while(opcao !== "3")
