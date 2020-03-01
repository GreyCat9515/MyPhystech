'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NirFeedbackSchema extends Schema {
  up () {
    this.create('nir_feedbacks', (table) => {
      table.increments()
      table.integer('user_id').unique()
      table.integer('nir_id')
      table.integer('overall_rate')
      table.string('feedback')
      table.timestamps()
    })
  }

  down () {
    this.drop('nir_feedbacks')
  }
}

module.exports = NirFeedbackSchema
