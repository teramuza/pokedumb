'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonsSchema extends Schema {
  up () {
    this.create('pokemons', (table) => {
      table.increments()
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('cascade').onUpdate('cascade')
      table.string('name').notNullable()
      table.string('image_url').notNullable()
      table.string('latitude').notNullable()
      table.string('longitude').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemons')
  }
}

module.exports = PokemonsSchema
