// ## Fila de Espera

// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let pacientes = []
let opcao = ""


do{
    let listaPacientesNumerada = ""
    for(let indice = 0; indice < pacientes.length; indice++){
        listaPacientesNumerada += (indice + 1) + "º" + " " + pacientes[indice] + " "
        }
    
    opcao = prompt(
        "Ordem de chamada\n" +
        listaPacientesNumerada +
    
        "\n\nDigite a opção desejada"+
    
        "\n\n1) Cadastrar um novo paciente" +
        "\n2) Consultar paciente" +
        "\n3) Sair"
    )
    switch(opcao){
        case "1":
            pacientes.push(prompt("Digite o nome do paciente: "))
            break
        case "2":
            if(pacientes.length <= 0){
                alert("Sem pacientes")
            }else{
                pacienteConsultado = pacientes.shift()
                alert("O paciente " + pacienteConsultado + " foi consultado")
            }
            break
        case "3":
            alert("Fechando....")
            break
        default:
            alert("COMANDO INVALIDO")
    }

}while(opcao !== "3")

