'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Category = use('App/Models/Category')
const Factory = use('Factory')

class CategorySeeder {
  async run () {
  	const cat1 = new Category()
  	cat1.name = 'Armor'
  	await cat1.save()

  	const cat2 = new Category()
  	cat2.name = 'Automaton'
  	await cat2.save()

  	const cat3 = new Category()
  	cat3.name = 'Balloon'
  	await cat3.save()

  	const cat4 = new Category()
  	cat4.name = 'Bird'
  	await cat4.save()

  	const cat5 = new Category()
  	cat5.name = 'Cannon'
  	await cat5.save()

  	const cat6 = new Category()
  	cat6.name = 'Centipede'
  	await cat6.save()

  	const cat7 = new Category()
  	cat7.name = 'Cobra'
  	await cat7.save()

  	const cat8 = new Category()
  	cat8.name = 'Dark'
  	await cat8.save()

  	const cat9 = new Category()
  	cat9.name = 'Dragon'
  	await cat9.save()

  	const cat10 = new Category()
  	cat10.name = 'Drill'
  	await cat10.save()

  	const cat11 = new Category()
  	cat11.name = 'Emperor'
  	await cat11.save()

  	const cat12 = new Category()
  	cat12.name = 'Fairy'
  	await cat12.save()

  	const cat13 = new Category()
  	cat13.name = 'Gripper'
  	await cat13.save()

  	const cat14 = new Category()
  	cat14.name = 'Hearing'
  	await cat14.save()

  	const cat15 = new Category()
  	cat15.name = 'Iron Ball'
  	await cat15.save()

  	const cat16 = new Category()
  	cat16.name = 'Lunar'
  	await cat16.save()
  }
}

module.exports = CategorySeeder
