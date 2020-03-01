'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome').middleware('auth')
Route.get('/signin', 'UserController.signinPage')
Route.post('/signin', 'UserController.signin')
Route.post('/logout', 'UserController.logout').middleware('auth')

Route.get('/courses', 'EntityController.courses').middleware('auth')
Route.get('/my-courses', 'EntityController.mycourses').middleware('auth')
Route.post('/course-feedback', 'EntityController.сourseFeedback').middleware('auth')


Route.get('/professors', 'EntityController.professors').middleware('auth')
Route.get('/my-professors', 'EntityController.myprofessors').middleware('auth')
Route.post('/professor-feedback', 'EntityController.professorFeedback').middleware('auth')


Route.get('/nirs', 'EntityController.nirs').middleware('auth')
Route.get('/my-nirs', 'EntityController.mynirs').middleware('auth')
Route.post('/nir-feedback', 'EntityController.nirFeedback').middleware('auth')


Route.get('/scienceleaders', 'EntityController.scienceleaders').middleware('auth')
Route.get('/my-scienceleaders', 'EntityController.myscienceleaders').middleware('auth')
Route.post('/scienceleader-feedback', 'EntityController.scienceleaderFeedback').middleware('auth')