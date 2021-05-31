'use strict'

const chai = require('chai')
const expect = chai.expect

// Importa funções 
const definido=require('../myLib/main')

// Entradas 
const dadosHotel=[
'Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)',
'Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)',
'Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)'
]


describe('hotel_escolhido()', function () {
  it('Entrada 01: ', function () {
    expect(definido.hotel_escolhido(dadosHotel[0])).to.equal('Lakewood');
  });
  it('Entrada 02: ', function () {
    expect(definido.hotel_escolhido(dadosHotel[1])).to.equal('Bridgewood');
  });
  it('Entrada 03: ', function () {
    expect(definido.hotel_escolhido(dadosHotel[2])).to.equal('Ridgewood');
  })
})