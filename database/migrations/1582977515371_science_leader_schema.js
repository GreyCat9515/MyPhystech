'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScienceLeaderSchema extends Schema {
  up () {
    this.create('science_leaders', (table) => {
      table.increments()
      table.string('name')
      table.string('surname')
      table.text('desc')
      table.timestamps()
    })
  }

  down () {
    this.drop('science_leaders')
  }
}

module.exports = ScienceLeaderSchema
