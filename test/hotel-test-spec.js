'use strict'

const chai = require('chai')
const expect = chai.expect

// Importa funções 
const myLib = require('../myLib/main')

// Entradas 
const dadosHotel = [
  // Testes fornecidos
  'Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)',
  'Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)',
  'Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)',
  
  //Outros testes
  'Reward: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)',
  'Reward: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)',
  'Regular: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)'
]


describe('hotel_escolhido()', function () {
  // Testes fornecidos
  it('Entrada 01: ', function () {
    expect(myLib.hotel_escolhido(dadosHotel[0])).to.equal('Lakewood');
  });
  it('Entrada 02: ', function () {
    expect(myLib.hotel_escolhido(dadosHotel[1])).to.equal('Bridgewood');
  });
  it('Entrada 03: ', function () {
    expect(myLib.hotel_escolhido(dadosHotel[2])).to.equal('Ridgewood');
  });

  //Outros testes
  it('Entrada 04: ', function () {
    expect(myLib.hotel_escolhido(dadosHotel[3])).to.equal('Lakewood');
  });
  it('Entrada 05: ', function () {
    expect(myLib.hotel_escolhido(dadosHotel[4])).to.equal('Ridgewood');
  });
  it('Entrada 06: ', function () {
    expect(myLib.hotel_escolhido(dadosHotel[5])).to.equal('Lakewood');
  })
})