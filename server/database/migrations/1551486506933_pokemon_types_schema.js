'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonTypesSchema extends Schema {
  up () {
    this.create('pokemon_types', (table) => {
      table.increments()
      table.integer('pokemon_id').unsigned().references('id').inTable('pokemons')
      table.integer('type_id').unsigned().references('id').inTable('types')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemon_types')
  }
}

module.exports = PokemonTypesSchema
