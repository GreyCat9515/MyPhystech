'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourseFeedbackSchema extends Schema {
  up () {
    this.create('course_feedbacks', (table) => {
      table.increments()
      table.integer('user_id').unique()
      table.integer('course_id')
      table.integer('overall_rate')
      table.string('feedback')
      table.timestamps()
    })
  }

  down () {
    this.drop('course_feedbacks')
  }
}

module.exports = CourseFeedbackSchema
