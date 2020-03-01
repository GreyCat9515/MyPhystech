'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Scienceleader extends Model {
    feedbacks() {
        return this.hasMany('App/Models/ScienceleaderFeedback')
    }
}

module.exports = Scienceleader
