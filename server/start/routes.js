'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
// Route.get('/', 'ProductController.index')

Route.group(() => {

	Route.get('categories', 'CategoryController.index')
	Route.get('types', 'TypeController.index')


	Route.get('pokemons', 'PokemonController.index')
	Route.get('pokemon/:id', 'PokemonController.byId')
	Route.post('pokemon', 'PokemonController.input')
	Route.patch('pokemon/:id', 'PokemonController.update')
	Route.delete('pokemon/:id', 'PokemonController.delete')

	//auth
	Route.post('auth/register', 'AuthController.register').middleware(['guest'])
	Route.post('auth/login', 'AuthController.login').middleware(['guest'])
	Route.post('auth/logout', 'AuthController.revokeUserToken').middleware(['auth'])
	Route.get('auth/check', 'AuthController.checkLogin').middleware(['auth'])

	//Profile
	Route.get('user/:id', 'CustomerController.profile').middleware(['auth'])

}).prefix('api/v1')
