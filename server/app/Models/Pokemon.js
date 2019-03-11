'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pokemon extends Model {
	
	categories() {
		return this.belongsTo('App/Models/Category')
	}

	types() {
		return this.belongsToMany('App/Models/Type')
		.pivotTable('pokemon_types')
	}
}

module.exports = Pokemon
