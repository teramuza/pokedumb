const initialValue = {
	data : [],
	categories : [],
	item : [],
	isLoading : false,
	isError: false
}

export default (state = initialValue, action) => {
  	switch (action.type) {
	    case 'GET_POKEMONS_PENDING':
	    	return{
	    		...state,
	    		isLoading : true
	    	}

	    case 'GET_POKEMONS_FULFILLED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		data : action.payload.data,
	    	}

	    case 'GET_POKEMONS_REJECTED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		isError : true,
	    	}

	    case 'GET_POKEMON_PENDING':
	    	return{
	    		...state,
	    		isLoading : true
	    	}

	    case 'GET_POKEMON_FULFILLED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		data : action.payload.data,
	    	}

	    case 'GET_POKEMON_REJECTED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		isError : true,
	    	}

	    case 'GET_CATEGORIES_PENDING':
	    	return{
	    		...state,
	    		isLoading : true
	    	}

	    case 'GET_CATEGORIES_FULFILLED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		data : action.payload.data,
	    	}

	    case 'GET_CATEGORIES_REJECTED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		isError : true,
	    	}
	    case 'GET_POKEMON_PENDING':
	    	return{
	    		...state,
	    		isLoading : true
	    	}

	    case 'GET_POKEMON_FULFILLED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		data : action.payload.data,
	    	}

	    case 'GET_POKEMON_REJECTED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		isError : true,
	    	}
	    
	    
	    default:
	    	return state;
	   
	}
}


