'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Helpers = use('Helpers')
const fs = use('fs')

class ServeGZ {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    try {
      if (request.url().match(/\.js$/)) {
        response.header('Content-Encoding', 'gzip')
        response.header('Content-Type', 'application/javascript')
        response.send(fs.readFileSync(Helpers.publicPath(`${request.url()}.gz`)))
        response.end()
      } else {
        throw -1
      }
    } catch (e) {
      await next()
    }
  }
}

module.exports = ServeGZ
