'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserScienceLeaderSchema extends Schema {
  up () {
    this.create('user_science_leader', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('science_leader_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_science_leader')
  }
}

module.exports = UserScienceLeaderSchema
