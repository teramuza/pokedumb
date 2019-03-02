'use strict'

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Type = use('App/Models/Type')
const Factory = use('Factory')

class TypeSeeder {
  async run () {
  	const type1 = new Type()
  	type1.name = 'Bug'
  	await type1.save()

  	const type2 = new Type()
  	type2.name = 'Dragon'
  	await type2.save()

  	const type3 = new Type()
  	type3.name = 'Fire'
  	await type3.save()
  	
  	const type4 = new Type()
  	type4.name = 'Ghost'
  	await type4.save()
  	
  	const type5 = new Type()
  	type5.name = 'Ground'
  	await type5.save()
  	
  	const type6 = new Type()
  	type6.name = 'Ice'
  	await type6.save()
  	
  	const type7 = new Type()
  	type7.name = 'Normal'
  	await type7.save()
  	
  	const type8 = new Type()
  	type8.name = 'Steel'
  	await type8.save()
  	
  	const type10 = new Type()
  	type10.name = 'Water'
  	await type10.save()
  	
  }
}

module.exports = TypeSeeder
