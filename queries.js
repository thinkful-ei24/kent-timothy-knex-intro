'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));

// knex.select('id', 'name', 'borough', 'cuisine')
//   .from('restaurants')
//   .where( { borough: 'Manhattan'} )
//   .debug(true)
//   .then(results => console.log(results));

// 1. Get all restaurants
// knex.select()
//   .from('restaurants')
//   .then(results => console.log(results));

// 2. Get Italian restaurants
// knex.select()
//   .from('restaurants')
//   .where({cuisine: 'Italian'})
//   .then(results => console.log(results));

// 3. Get 10 Italian restaurants, subset of fields
// knex.select('id', 'name')
//   .from('restaurants')
//   .where({cuisine: 'Italian'})
//   .limit(10)
//   .then(results => console.log(results));

// 4. Count of Thai restaurants
// knex('restaurants')
//   .count()
//   .where({cuisine: 'Thai'})
//   .then(results => console.log(results));

// 5. Count of restaurants
// knex('restaurants')
//   .count()
//   .then(results => console.log(results));

// 6. Count of Thai restaurants in zip code
// knex('restaurants')
//   .count()
//   .where({cuisine: 'Thai', address_zipcode: '11372'})
//   .then(results => console.log(results));

// 7. Italian restaurants in one of several zip codes
// knex('restaurants')
//   .select('id', 'name')
//   .where({cuisine: 'Italian'})
//   .whereIn('address_zipcode', ['10012', '10013', '10014'])
//   .orderBy('name', 'asc')
//   .limit(5)
//   .then(results => console.log(results));

// 8. Create a restaurant
// knex('restaurants')
//   .insert({
//     name: 'Byte Cafe', 
//     borough: 'Brooklyn', 
//     cuisine: 'coffee', 
//     address_building_number: '123', 
//     address_street: 'Atlantic Avenue', 
//     address_zipcode: '11231'
//   })
//   .then(results => console.log(results))
//   .catch( err => console.log( err ) );

// knex('restaurants')
//   .select()
//   .where({name: 'Byte Cafe'})
//   .then(results => console.log(results))

// 9. Create a restaurant and return id and name
// knex('restaurants')
//   .insert({
//     name: 'Bit Cafe', 
//     borough: 'Brooklyn', 
//     cuisine: 'coffee', 
//     address_building_number: '123', 
//     address_street: 'Atlantic Avenue', 
//     address_zipcode: '11231'
//   })
//   .returning(['id', 'name'])
//   .then(results => console.log(results))
//   .catch( err => console.log( err ) );

// 10. Create three restaurants and return id and name
knex('restaurants')
  .insert([ {name: 'Byt Cafe', borough: 'Brooklyn', cuisine: 'coffee', address_building_number: '123', address_street: 'Atlantic Avenue', address_zipcode: '11231'}, {name: 'Bt Cafe', borough: 'Brooklyn', cuisine: 'coffee', address_building_number: '123', address_street: 'Atlantic Avenue', address_zipcode: '11231'}, {name: 'B Cafe', borough: 'Brooklyn', cuisine: 'coffee', address_building_number: '123', address_street: 'Atlantic Avenue', address_zipcode: '11231'} ])
  .returning(['id', 'name'])
  .then(results => console.log(results))
  .catch( err => console.log( err ) );