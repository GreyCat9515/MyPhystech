'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessorFeedbackSchema extends Schema {
  up () {
    this.create('professor_feedbacks', (table) => {
      table.increments()
      table.integer('user_id').unique()
      table.integer('professor_id')
      table.integer('overall_rate')
      table.string('feedback')
      table.timestamps()
    })
  }

  down () {
    this.drop('professor_feedbacks')
  }
}

module.exports = ProfessorFeedbackSchema
