'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserCourseSchema extends Schema {
  up () {
    this.create('user_course', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('course_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_course')
  }
}

module.exports = UserCourseSchema
