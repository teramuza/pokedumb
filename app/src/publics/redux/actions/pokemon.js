import axios from 'axios'

import '../../conf'

export const getPokemons = () => {
	return{
		type : 'GET_POKEMONS',
		payload : axios.get(`${apiUrl}/pokemons`)
	}
}

export const getPokemon = (id) => {
	return{
		type : 'GET_POKEMON',
		payload : axios.get(`${apiUrl}/pokemon/${id}`)
	}
}

export const addPokemon = (body) => {
	return {
		type : 'ADD_POKEMON',
		payload : axios.post(`${apiUrl}/pokemon`, body)
	}
}

export const getCategories = () => {
	return {
		type : 'GET_CATEGORIES',
		payload : axios.get(`${apiUrl}/categories`)
	}
}