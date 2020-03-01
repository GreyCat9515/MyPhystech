"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ScienceleaderFeedback extends Model {
  static get table() {
    return "science_leader_feedbacks";
  }
}

module.exports = ScienceleaderFeedback;
