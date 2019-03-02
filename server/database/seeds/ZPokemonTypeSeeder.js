'use strict'

/*
|--------------------------------------------------------------------------
| PokemonTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const PokemonType = use('App/Models/PokemonType')
const Factory = use('Factory')

class ZPokemonTypeSeeder {
  async run () {
  	const pok1 = new PokemonType()
  	pok1.pokemon_id = '1'
  	pok1.type_id = '2'
  	await pok1.save()

  	const pok2 = new PokemonType()
  	pok2.pokemon_id = '1'
  	pok2.type_id = '1'
  	await pok2.save()

  	const pok3 = new PokemonType()
  	pok3.pokemon_id = '2'
  	pok3.type_id = '3'
  	await pok3.save()

  	const pok4 = new PokemonType()
  	pok4.pokemon_id = '3'
  	pok4.type_id = '7'
  	await pok4.save()

  	const pok5 = new PokemonType()
  	pok5.pokemon_id = '2'
  	pok5.type_id = '2'
  	await pok5.save()

  	const pok6 = new PokemonType()
  	pok6.pokemon_id = '4'
  	pok6.type_id = '2'
  	await pok6.save()

  	const pok7 = new PokemonType()
  	pok7.pokemon_id = '4'
  	pok7.type_id = '2'
  	await pok7.save()

  	const pok8 = new PokemonType()
  	pok8.pokemon_id = '5'
  	pok8.type_id = '2'
  	await pok8.save()


  	
  }
}

module.exports = ZPokemonTypeSeeder
