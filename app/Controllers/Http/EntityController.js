'use strict'
const Course = use('App/Models/Course')
const CourseFeedback = use('App/Models/CourseFeedback')

class EntityController {
    async courses() {
        return await Course.query().with('feedbacks').fetch()
    }
    async mycourses({auth}) {
        return (await auth.user.courses().select('id').fetch()).toJSON()
        .map(el => el.id)
    }
    async feedbacksubmit({request, auth}) {
        const { course_id, overall_rate, feedback } = request.all()
        let new_feedback = new CourseFeedback()
        new_feedback.user_id = auth.user.id
        new_feedback.course_id = course_id
        new_feedback.overall_rate = overall_rate
        new_feedback.feedback = feedback
        await new_feedback.save()
        return new_feedback.id
    }
}

module.exports = EntityController
