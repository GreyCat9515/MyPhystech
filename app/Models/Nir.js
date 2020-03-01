'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Nir extends Model {
    feedbacks() {
        return this.hasMany('App/Models/NirFeedback')
    }
}

module.exports = Nir
