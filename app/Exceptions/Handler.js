"use strict";

const BaseExceptionHandler = use("BaseExceptionHandler");

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response, view }) {
    console.log(error)

    if (error.name === "InvalidSessionException") {
      if (request.ajax()) {
        response.status(404).send({ status: 404, error: "session not found"});
      } else {
        response.redirect(`/signin`);
      }
      return;
    }


    if (request.ajax()) {
      response.status(404).send({ status: 404, error: "not found"});
    } else {
      response.status(404).send(
        view.render("notFound")
      );
    }
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, { request }) {}
}

module.exports = ExceptionHandler;
