


// Função principal
function hotel_escolhido(dadosCliente) {

    // Guarda hotel e valor pago pelo cliente
    const cliente = {
        tipo: false,
        dias: [],
        hotel: '',
        valor: 0
    }

    // Guarda informações sobre hoteis
    const hoteis = [{
        nome: 'Lakewood',
        classe: '3',
        clientes_normais: [110, 90],
        clientes_fidelidade: [80, 80],
        valor: 0
    }, {
        nome: 'Bridgewood',
        classe: '4',
        clientes_normais: [160, 60],
        clientes_fidelidade: [110, 50],
        valor: 0
    },
    {
        nome: 'Ridgewood',
        classe: '5',
        clientes_normais: [220, 150],
        clientes_fidelidade: [100, 40],
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

    // Imprime resposta 
    // console.log(cliente.hotel)

    return clienteClone.hotel
}


// Retorna o tipo e os dias de hospedagem do cliente 
// Trata a entrada separando as partes de interesse 
function avEntrada(entrada, clienteC) {
    // Variável auxiliar
    const finais_semana = ['sat', 'sun']
    tipoCliente=entrada.toLowerCase().split(":", 1)
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
    var l = 0
    while (l < dado1.length) {
        if (dado1[l].match(finais_semana[0]) || dado1[l].match(finais_semana[1])) {
            clienteC.dias.push(false)
        } else {
            clienteC.dias.push(true)
        }
        l = l + 1
    }

    // Retorna os dias de hospedagem 
    return clienteC
}

// Retorna o valor em cada hotel 
function valor(hoteisC, clienteC) {

    // ***** Verificar *******
    var j = 0
    // Soma os dias hospedados avaliando o tipo de cliente e o dia da semana
    while (j < clienteC.dias.length) {
        var i = 0
        // ***** Verificar *******
        while (i < hoteisC.length) {
            // Cliente fidelidade e dia de semana  
            if (clienteC.tipo && clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].clientes_fidelidade[0]
            }
            // Cliente fidelidade e final de semana 
            else if (clienteC.tipo && !clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].clientes_fidelidade[1]
            }
            // Cliente regular e dia de semana 
            else if (!clienteC.tipo && clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].clientes_normais[0]
            }
            // Cliente regular e final de semana 
            else {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].clientes_normais[1]
            }

            i = i + 1
        }
        j = j + 1
    }

    return hoteisC, clienteC
}

// Retorna o melhor hotel mais barato
function escolha(hoteisC, clienteC) {


    // Variáveis auxiliares para comparação 
    var i = 0
    var escolhido = hoteisC[i]

    // Percorre os hoteis buscando o mais barato 
    while (i < hoteisC.length) {
        // Caso os hoteis tenham o mesmo valor, escolhe o com maior classificação 
        if (hoteisC[i].valor == escolhido.valor && hoteisC[i].classe > escolhido.classe) {
            escolhido = hoteisC[i]
        }
        //Caso tenha um valor menor substitui o hotel escolhido pelo atual 
        else if (hoteisC[i].valor < escolhido.valor) {
            escolhido = hoteisC[i]
        }
        i = i + 1
    }

    // Retorna o hotel escolhido e seu valor 
    clienteC.valor = escolhido.valor
    clienteC.hotel = escolhido.nome

    return clienteC

}

// Executa função 
// hotel_escolhido('regular: 20Mar2009(sat)')

// Exporta função para testes 
module.exports.hotel_escolhido = hotel_escolhido;
