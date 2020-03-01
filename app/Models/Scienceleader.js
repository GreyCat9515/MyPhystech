'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Scienceleader extends Model {
    static get table () {
        return 'science_leaders'
      }
    feedbacks() {
        return this.hasMany('App/Models/ScienceleaderFeedback', 'id', 'science_leader_id')
    }
}

module.exports = Scienceleader
