"use strict";
const Course = use("App/Models/Course");
const CourseFeedback = use("App/Models/CourseFeedback");

const Nir = use("App/Models/Nir");
const NirFeedback = use("App/Models/NirFeedback");

const Professor = use("App/Models/Professor");
const ProfessorFeedback = use("App/Models/ProfessorFeedback");

const Scienceleader = use("App/Models/Scienceleader");
const ScienceleaderFeedback = use("App/Models/ScienceleaderFeedback");

class EntityController {
  async courses() {
    return await Course.query()
      .with("feedbacks")
      .fetch();
  }
  async mycourses({ auth }) {
    return (
      await auth.user
        .courses()
        .select("id")
        .fetch()
    )
      .toJSON()
      .map(el => el.id);
  }
  async сourseFeedback({ request, auth }) {
    const { id, overall_rate, feedback } = request.all();
    let new_feedback = new CourseFeedback();
    new_feedback.user_id = auth.user.id;
    new_feedback.course_id = id;
    new_feedback.overall_rate = overall_rate;
    new_feedback.feedback = feedback;
    await new_feedback.save();
    return new_feedback.id;
  }

  async professors() {
    return await Professor.query()
      .with("feedbacks")
      .fetch();
  }
  async myprofessors({ auth }) {
    return (
      await auth.user
        .professors()
        .select("id")
        .fetch()
    )
      .toJSON()
      .map(el => el.id);
  }
  async professorFeedback({ request, auth }) {
    const { id, overall_rate, feedback } = request.all();
    let new_feedback = new ProfessorFeedback();
    new_feedback.user_id = auth.user.id;
    new_feedback.professor_id = id;
    new_feedback.overall_rate = overall_rate;
    new_feedback.feedback = feedback;
    await new_feedback.save();
    return new_feedback.id;
  }

  async nirs() {
    return await Nir.query()
      .with("feedbacks")
      .fetch();
  }
  async mynirs({ auth }) {
    return (
      await auth.user
        .nirs()
        .select("id")
        .fetch()
    )
      .toJSON()
      .map(el => el.id);
  }
  async nirFeedback({ request, auth }) {
    const { id, overall_rate, feedback } = request.all();
    let new_feedback = new NirFeedback();
    new_feedback.user_id = auth.user.id;
    new_feedback.nir_id = id;
    new_feedback.overall_rate = overall_rate;
    new_feedback.feedback = feedback;
    await new_feedback.save();
    return new_feedback.id;
  }

  async scienceleaders() {
    return await Scienceleader.query()
      .with("feedbacks")
      .fetch();
  }
  async myscienceleaders({ auth }) {
    return (
      await auth.user
        .scienceleaders()
        .select("id")
        .fetch()
    )
      .toJSON()
      .map(el => el.id);
  }
  async scienceleaderFeedback({ request, auth }) {
    const { id, overall_rate, feedback } = request.all();
    let new_feedback = new ScienceleaderFeedback();
    new_feedback.user_id = auth.user.id;
    new_feedback.science_leader_id = id;
    new_feedback.overall_rate = overall_rate;
    new_feedback.feedback = feedback;
    await new_feedback.save();
    return new_feedback.id;
  }
}

module.exports = EntityController;
