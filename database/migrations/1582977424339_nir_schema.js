'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NirSchema extends Schema {
  up () {
    this.create('nirs', (table) => {
      table.increments()
      table.string('theme')
      table.text('desc')
      table.timestamps()
    })
  }

  down () {
    this.drop('nirs')
  }
}

module.exports = NirSchema
