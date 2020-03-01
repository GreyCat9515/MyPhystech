'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserNirSchema extends Schema {
  up () {
    this.create('user_nir', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('nir_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_nir')
  }
}

module.exports = UserNirSchema
