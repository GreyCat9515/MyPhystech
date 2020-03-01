'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScienceLeaderFeedbackSchema extends Schema {
  up () {
    this.create('science_leader_feedbacks', (table) => {
      table.increments()
      table.integer('user_id').unique()
      table.integer('science_leader_id')
      table.integer('overall_rate')
      table.string('feedback')
      table.timestamps()
    })
  }

  down () {
    this.drop('science_leader_feedbacks')
  }
}

module.exports = ScienceLeaderFeedbackSchema
