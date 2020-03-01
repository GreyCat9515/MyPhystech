'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserProfessorSchema extends Schema {
  up () {
    this.create('user_professor', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('professor_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_professor')
  }
}

module.exports = UserProfessorSchema
