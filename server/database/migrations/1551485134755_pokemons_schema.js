'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonsSchema extends Schema {
  up () {
    this.create('pokemons', (table) => {
      table.increments()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.string('name').notNullable()
      table.string('image_url')
      table.string('latitude')
      table.string('longitude')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemons')
  }
}

module.exports = PokemonsSchema
