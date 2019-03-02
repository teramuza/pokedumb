'use strict'

/*
|--------------------------------------------------------------------------
| PokemonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Pokemon = use('App/Models/Pokemon')
const Factory = use('Factory')

class PokemonSeeder {
  async run () {
  	const pok1 = new Pokemon()
  	pok1.category_id = '2'
  	pok1.name = 'Ivysaur'
  	pok1.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png'
  	pok1.latitude = '-6.301721000000001'
  	pok1.longitude = '106.73279149999999'
  	await pok1.save()

  	const pok2 = new Pokemon()
  	pok2.category_id = '1'
  	pok2.name = 'Raticate'
  	pok2.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png'
  	pok2.latitude = '-6.289624'
  	pok2.longitude = '106.732389'
  	await pok2.save()

  	const pok3 = new Pokemon()
  	pok3.category_id = '2'
  	pok3.name = 'Tentacool'
  	pok3.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacool.png'
  	pok3.latitude = '-6.287265'
  	pok3.longitude = '106.724619'
  	await pok3.save()

  	const pok4 = new Pokemon()
  	pok4.category_id = '4	'
  	pok4.name = 'Krabby'
  	pok4.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krabby.png'
  	pok4.latitude = '-6.297173'
  	pok4.longitude = '106.725208'
  	await pok4.save()

  	const pok5 = new Pokemon()
  	pok5.category_id = '12'
  	pok5.name = 'Jynx'
  	pok5.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jynx.png'
  	pok5.latitude = '6.303429'
  	pok5.longitude = '106.734484'
  	await pok5.save()

    const pok6 = new Pokemon()
    pok6.category_id = '12'
    pok6.name = 'Jynx'
    pok6.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jynx.png'
    pok6.latitude = '6.303429'
    pok6.longitude = '106.734484'
    await pok6.save()

    const pok7 = new Pokemon()
    pok7.category_id = '12'
    pok7.name = 'Jynx'
    pok7.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jynx.png'
    pok7.latitude = '6.303429'
    pok7.longitude = '106.734484'
    await pok7.save()

    const pok8 = new Pokemon()
    pok8.category_id = '11'
    pok8.name = 'Dugtrio'
    pok8.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png'
    pok8.latitude = '6.303429'
    pok8.longitude = '106.734484'
    await pok8.save()

    const pok9 = new Pokemon()
    pok9.category_id = '8'
    pok9.name = 'Persian'
    pok9.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png'
    pok9.latitude = '6.303429'
    pok9.longitude = '106.734484'
    await pok9.save()

    const pok10 = new Pokemon()
    pok10.category_id = '2'
    pok10.name = 'Torterra'
    pok10.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torterra.png'
    pok10.latitude = '6.303429'
    pok10.longitude = '106.734484'
    await pok10.save()

    const pok11 = new Pokemon()
    pok11.category_id = '4'
    pok11.name = 'Monferno'
    pok11.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/monferno.png'
    pok11.latitude = '6.303429'
    pok11.longitude = '106.734484'
    await pok11.save()

    const pok12 = new Pokemon()
    pok12.category_id = '6'
    pok12.name = 'Bibarel'
    pok12.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bibarel.png'
    pok12.latitude = '6.303429'
    pok12.longitude = '106.734484'
    await pok12.save()

    const pok13 = new Pokemon()
    pok13.category_id = '7'
    pok13.name = 'kricketune'
    pok13.image_url = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kricketune.png'
    pok13.latitude = '6.303429'
    pok13.longitude = '106.734484'
    await pok13.save()
  	
  }
}

module.exports = PokemonSeeder
