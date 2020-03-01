'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class UserSeeder {
  async run () {
    await Database.table('users')
    .insert({
      name: 'Иван',
      surname: 'Иванов',
      email: 'admin@admin.admin',
      role: 0,
      password: '$2a$10$I7w5q4Qrh9ySyp8gO0.MU./5i7HdqDfeCiX.oLGnfZcahQAVrkKx6',
    })
    await Database.table('users')
    .insert({
      name: 'Валерий',
      surname: 'Юрьев',
      email: 'user@user.user',
      role: 2,
      password: '$2a$10$McUBFoGWi7FYvBqh3GNGfu.E/aPFdiu9yVr5cWYW9N2qM2RaqW19O',
    })
    await Database.table('users')
    .insert({
      name: 'Андрей',
      surname: 'Кошкин',
      email: 'professor@professor.professor',
      role: 'professor',
      password: '$2a$10$McUBFoGWi7FYvBqh3GNGfu.E/aPFdiu9yVr5cWYW9N2qM2RaqW19O',
    })
  }
}

module.exports = UserSeeder
