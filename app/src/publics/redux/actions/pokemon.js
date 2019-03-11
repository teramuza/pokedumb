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
		payload : axios.get(`${apiUrl}/pokemon/${id}`, 
			{headers : 
				{Authorization : `Bearer ${token}`}
			}
		)
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

export const getTypes = () => {
	return {
		type : 'GET_TYPES',
		payload : axios.get(`${apiUrl}/types`)
	}
}

export const editPoke = (body, id) => {
	return {
		type : 'EDIT_POKE',
		payload : axios.patch(`${apiUrl}/pokemon/${id}`, body)
	}
}

export const delPoke = (id) => {
	return{
		type : 'DEL_POKE',
		payload : axios.delete(`${apiUrl}/pokemon/${id}`)
	}
}