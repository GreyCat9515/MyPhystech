'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Course extends Model {
    feedbacks() {
        return this.hasMany('App/Models/CourseFeedback')
    }
}

module.exports = Course
