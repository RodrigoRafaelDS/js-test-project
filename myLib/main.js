// Problema da reserva de hotel - Rodrigo Rafael de Sousa 

// Habilitar em caso de enrtada no terminal 
// var read = require('readline-sync')

// Função principal
function hotel_escolhido(dadosCliente) {
    // Habilitar em caso de enrtada no terminal 
    // dadosCliente=read.question('Insira a entrada: ')
    // console.log(dadosCliente)


    // Guarda hotel e valor pago pelo cliente
    const cliente = {
        tipo: false,  //true=cliente Reward  -  false=Cliente regular
        dias: [], // Guarda os dias de hospedagem do cliente -----  true=dia de semana   -   false=final de semana
        hotel: '', //Guarda o hotel escolhido
        valor: 0 // Armazena o valor total das diárias do cliente no hotel escolhido
    }

    // Guarda informações sobre hoteis
    const hoteis = [{
        nome: 'Lakewood',
        classe: '3',
        cliente_regular: [110, 90],  // [Dia de semana, final de semana]
        cliente_reward: [80, 80], // [Dia de semana, final de semana]
        valor: 0  // Armazena o valor total das diárias do cliente
    }, {
        nome: 'Bridgewood',
        classe: '4',
        cliente_regular: [160, 60],
        cliente_reward: [110, 50],
        valor: 0
    },
    {
        nome: 'Ridgewood',
        classe: '5',
        cliente_regular: [220, 150],
        cliente_reward: [100, 40],
        valor: 0
    }

    ]

    // Clona objetos
    var clienteClone = new Object(cliente)
    var hoteisClone = new Object(hoteis)

    // Retorna o tipo e os dias de hospedagem do cliente 
    clienteClone = avEntrada(dadosCliente, clienteClone)

    // Retorna o valor em cada hotel 
    hoteisClone, clienteClone = valor(hoteisClone, clienteClone)

    // Retorna o melhor hotel mais barato
    clienteClone = escolha(hoteisClone, clienteClone)

    // Habilitar em caso de enrtada no terminal 
    // Imprime resposta 
    // console.log('Hotel escolhido: ' + cliente.hotel)

    return clienteClone.hotel
}


// Retorna o tipo e os dias de hospedagem do cliente 
// Trata a entrada separando as partes de interesse 
function avEntrada(entrada, clienteC) {
    // Variável auxiliar
    const finais_semana = ['sat', 'sun']
    tipoCliente = entrada.toLowerCase().split(":", 1)
    // Verifica se o cliente normal ou do programa de fidelidade 
    if (tipoCliente == 'regular') {
        clienteC.tipo = false
    } else {
        clienteC.tipo = true
    }

    // Verifica as datas de hospedagem e separa em finais de semana ou não 
    //Separa a string para verificar os dias de hospedagem
    dado1 = entrada.split(",")

    //Verifica se o dia de hospedagem é final de semana ou dia de semana
    for (let l = 0; l < dado1.length; l++) {

        if (dado1[l].match(finais_semana[0]) || dado1[l].match(finais_semana[1])) {
            clienteC.dias.push(false)
        } else {
            clienteC.dias.push(true)
        }
    }

    // Retorna os dias de hospedagem 
    return clienteC
}

// Retorna o valor em cada hotel 
function valor(hoteisC, clienteC) {

    for (let j = 0; j < clienteC.dias.length; j++) {

        for (let i = 0; i < hoteisC.length; i++) {

            // Cliente fidelidade e dia de semana  
            if (clienteC.tipo && clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].cliente_reward[0]
            }
            // Cliente fidelidade e final de semana 
            else if (clienteC.tipo && !clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].cliente_reward[1]
            }
            // Cliente regular e dia de semana 
            else if (!clienteC.tipo && clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].cliente_regular[0]
            }
            // Cliente regular e final de semana 
            else {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].cliente_regular[1]
            }
        }
    }

    return hoteisC, clienteC
}

// Retorna o melhor hotel mais barato
function escolha(hoteisC, clienteC) {

    // Variáveis auxiliares para comparação 
    var escolhido = hoteisC[0]

    // Percorre os hoteis buscando o mais barato 
    for (let i = 0; i < hoteisC.length; i++) {

        // Caso os hoteis tenham o mesmo valor, escolhe o com maior classificação 
        if (hoteisC[i].valor == escolhido.valor && hoteisC[i].classe > escolhido.classe) {
            escolhido = hoteisC[i]
        }
        //Caso tenha um valor menor substitui o hotel escolhido pelo atual 
        else if (hoteisC[i].valor < escolhido.valor) {
            escolhido = hoteisC[i]
        }
    }

    // Retorna o hotel escolhido e seu valor 
    clienteC.valor = escolhido.valor
    clienteC.hotel = escolhido.nome

    return clienteC
}

// Habilitar em caso de enrtada no terminal 
// Executa função 
// hotel_escolhido()

// Exporta função para testes 
module.exports.hotel_escolhido = hotel_escolhido;
