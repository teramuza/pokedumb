'use strict'

const Database = use('Database')
const Pokemon = use('App/Models/Pokemon')

class PokemonController {

	async index(){
		const pokemons = await Database
		.select('pokemons.id', 'pokemons.category_id', 'pokemons.name', 'pokemons.image_url', 'pokemons.latitude', 'pokemons.longitude','categories.name AS category')
		.from('pokemons')
		// .innerJoin('pokemon_types', 'pokemons.id', 'pokemon_types.pokemon_id')
		// .innerJoin('types', 'pokemon_types.type_id', 'types.id')
		.innerJoin('categories', 'pokemons.category_id', 'categories.id')

		// .select('pokemons.id', 'pokemons.category_id' 'pokemons.name', 'pokemons.image_url', 'pokemons.latidude', 'pokemons.longitude','categories.name')
		// 
		return pokemons
	}

	async byId({params}){
		const {id} = params
		const pokemon = await Database
		.raw(`SELECT pokemons.id, pokemons.name, pokemons.image_url, pokemons.latitude, pokemons.longitude, categories.name AS category, GROUP_CONCAT(types.name) as types FROM pokemon_types JOIN pokemons on pokemon_types.pokemon_id = pokemons.id JOIN types on pokemon_types.type_id = types.id JOIN categories on pokemons.category_id = categories.id WHERE pokemons.id=${id}`)
		return pokemon
	}

	async input({request}){
      await Pokemon.create(request.all())

	}

	async update({params, request}){
		const {id} = params
		await Pokemon
		.query()
		.where('id', id)
		.update(request.all())
	}
}

module.exports = PokemonController
