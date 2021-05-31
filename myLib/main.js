

const finais_semana = ['sat', 'sun']
function hotel_escolhido(dadosCliente) {


    const cliente = {
        tipo: false,
        dias: [],
        hotel: '',
        valor: 0
    }

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
    
    var clienteClone = new Object(cliente)
    var hoteisClone = new Object(hoteis)

    clienteClone = avEntrada(dadosCliente, clienteClone)
    // console.log('clienteClone: ')
    // console.log(clienteClone)

    hoteisClone, clienteClone = valor(hoteisClone, clienteClone)

    // console.log('hoteisClone: ')
    // console.log(hoteisClone)

    clienteClone = escolha(hoteisClone, clienteClone)
    var resposta = clienteClone.hotel
    // console.log('resposta: ')
    // console.log(clienteClone.hotel)

    return resposta
}

function avEntrada(entrada, clienteC) {

    if (entrada.split(":", 1) == 'Regular') {
        clienteC.tipo = false
    } else {
        clienteC.tipo = true
    }

    dado1 = entrada.split(" ")

    var l = 1
    while (l < dado1.length) {
        if (dado1[l].match(finais_semana[0]) || dado1[l].match(finais_semana[1])) {
            clienteC.dias.push(false)
        } else {
            clienteC.dias.push(true)
        }
        l = l + 1
    }
    return clienteC
}

function valor(hoteisC, clienteC) {

    var j = 0
    while (j < clienteC.dias.length) {
        var i = 0
        while (i < hoteisC.length) {
            if (clienteC.tipo && clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].clientes_fidelidade[0]
            } else if (clienteC.tipo && !clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].clientes_fidelidade[1]
            } else if (!clienteC.tipo && clienteC.dias[j]) {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].clientes_normais[0]
            } else {
                hoteisC[i].valor = hoteisC[i].valor + hoteisC[i].clientes_normais[1]
            }

            i = i + 1
        }
        j = j + 1
    }
    // console.log(hoteisC)
    // console.log(clienteC)
    return hoteisC, clienteC
}

function escolha(hoteisC, clienteC) {
    var i = 0
    var escolhido = hoteisC[i]

    while (i < hoteisC.length) {

        if (hoteisC[i].valor == escolhido.valor && hoteisC[i].classe > escolhido.classe) {
            escolhido = hoteisC[i]
        } else if (hoteisC[i].valor < escolhido.valor) {
            escolhido = hoteisC[i]
        }
        i = i + 1
    }

    clienteC.valor = escolhido.valor
    clienteC.hotel = escolhido.nome

    return clienteC

}




hotel_escolhido('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)')



module.exports.hotel_escolhido = hotel_escolhido;
