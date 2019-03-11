'use strict'

const Database = use('Database')
const Pokemon = use('App/Models/Pokemon')
const PokemonType = use('App/Models/PokemonType')

class PokemonController {

	async index({request, response}){

		let pokemons = await Pokemon
		.query()
		.with('categories')
		.with('types')
		.fetch()

		return pokemons

	}
	
	async byId({params}){
		const {id} = params
		let pokemon = await Pokemon
		.query()
		.with('categories')
		.with('types')
		.where('id', id)
		.fetch()

		return pokemon
	}

	async input({request}){
		const {name, image_url, category_id, type_ids, latitude, longitude} = request.post()
		const pokeAdd = {category_id, name, image_url, latitude, longitude}
     	await Pokemon.create(pokeAdd)

     	const poke = await Pokemon.findBy('name', name)
     	await poke.types().attach(type_ids)

     	return request.post()

	}

	async update({params, request}){
		const {id} = params
		const {name, image_url, category_id, type_ids, latitude, longitude} = request.all()
		const pokeUp = {category_id, name, image_url, latitude, longitude}
		
		const poke = await Pokemon.find(id)
		await Pokemon.query().where('id', id).update(pokeUp)
		await poke.types().detach()
		await poke.types().attach(type_ids)
	}

	async delete({params}){
		const {id} = params

		const poke = await Pokemon.find(id)
		await poke.types().detach()
		await poke.delete()
	}
}

module.exports = PokemonController
