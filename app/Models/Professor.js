'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Professor extends Model {
    feedbacks() {
        return this.hasMany('App/Models/ProfessorFeedback')
    }
}

module.exports = Professor
